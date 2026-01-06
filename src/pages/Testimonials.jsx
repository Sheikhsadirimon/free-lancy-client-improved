import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-base-200 rounded-2xl p-8 shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-base-700 mb-6">
              "Found an amazing developer in just 2 days. Best platform ever!"
            </p>
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm text-base-600">CEO, TechStart</p>
              </div>
            </div>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-base-700 mb-6">
              "Earned over $50k in my first year. Highly recommend!"
            </p>
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <p className="font-bold">Mike Chen</p>
                <p className="text-sm text-base-600">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-base-700 mb-6">
              "The secure payment system gives me peace of mind every time"
            </p>
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <p className="font-bold">Emma Davis</p>
                <p className="text-sm text-base-600">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
