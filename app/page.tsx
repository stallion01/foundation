import { Nav } from "@/components/nav"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-primary">
              Supporting Healthy, Productive Lives in Developing Countries in Asia
            </h1>
            <p className="text-xl text-muted-foreground">
              Guided by the Christian principles of loving thy neighbor, the Chackos Foundation works to help people lead healthy, productive lives. We focus on improving people&apos;s health and
              well-being in developing countries across Asia by giving them the chance to lift themselves out of homelessness, hunger, and extreme poverty.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-primary">Our Focus Areas</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-8 shadow-sm transition-colors hover:bg-accent">
              <h3 className="mb-4 text-xl font-semibold">Healthcare</h3>
              <p className="text-muted-foreground">
                Supporting innovative healthcare programs that improve the lives of children and families.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-sm transition-colors hover:bg-accent">
              <h3 className="mb-4 text-xl font-semibold">Education</h3>
              <p className="text-muted-foreground">
                Investing in educational initiatives that create opportunities for growth and learning.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-sm transition-colors hover:bg-accent">
              <h3 className="mb-4 text-xl font-semibold">Housing</h3>
              <p className="text-muted-foreground">
                Providing sustainable housing solutions to help families build stable and secure lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 font-semibold">Contact Us</h4>
              <p className="text-primary-foreground/80">
                Email: info@chackosfoundation.org
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Location</h4>
              <p className="text-primary-foreground/80">
                1070 Tunnel Rd Bldg 1 Ste 10<br />
                PMB 334<br />
                Asheville, NC 28805
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/60 mb-2">&copy; {new Date().getFullYear()} Chackos Foundation. All rights reserved.</p>
            <p className="text-primary-foreground/60 text-sm">Chackos Family Foundation is a 501(c)(3) tax-exempt organization (EIN 93-4851 835)</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
