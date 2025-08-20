import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Smartphone, Globe, Eye } from "lucide-react";

const PortfolioSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "A full-featured mobile shopping app with payment integration, user authentication, and real-time order tracking.",
      type: "Mobile App",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      icon: <Smartphone size={20} />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Business Dashboard",
      description: "A comprehensive web application for business analytics with real-time data visualization and reporting features.",
      type: "Web App",
      technologies: ["React", "Python", "PostgreSQL", "Charts.js"],
      icon: <Globe size={20} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Food Delivery Platform",
      description: "Multi-platform solution including customer app, restaurant panel, and delivery driver app with GPS tracking.",
      type: "Platform",
      technologies: ["Flutter", "Firebase", "Google Maps", "Payment Gateway"],
      icon: <Smartphone size={20} />,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description: "A secure web platform for managing patient records, appointments, and medical history with HIPAA compliance.",
      type: "Web App",
      technologies: ["Next.js", "Node.js", "MySQL", "JWT Auth"],
      icon: <Globe size={20} />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A modern social networking mobile app with real-time messaging, photo sharing, and social features.",
      type: "Mobile App",
      technologies: ["React Native", "Socket.io", "AWS S3", "Redis"],
      icon: <Smartphone size={20} />,
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Corporate Website",
      description: "A modern, responsive corporate website with CMS integration, SEO optimization, and multilingual support.",
      type: "Website",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
      icon: <Globe size={20} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.portfolio-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-24 px-4 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-large mb-6 text-white animate-fade-in-up">Our Portfolio</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300 animate-fade-in-up animate-delay-1">
            Explore some of our recent projects that showcase our expertise in mobile and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`portfolio-card bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group cursor-pointer ${
                visibleCards.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="p-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-110 animate-bounce">
                      <ExternalLink size={18} />
                    </button>
                    <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110 animate-bounce" style={{ animationDelay: '0.1s' }}>
                      <Github size={18} />
                    </button>
                    <button className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-all duration-300 hover:scale-110 animate-bounce" style={{ animationDelay: '0.2s' }}>
                      <Eye size={18} />
                    </button>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyan-400 text-sm font-medium flex items-center group-hover:animate-pulse">
                    <span className="transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </span>
                    <span className="ml-2">{project.type}</span>
                  </span>
                  {hoveredCard === project.id && (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  )}
                </div>
                
                <h3 className="heading-3 mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="body-small mb-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 hover:scale-105"
                      style={{ transitionDelay: `${techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="btn-primary btn-shine group animate-pulse"
          >
            Start Your Project
            <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </div>
          </button>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-cyan-400 rounded-full opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-cyan-400 rounded-full opacity-10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
    </section>
  );
};

export default PortfolioSection;