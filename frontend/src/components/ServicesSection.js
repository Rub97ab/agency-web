import React from "react";
import { Smartphone, Globe, Code, Palette, Database, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
      features: ["Native iOS & Android", "React Native", "Flutter", "UI/UX Design"]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      features: ["React & Next.js", "Node.js & Python", "Responsive Design", "SEO Optimization"]
    },
    {
      icon: <Code size={32} />,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your business needs and requirements.",
      features: ["API Development", "Database Design", "Cloud Integration", "Scalable Architecture"]
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging experiences for your customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs and efficient database management.",
      features: ["RESTful APIs", "Database Optimization", "Security Implementation", "Performance Tuning"]
    },
    {
      icon: <Zap size={32} />,
      title: "Consulting & Support",
      description: "Technical consulting and ongoing support to ensure your digital solutions continue to perform.",
      features: ["Technical Audits", "Performance Optimization", "Maintenance", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-large mb-6 text-white">Our Services</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            We offer comprehensive mobile and web development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="text-cyan-400 mb-6">{service.icon}</div>
              <h3 className="heading-2 mb-4 text-white">{service.title}</h3>
              <p className="body-medium mb-6 text-gray-300">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;