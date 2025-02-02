import { Nav } from "@/components/nav"

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      
      <section className="relative bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-primary">
            Our Programs
          </h1>
          
          <div className="prose prose-gray max-w-4xl">
            <p className="text-lg text-muted-foreground mb-12">
              The Chackos Family Foundation focuses on three key areas to create lasting positive 
              impact in developing countries across Asia.
            </p>

            {/* Healthcare Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Healthcare Programs
              </h2>
              <div className="bg-card border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  Our healthcare initiatives focus on improving access to quality medical care and 
                  preventive health services in underserved communities.
                </p>
                <h3 className="text-lg font-semibold mb-4">Key Focus Areas:</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>Primary healthcare access and infrastructure development</li>
                  <li>Maternal and child health programs</li>
                  <li>Medical training and capacity building</li>
                  <li>Preventive healthcare and wellness education</li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Education Initiatives
              </h2>
              <div className="bg-card border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  We believe education is a fundamental right and a pathway to opportunity. Our 
                  programs support quality education and skill development.
                </p>
                <h3 className="text-lg font-semibold mb-4">Key Focus Areas:</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>School infrastructure and resources</li>
                  <li>Teacher training and development</li>
                  <li>Vocational training programs</li>
                  <li>Educational technology and digital literacy</li>
                </ul>
              </div>
            </div>

            {/* Housing Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Housing Solutions
              </h2>
              <div className="bg-card border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  Our housing programs aim to provide safe, sustainable, and dignified living 
                  conditions for families in need.
                </p>
                <h3 className="text-lg font-semibold mb-4">Key Focus Areas:</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>Affordable housing development</li>
                  <li>Community infrastructure improvement</li>
                  <li>Sustainable building practices</li>
                  <li>Emergency housing assistance</li>
                </ul>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-primary/5 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Impact
              </h2>
              <p className="text-muted-foreground">
                Through our integrated approach to healthcare, education, and housing, we aim to create 
                sustainable, long-term improvements in the quality of life for communities across Asia. 
                We work closely with local partners and organizations to ensure our programs are 
                culturally appropriate and meet the specific needs of each community we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 