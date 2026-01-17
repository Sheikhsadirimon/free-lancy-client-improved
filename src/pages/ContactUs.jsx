import { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

 
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-base-200 py-30 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-8 md:p-12">
            <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-center text-base-content/70 mb-10">
              Have questions or need help? We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
      
              <div>
                <label className="label">
                  <span className="label-text font-medium">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                  required
                />
              </div>

          
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

           
              <div>
                <label className="label">
                  <span className="label-text font-medium">Your Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  className="textarea textarea-bordered w-full h-32"
                  required
                />
              </div>

            
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="btn btn-primary px-12"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>

            
            <div className="mt-12 text-center text-base-content/70">
              <p>Or reach us directly at:</p>
              <p className="font-medium mt-2">support@freelancy.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;