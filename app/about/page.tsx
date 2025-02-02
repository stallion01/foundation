import { Nav } from "@/components/nav"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      
      <section className="relative bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-primary">
            Our Grantmaking
          </h1>
          
          <div className="prose prose-gray max-w-3xl">
            <p className="text-lg text-muted-foreground mb-8">
              The Chackos Family Foundation (CFF) reviews proposals primarily on a <strong>by-invitation-only</strong> basis. 
              The staff solicits information from entities whose missions and goals resonate with the Trustees&apos; funding 
              priorities and current areas of focus in developing countries across Asia.
            </p>

            <p className="text-muted-foreground mb-8">
              CFF Trustees review grant recommendations throughout the year, and the Foundation does not typically 
              consider more than one request for funding from an organization during any twelve-month grant period.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Evaluation Criteria
            </h2>
            
            <p className="text-muted-foreground mb-6">
              We support organizations that employ a thoughtful and effective approach to meet their goals. 
              In general, the following criteria are used to evaluate funding requests:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-muted-foreground mb-8">
              <li>
                Does the organization demonstrate effective leadership, a strong board, solid planning 
                and sound financial practices?
              </li>
              <li>
                Does the organization have clearly articulated goals, and a record of success in 
                assessing and achieving them?
              </li>
              <li>
                Do the organization&apos;s mission and goals align with our focus on improving health, 
                education, and housing in developing Asian countries?
              </li>
              <li>
                Is the organization committed to sustainable, long-term impact in their communities?
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Grant Types
            </h2>
            
            <p className="text-muted-foreground mb-8">
              The Foundation provides general operating, project and capital support through annual 
              and multi-year grants, and does not typically make grants toward endowments.
            </p>

            <div className="bg-card border rounded-lg p-8 mt-12">
              <h3 className="text-xl font-semibold mb-4">Annual Reports</h3>
              <p className="text-muted-foreground">
                For details on the Foundation&apos;s recent grantmaking, please see our latest IRS Form 990PFs 
                which are available upon request.
              </p>
            </div>

            <p className="text-muted-foreground mb-6">
              We believe education is a fundamental right and a pathway to opportunity. Our programs support quality education and skill development.
            </p>

            <p className="text-muted-foreground mb-6">
              Our housing programs aim to provide safe, sustainable, and dignified living conditions for families in need.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 