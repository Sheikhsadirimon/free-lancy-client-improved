import { CheckCircle2, Users, Zap } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          How FreeLancy Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">1. Post Your Job</h3>
            <p className="text-base-600">
              Describe your project and budget. It's free to post!
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">2. Get Proposals</h3>
            <p className="text-base-600">
              Talented freelancers apply with custom proposals
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">3. Hire & Complete</h3>
            <p className="text-base-600">
              Choose the best, collaborate, and get amazing results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
