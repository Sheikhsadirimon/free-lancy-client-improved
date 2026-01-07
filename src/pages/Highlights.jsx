import { CheckCircle2, Users, Zap } from "lucide-react";
import React from "react";

const Highlights = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Users size={48} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">50,000+ Freelancers</h3>
            <p className="text-base-600">
              Join a global community of talented professionals ready to bring
              your ideas to life
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <CheckCircle2 size={48} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Secure Escrow Payments</h3>
            <p className="text-base-600">
              Your payment is held safely until you're 100% satisfied with the
              work
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Zap size={48} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Fast Results</h3>
            <p className="text-base-600">
              Get proposals from qualified freelancers within hours of posting
              your job
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
