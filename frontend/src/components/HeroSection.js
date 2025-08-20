import React from "react";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-8 opacity-60">
          <Code size={32} className="text-cyan-400" />
          <Smartphone size={32} className="text-cyan-400" />
          <Globe size={32} className="text-cyan-400" />
        </div>
        
        <h1 className="display-huge mb-6 text-white">
          Crafting Digital Excellence
        </h1>
        
        <p className="body-large mb-12 max-w-3xl mx-auto text-gray-300">
          We transform ideas into powerful mobile apps and stunning websites. 
          From concept to deployment, we deliver cutting-edge solutions that drive your business forward.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button onClick={scrollToContact} className="btn-primary group">
            Start Your Project
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button 
            onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary"
          >
            View Our Work
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;