import { Shield, Users, Zap, Award } from "lucide-react"

const AboutPlatform=() =>{
  return (
    <section className="py-10 px-6 bg-base-200 text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3">About FreeLancy Platform</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            FreeLancy is a trusted marketplace connecting talented professionals with meaningful opportunities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
              <Users size={28} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">50,000+ Users</h3>
            <p className="text-primary-foreground/80">Active professionals and employers</p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "80ms" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
              <Zap size={28} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">10,000+ Jobs</h3>
            <p className="text-primary-foreground/80">Opportunities across all industries</p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "160ms" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
              <Shield size={28} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">100% Secure</h3>
            <p className="text-primary-foreground/80">Safe transactions with escrow</p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
              <Award size={28} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Industry Leaders</h3>
            <p className="text-primary-foreground/80">Trusted by Fortune 500 companies</p>
          </div>
        </div>

        <div className="bg-primary/50 rounded-2xl p-12 backdrop-blur  border-primary-foreground/10">
          <h3 className="text-2xl font-bold mb-4">Why Choose FreeLancy?</h3>
          <ul className="space-y-4 text-primary-foreground/90">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2"></span>
              <span>Comprehensive job marketplace with opportunities worldwide</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2"></span>
              <span>Advanced matching algorithm to connect the right talent with right jobs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2"></span>
              <span>Transparent pricing with no hidden fees</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2"></span>
              <span>Dedicated support team available 24/7</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}


export default AboutPlatform