import React, { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2bb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Coders transformed our vision into a stunning mobile app that exceeded all expectations. Their attention to detail and technical expertise is unmatched. The app has been instrumental in growing our user base by 300%.",
      project: "E-commerce Mobile App"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "CTO",
      company: "InnovateFlow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Working with Coders was a game-changer for our business. They delivered a complex web platform on time and within budget. Their team's communication and technical skills are top-notch.",
      project: "Business Analytics Dashboard"
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Founder",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The healthcare management system they built for us is exactly what we needed. HIPAA compliant, user-friendly, and scalable. Our patients and staff love the new system. Highly recommended!",
      project: "Healthcare Management System"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Product Manager",
      company: "FoodieConnect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Our food delivery platform is now the most popular in the region, thanks to Coders. The multi-platform solution with real-time GPS tracking works flawlessly. Exceptional work!",
      project: "Food Delivery Platform"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director",
      company: "SocialBuzz Media",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The social media app they developed has revolutionized how our users connect. The real-time messaging and photo sharing features are seamless. Coders delivers excellence every time.",
      project: "Social Media App"
    },
    {
      id: 6,
      name: "James Wilson",
      position: "CEO",
      company: "Corporate Dynamics",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Our new corporate website has increased leads by 250%. The SEO optimization and multilingual support have expanded our global reach significantly. Professional team, outstanding results.",
      project: "Corporate Website"
    }
  ];

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

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-24 px-4 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="display-large mb-6 text-white text-glow">
            What Our Clients Say
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Main testimonial */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animate-delay-1' : 'opacity-0'}`}>
          <div className="bg-black border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-cyan-400 transition-all duration-500">
            {/* Quote decoration */}
            <div className="absolute top-8 left-8 text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors duration-500">
              <Quote size={60} />
            </div>

            {/* Rating stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonialData.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-xl md:text-2xl text-center text-gray-100 mb-8 leading-relaxed relative z-10">
              "{currentTestimonialData.text}"
            </blockquote>

            {/* Client info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={currentTestimonialData.image}
                alt={currentTestimonialData.name}
                className="w-16 h-16 rounded-full border-2 border-cyan-400 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                  {currentTestimonialData.name}
                </h4>
                <p className="text-gray-400">
                  {currentTestimonialData.position} at {currentTestimonialData.company}
                </p>
                <p className="text-cyan-400 text-sm mt-1">
                  {currentTestimonialData.project}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-cyan-400 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-cyan-400 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{ boxShadow: `inset 0 0 30px rgba(0, 255, 209, 0.1)` }}></div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-cyan-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up animate-delay-2' : 'opacity-0'}`}>
          <h3 className="text-center text-gray-400 mb-8">Trusted by innovative companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 transition-all duration-300 group-hover:scale-105">
                  <div className="font-bold text-cyan-400 text-sm group-hover:text-cyan-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;