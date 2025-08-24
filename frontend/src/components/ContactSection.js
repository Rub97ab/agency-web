import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { mockApi } from "../utils/mockApi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    const Service_Id = "service_azrnrsg";
    const template_id = "template_mme4x6u";
    const public_key = "Ou-_2oYZyPdQIAXey";

     const response = await mockApi.submitContactForm(formData, Service_Id, template_id, public_key);
      if(response.success) {
      setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          message: ""
        });}
     else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-full animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-cyan-400/20 rounded-full animate-spin opacity-20" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="display-large mb-6 text-white text-glow">Let's Work Together</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Ready to bring your digital vision to life? Get in touch with us to discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-fade-in-left animate-delay-1' : 'opacity-0'}`}>
            <h3 className="heading-1 mb-8 text-white">Get in Touch</h3>
            <p className="body-medium mb-8 text-gray-300">
              We're here to help you transform your ideas into powerful digital solutions. 
              Reach out to us and let's start building something amazing together.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center group-hover:animate-bounce transition-all duration-300">
                  <Mail size={20} className="text-black" />
                </div>
                <div>
                  <h4 className="heading-3 text-white mb-2 group-hover:text-cyan-400 transition-colors">Email Us</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">info@kcoders.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center group-hover:animate-bounce transition-all duration-300">
                  <Phone size={20} className="text-black" />
                </div>
                <div>
                  <h4 className="heading-3 text-white mb-2 group-hover:text-cyan-400 transition-colors">Call Us</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center group-hover:animate-bounce transition-all duration-300">
                  <MapPin size={20} className="text-black" />
                </div>
                <div>
                  <h4 className="heading-3 text-white mb-2 group-hover:text-cyan-400 transition-colors">Location</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Available Worldwide<br />Remote Team</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black border border-gray-800 rounded-lg group hover:border-cyan-400 transition-all duration-300">
              <h4 className="heading-3 text-white mb-4 group-hover:text-cyan-400 transition-colors">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 "></div>
                  Fast delivery and responsive communication
                </li>
                <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 " ></div>
                  Expert team with proven track record
                </li>
                <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 " ></div>
                  Post-launch support and maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-black border border-gray-800 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 ${isVisible ? 'animate-fade-in-right animate-delay-2' : 'opacity-0'}`}>
            <h3 className="heading-1 mb-6 text-white">Send us a Message</h3>
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg animate-fade-in">
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <p className="text-green-300">Thank you! Your message has been sent successfully.</p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg animate-fade-in">
                <div className="flex items-center">
                  <AlertCircle className="text-red-400 mr-3" size={20} />
                  <p className="text-red-300">Something went wrong. Please try again.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-white mb-2 group-hover:text-cyan-400 transition-colors">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 focus:scale-105"
                    placeholder="Your full name"
                  />
                </div>
                <div className="group">
                  <label className="block text-white mb-2 group-hover:text-cyan-400 transition-colors">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 focus:scale-105"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-white mb-2 group-hover:text-cyan-400 transition-colors">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 focus:scale-105"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-white mb-2 group-hover:text-cyan-400 transition-colors">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 focus:scale-105"
                  >
                    <option value="">Select project type</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="web-app">Web Application</option>
                    <option value="website">Website</option>
                    <option value="both">Mobile App + Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-white mb-2 group-hover:text-cyan-400 transition-colors">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 focus:scale-105"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-white mb-2 group-hover:text-cyan-400 transition-colors">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none focus:scale-105"
                  placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary btn-shine w-full group disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;