import React from "react";
import { Users, Target, Award, Lightbulb, Layers, Rocket, Brain, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that drive real business results and exceed expectations."
    },
    {
      icon: <Users size={24} />,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with you throughout every step of the development process."
    },
    {
      icon: <Award size={24} />,
      title: "Quality First",
      description: "We maintain the highest standards in code quality, design, and user experience."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for your business."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Floating animated icons */}
      <div className="absolute top-16 left-16 animate-float opacity-10" style={{ animationDelay: '0s' }}>
        <Layers size={32} className="text-cyan-400" />
      </div>
      <div className="absolute top-32 right-20 animate-float opacity-15" style={{ animationDelay: '2s' }}>
        <Rocket size={28} className="text-cyan-400" />
      </div>
      <div className="absolute bottom-24 left-20 animate-float opacity-12" style={{ animationDelay: '4s' }}>
        <Brain size={26} className="text-cyan-400" />
      </div>
      <div className="absolute bottom-40 right-16 animate-float opacity-18" style={{ animationDelay: '6s' }}>
        <Heart size={22} className="text-cyan-400" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="display-large mb-6 text-white">About KCoders</h2>
            <p className="body-large mb-6 text-gray-300">
              We are a passionate team of developers and designers dedicated to creating exceptional digital experiences. 
              With years of expertise in mobile and web development, we transform complex ideas into simple, elegant solutions.
            </p>
            <p className="body-medium mb-8 text-gray-400">
              Our approach combines technical excellence with creative innovation, ensuring every project we deliver 
              not only meets your requirements but exceeds your expectations. From startups to established businesses, 
              we've helped organizations across various industries achieve their digital goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-400">Team Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-black border border-gray-800 p-6 rounded-lg">
                <div className="text-cyan-400 mb-4">{value.icon}</div>
                <h3 className="heading-3 mb-3 text-white">{value.title}</h3>
                <p className="body-small text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
{/* 
        <div className="mt-16 text-center">
          <h3 className="heading-1 mb-8 text-white">Our Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-cyan-400 font-bold">React</span>
              </div>
              <p className="text-gray-400">Frontend</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-cyan-400 font-bold">Node</span>
              </div>
              <p className="text-gray-400">Backend</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-cyan-400 font-bold">Flutter</span>
              </div>
              <p className="text-gray-400">Mobile</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-cyan-400 font-bold">AWS</span>
              </div>
              <p className="text-gray-400">Cloud</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;