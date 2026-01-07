import { Globe, Heart, Zap } from 'lucide-react';
import React from 'react';

const Features = () => {
    return (
        <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="card bg-base-200 hover:scale-110 shadow-xl p-8">
              <Heart size={50} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Safe & Secure</h3>
              <p>Payments held in escrow until you're 100% satisfied</p>
            </div>
            <div className="card bg-base-200 hover:scale-110 shadow-xl p-8">
              <Zap size={50} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Fast Results</h3>
              <p>Get proposals within hours, not days</p>
            </div>
            <div className="card bg-base-200 hover:scale-110 shadow-xl p-8">
              <Globe size={50} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Worldwide Talent</h3>
              <p>Work with top professionals from anywhere</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Features;