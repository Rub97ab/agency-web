import React, { useEffect, useRef, useState } from "react";
import { Smartphone, Globe, Code, Palette, Database, Zap } from "lucide-react";

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
      features: ["Native iOS & Android", "React Native", "Flutter", "UI/UX Design"],
      color: "cyan"
    },
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      features: ["React & Next.js", "Node.js & Python", "Responsive Design", "SEO Optimization"],
      color: "blue"
    },
    {
      icon: <Code size={32} />,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your business needs and requirements.",
      features: ["API Development", "Database Design", "Cloud Integration", "Scalable Architecture"],
      color: "green"
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging experiences for your customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "purple"
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs and efficient database management.",
      features: ["RESTful APIs", "Database Optimization", "Security Implementation", "Performance Tuning"],
      color: "orange"
    },
    {
      icon: <Zap size={32} />,
      title: "Consulting & Support",
      description: "Technical consulting and ongoing support to ensure your digital solutions continue to perform.",
      features: ["Technical Audits", "Performance Optimization", "Maintenance", "24/7 Support"],
      color: "pink"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-4 lg:px-8" ref={sectionRef}>
    
    <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="display-large mb-6 text-white animate-fade-in-up">Our Services</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300 animate-fade-in-up animate-delay-1">
            We offer comprehensive mobile and web development services to bring your digital vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card bg-gray-900 border border-gray-800 p-8 rounded-lg group cursor-pointer ${
                visibleCards.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-cyan-400 mb-6 group-hover:animate-bounce transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="heading-2 mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="body-medium mb-6 text-gray-300">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300"
                    style={{ transitionDelay: `${featureIndex * 0.05}s` }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 "></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Animated decorative elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 "></div>
          <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 " style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 " style={{ animationDelay: '2s' }}></div>
        </div>
        </div>
      
    </section>
  );
};

export default ServicesSection;