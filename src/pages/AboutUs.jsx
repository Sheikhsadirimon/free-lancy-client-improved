import { Globe, Shield, Zap } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-base-100 py-30">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-8">
          About <span className="text-primary">FreeLancy</span>
        </h1>
        <p className="text-xl text-base-600 max-w-3xl mx-auto mb-12">
          FreeLancy connects talented freelancers with clients worldwide. 
          Post jobs for free, hire top professionals, and get work done securely and fast.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mb-16">
          <div>
            <Globe size={60} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
            <p className="text-base-600">Work with talent from over 150 countries</p>
          </div>
          <div>
            <Shield size={60} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Secure Payments</h3>
            <p className="text-base-600">Escrow protection until you're satisfied</p>
          </div>
          <div>
            <Zap size={60} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Fast & Simple</h3>
            <p className="text-base-600">Post jobs and get proposals in hours</p>
          </div>
        </div>

        <p className="text-lg text-base-600 max-w-2xl mx-auto">
          Launched in 2024, we're building the future of freelance work — one successful project at a time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;