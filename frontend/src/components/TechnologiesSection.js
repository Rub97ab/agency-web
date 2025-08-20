import React, { useEffect, useState } from "react";

const TechnologiesSection = () => {
  const [visibleTechs, setVisibleTechs] = useState([]);

  const technologies = [
    {
      name: "React",
      category: "Frontend",
      icon: "⚛️",
      color: "text-blue-400",
      description: "Modern UI library"
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: "▲",
      color: "text-white",
      description: "Full-stack framework"
    },
    {
      name: "Vue",
      category: "Frontend", 
      icon: "🖖",
      color: "text-green-400",
      description: "Progressive framework"
    },
    {
      name: "Python",
      category: "Backend",
      icon: "🐍",
      color: "text-yellow-400",
      description: "Versatile programming"
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "🟢",
      color: "text-green-500",
      description: "JavaScript runtime"
    },
    {
      name: "Flutter",
      category: "Mobile",
      icon: "🦋",
      color: "text-blue-300",
      description: "Cross-platform apps"
    },
    {
      name: "React Native",
      category: "Mobile",
      icon: "📱",
      color: "text-cyan-400",
      description: "Native mobile apps"
    },
    {
      name: "iOS",
      category: "Mobile",
      icon: "🍎",
      color: "text-gray-300",
      description: "Native iOS apps"
    },
    {
      name: "Android",
      category: "Mobile",
      icon: "🤖",
      color: "text-green-400",
      description: "Native Android apps"
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: "☁️",
      color: "text-orange-400",
      description: "Amazon Web Services"
    },
    {
      name: "GCP",
      category: "Cloud",
      icon: "🌩️",
      color: "text-blue-500",
      description: "Google Cloud Platform"
    },
    {
      name: "Azure",
      category: "Cloud",
      icon: "🔷",
      color: "text-blue-600",
      description: "Microsoft Azure"
    },
    {
      name: "AMP",
      category: "Performance",
      icon: "⚡",
      color: "text-yellow-300",
      description: "Accelerated pages"
    },
    {
      name: "PWA",
      category: "Performance",
      icon: "📲",
      color: "text-purple-400",
      description: "Progressive Web Apps"
    },
    {
      name: "GraphQL",
      category: "API",
      icon: "🔗",
      color: "text-pink-400",
      description: "Query language"
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: "🍃",
      color: "text-green-600",
      description: "NoSQL database"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            technologies.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTechs(prev => [...new Set([...prev, index])]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('technologies');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section id="technologies" className="py-24 px-4 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 255, 209, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(0, 255, 209, 0.05) 0%, transparent 50%)`
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="display-large mb-6 text-white animate-fade-in-up">
            Our Technology Arsenal
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300 animate-fade-in-up animate-delay-1">
            We leverage cutting-edge technologies to build scalable, performant, and future-ready applications
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <div
              key={category}
              className={`px-6 py-2 bg-black border border-cyan-400 rounded-full text-cyan-400 font-medium cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300 ${
                visibleTechs.length > 0 ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Technologies grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${
                visibleTechs.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-black border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-3 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-cyan-400/20">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Tech icon */}
                <div className="text-4xl mb-3 group-hover:animate-bounce relative z-10">
                  {tech.icon}
                </div>
                
                {/* Tech name */}
                <h3 className={`font-bold mb-2 group-hover:${tech.color} transition-colors duration-300 relative z-10`}>
                  {tech.name}
                </h3>
                
                {/* Category badge */}
                <div className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-400 mb-2 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 relative z-10">
                  {tech.category}
                </div>
                
                {/* Description */}
                <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                  {tech.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ boxShadow: `inset 0 0 20px rgba(0, 255, 209, 0.1)` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating tech particles */}
        <div className="absolute top-20 left-20 text-2xl animate-float opacity-20">⚛️</div>
        <div className="absolute top-40 right-32 text-xl animate-float opacity-15" style={{ animationDelay: '1s' }}>🐍</div>
        <div className="absolute bottom-32 left-32 text-3xl animate-float opacity-10" style={{ animationDelay: '2s' }}>☁️</div>
        <div className="absolute bottom-20 right-20 text-lg animate-float opacity-25" style={{ animationDelay: '3s' }}>📱</div>
        <div className="absolute top-1/2 left-10 text-xl animate-float opacity-15" style={{ animationDelay: '4s' }}>🦋</div>
        <div className="absolute top-1/3 right-10 text-2xl animate-float opacity-20" style={{ animationDelay: '5s' }}>⚡</div>

        {/* Animated connecting lines */}
        <div className="absolute top-1/2 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default TechnologiesSection;