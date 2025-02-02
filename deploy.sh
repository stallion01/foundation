#!/bin/bash

# Configuration
REMOTE_USER="rajesh2064"
REMOTE_HOST="mail.chackos.com"
REMOTE_PORT="4747"
REMOTE_DIR="/var/www/html/foundation"
SSH_KEY_PATH="./foundation_key"

# Build the application
echo "Building the application..."
rm -rf .next
NODE_ENV=production npm run build

# Create the deployment directory on the remote server
echo "Creating deployment directory..."
ssh -t -i "$SSH_KEY_PATH" -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST "sudo mkdir -p $REMOTE_DIR && sudo chown -R $REMOTE_USER:$REMOTE_USER $REMOTE_DIR"

# Copy the application files
echo "Copying files to server..."
echo "1. Copying standalone files..."
scp -i "$SSH_KEY_PATH" -P $REMOTE_PORT \
    .next/standalone/* \
    $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/

echo "2. Copying static files..."
scp -i "$SSH_KEY_PATH" -P $REMOTE_PORT -r \
    .next/static \
    .next/server \
    public \
    $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/

# Set up static files correctly
echo "3. Setting up static files..."
ssh -t -i "$SSH_KEY_PATH" -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST "cd $REMOTE_DIR && \
    rm -rf .next && mkdir -p .next && \
    mv static .next/ && \
    mv server .next/ && \
    chmod -R 755 .next public"

# Install and setup Node.js with NVM
echo "Setting up Node.js environment..."
ssh -t -i "$SSH_KEY_PATH" -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST "
    echo 'Installing NVM...'
    export NVM_DIR=\"\$HOME/.nvm\"
    if [ ! -d \"\$NVM_DIR\" ]; then
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    fi
    
    echo 'Loading NVM...'
    . \$NVM_DIR/nvm.sh
    
    echo 'Installing Node.js 16...'
    nvm install 16
    nvm use 16
    
    echo 'Node.js version:'
    node -v
    
    echo 'Installing PM2...'
    npm install -g pm2
    
    echo 'Installing dependencies...'
    cd $REMOTE_DIR
    npm install next@latest react@latest react-dom@latest
    
    echo 'Starting the application...'
    pm2 delete foundation 2>/dev/null || true
    NODE_ENV=production PORT=3000 pm2 start server.js --name foundation --update-env
    
    echo 'PM2 status:'
    pm2 list
    
    echo 'Application logs:'
    sleep 2
    pm2 logs foundation --lines 20 --nostream"

# Set up Apache configuration
echo "Setting up Apache configuration..."
ssh -t -i "$SSH_KEY_PATH" -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST "sudo bash -c 'cat > /etc/apache2/sites-available/foundation.conf << \"EOL\"
<VirtualHost *:80>
    ServerName mail.chackos.com
    DocumentRoot /var/www/html/foundation

    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/

    <Directory /var/www/html/foundation>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    Alias /_next/static /var/www/html/foundation/.next/static
    <Directory /var/www/html/foundation/.next/static>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
        Header set Cache-Control \"public, max-age=31536000, immutable\"
    </Directory>

    Alias /static /var/www/html/foundation/public
    <Directory /var/www/html/foundation/public>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
        Header set Cache-Control \"public, max-age=31536000\"
    </Directory>

    ErrorLog \${APACHE_LOG_DIR}/foundation_error.log
    CustomLog \${APACHE_LOG_DIR}/foundation_access.log combined
</VirtualHost>
EOL'"

# Enable required Apache modules, the site, and restart Apache
echo "Enabling Apache configuration..."
ssh -t -i "$SSH_KEY_PATH" -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST "\
    sudo a2enmod proxy proxy_http headers && \
    sudo a2ensite foundation.conf && \
    sudo apache2ctl configtest && \
    sudo systemctl restart apache2"

echo "Deployment completed!" 