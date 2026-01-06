import React from 'react';
import { Link } from 'react-router';

const CallToAction = () => {
    return (
        <section className="py-20 mt-10 bg-base-200 text-bg-base-100">
        <div className="container mx-auto px-6 text-center ">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-bg-base-100">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of freelancers and clients achieving amazing results together
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/all-jobs">
              <button className="btn btn-neutral btn-lg px-10 hover:text-primary">
                Find Talent
              </button>
            </Link>
            <Link to="/add-job">
              <button className="btn btn-ghost btn-lg px-10 border-gray-500 text-bg-base-100 hover:bg-base-100 hover:text-primary">
                Post a Job Free
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default CallToAction;