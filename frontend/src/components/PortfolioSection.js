import React from "react";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "A full-featured mobile shopping app with payment integration, user authentication, and real-time order tracking.",
      type: "Mobile App",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      icon: <Smartphone size={20} />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Business Dashboard",
      description: "A comprehensive web application for business analytics with real-time data visualization and reporting features.",
      type: "Web App",
      technologies: ["React", "Python", "PostgreSQL", "Charts.js"],
      icon: <Globe size={20} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Food Delivery Platform",
      description: "Multi-platform solution including customer app, restaurant panel, and delivery driver app with GPS tracking.",
      type: "Platform",
      technologies: ["Flutter", "Firebase", "Google Maps", "Payment Gateway"],
      icon: <Smartphone size={20} />,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description: "A secure web platform for managing patient records, appointments, and medical history with HIPAA compliance.",
      type: "Web App",
      technologies: ["Next.js", "Node.js", "MySQL", "JWT Auth"],
      icon: <Globe size={20} />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A modern social networking mobile app with real-time messaging, photo sharing, and social features.",
      type: "Mobile App",
      technologies: ["React Native", "Socket.io", "AWS S3", "Redis"],
      icon: <Smartphone size={20} />,
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Corporate Website",
      description: "A modern, responsive corporate website with CMS integration, SEO optimization, and multilingual support.",
      type: "Website",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
      icon: <Globe size={20} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-large mb-6 text-white">Our Portfolio</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Explore some of our recent projects that showcase our expertise in mobile and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:transform hover:-translate-y-1 group"
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="p-2 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors">
                      <ExternalLink size={16} />
                    </button>
                    <button className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors">
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyan-400 text-sm font-medium flex items-center">
                    {project.icon}
                    <span className="ml-2">{project.type}</span>
                  </span>
                </div>
                
                <h3 className="heading-3 mb-3 text-white">{project.title}</h3>
                <p className="body-small mb-4 text-gray-400">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;