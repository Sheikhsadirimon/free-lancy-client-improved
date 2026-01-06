import React from "react";

const FAQ = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="collapse collapse-plus bg-base-200 rounded-box">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              How does FreeLancy work?
            </div>
            <div className="collapse-content">
              <p className="text-base-600">
                Clients post jobs for free. Freelancers submit proposals. You
                review proposals, hire the best freelancer, and work together.
                Payment is held securely until you approve the completed work.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 rounded-box">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Is it free to post a job?
            </div>
            <div className="collapse-content">
              <p className="text-base-600">
                Yes! Posting a job is completely free. You only pay when you
                hire a freelancer and approve their work.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 rounded-box">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              How do I become a freelancer?
            </div>
            <div className="collapse-content">
              <p className="text-base-600">
                Sign up for free, complete your profile with skills and
                experience, and start applying to jobs that match your
                expertise. The better your profile, the more likely you are to
                get hired!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
