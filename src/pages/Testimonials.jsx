// components/Testimonials.jsx
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma Davis",
    role: "Marketing Director",
    content: "The secure payment system gives me peace of mind every time",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alex Rivera",
    role: "Product Manager",
    content: "Professional freelancers and excellent support. Couldn't ask for more.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Lisa Wong",
    role: "UI/UX Designer",
    content: "Great clients, fair rates, and timely payments. Love working here!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-base-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Avatar + Name/Role */}
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-base-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;