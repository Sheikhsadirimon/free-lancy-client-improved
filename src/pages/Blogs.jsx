// components/Blogs.jsx
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const blogPosts = [
  {
    title: "How to Hire the Perfect Freelancer for Your Project",
    excerpt: "Learn expert tips to find, evaluate, and hire top talent that matches your vision and budget.",
    author: "Sarah Johnson",
    date: "January 5, 2026",
    readTime: "8 min read",
    category: "Hiring Tips",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    title: "Top 10 In-Demand Skills in 2026",
    excerpt: "Discover which freelance skills are exploding in demand and how to position yourself for success.",
    author: "Mike Chen",
    date: "December 28, 2025",
    readTime: "6 min read",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1516321310764-9f2323ea6e58?w=800&q=80",
  },
  {
    title: "Success Story: How I Built My Startup with Freelancers",
    excerpt: "A founder shares how FreeLancy helped scale his team from 1 to 20 without a traditional office.",
    author: "Alex Rivera",
    date: "December 20, 2025",
    readTime: "10 min read",
    category: "Success Stories",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "The Ultimate Guide to Remote Work in 2026",
    excerpt: "Best practices, tools, and mindset shifts for thriving in the new era of distributed teams.",
    author: "Emma Davis",
    date: "December 15, 2025",
    readTime: "12 min read",
    category: "Remote Work",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
];

const Blogs = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-base-600 max-w-3xl mx-auto">
            Tips, success stories, and insights to help you succeed in the freelance world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Blog Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="badge badge-primary badge-sm mb-3">{post.category}</span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-base-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-base-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">By {post.author}</p>
                  <Link to="#" className="flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <button className="btn btn-primary btn-lg">
              View All Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;