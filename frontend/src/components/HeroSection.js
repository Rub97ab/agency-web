import React, { useEffect, useState } from "react";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, years: 0, satisfaction: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounter = (target, duration, key, maxValue) => {
      let start = 0;
      const increment = maxValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= maxValue) {
          start = maxValue;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 16);
    };

    setTimeout(() => {
      animateCounter(50, 2000, 'projects', 50);
      animateCounter(3, 1500, 'years', 3);
      animateCounter(100, 2500, 'satisfaction', 100);
    }, 1000);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`flex justify-center space-x-8 mb-8 hero-icons ${isVisible ? 'animate-fade-in animate-delay-1' : 'opacity-0'}`}>
          <Code size={32} className="text-cyan-400 animate-float" style={{ animationDelay: '0s' }} />
          <Smartphone size={32} className="text-cyan-400 animate-float" style={{ animationDelay: '1s' }} />
          <Globe size={32} className="text-cyan-400 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <h1 className={`display-huge mb-6 text-white text-glow ${isVisible ? 'animate-fade-in-up animate-delay-2' : 'opacity-0'}`}>
          Crafting Digital Excellence
        </h1>
        
        <p className={`body-large mb-12 max-w-3xl mx-auto text-gray-300 ${isVisible ? 'animate-fade-in-up animate-delay-3' : 'opacity-0'}`}>
          We transform ideas into powerful mobile apps and stunning websites. 
          From concept to deployment, we deliver cutting-edge solutions that drive your business forward.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'animate-fade-in-up animate-delay-4' : 'opacity-0'}`}>
          <button onClick={scrollToContact} className="btn-primary btn-shine group animate-pulse">
            Start Your Project
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button 
            onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary btn-shine group"
          >
            View Our Work
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up animate-delay-5' : 'opacity-0'}`}>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-cyan-400 mb-2 stats-counter transition-all duration-300 group-hover:scale-110 group-hover:text-glow">
              {counters.projects}+
            </div>
            <div className="text-gray-400 transition-colors group-hover:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-cyan-400 mb-2 stats-counter transition-all duration-300 group-hover:scale-110 group-hover:text-glow">
              {counters.years}+
            </div>
            <div className="text-gray-400 transition-colors group-hover:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-cyan-400 mb-2 stats-counter transition-all duration-300 group-hover:scale-110 group-hover:text-glow">
              {counters.satisfaction}%
            </div>
            <div className="text-gray-400 transition-colors group-hover:text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
    </section>
  );
};

export default HeroSection;