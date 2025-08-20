import React from "react";
import { X, ExternalLink, Github, Calendar, Users, Code, Zap } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const projectDetails = {
    1: {
      fullDescription: "A comprehensive e-commerce mobile application built for a growing retail business. The app features a sleek user interface, secure payment processing through Stripe, real-time order tracking, push notifications, and advanced product search capabilities. The application supports both iOS and Android platforms and includes an admin panel for inventory management.",
      challenges: [
        "Implementing secure payment processing",
        "Real-time order tracking and notifications",
        "Cross-platform compatibility",
        "Scalable backend architecture"
      ],
      features: [
        "User authentication and profiles",
        "Product catalog with search and filters",
        "Shopping cart and wishlist",
        "Secure payment gateway integration",
        "Order tracking and history",
        "Push notifications",
        "Reviews and ratings system",
        "Admin dashboard"
      ],
      timeline: "4 months",
      teamSize: "5 developers",
      impact: "300% increase in mobile sales, 50% improvement in user engagement"
    },
    2: {
      fullDescription: "A powerful business analytics dashboard designed for data-driven decision making. The platform processes large datasets in real-time, providing interactive charts, customizable reports, and predictive analytics. Built with modern web technologies to ensure fast performance and scalability.",
      challenges: [
        "Processing large datasets efficiently",
        "Real-time data visualization",
        "Responsive design for all devices",
        "Integration with multiple data sources"
      ],
      features: [
        "Interactive data visualization",
        "Custom report generation",
        "Real-time analytics",
        "Multi-user collaboration",
        "Data export capabilities",
        "Role-based access control",
        "API integrations",
        "Mobile responsive design"
      ],
      timeline: "6 months",
      teamSize: "4 developers",
      impact: "40% reduction in report generation time, 25% improvement in data accuracy"
    },
    3: {
      fullDescription: "A comprehensive food delivery platform consisting of customer mobile app, restaurant management panel, and delivery driver application. Features real-time GPS tracking, automated order matching, payment processing, and analytics dashboard for business insights.",
      challenges: [
        "Real-time GPS tracking implementation",
        "Multi-platform synchronization",
        "Payment processing integration",
        "Scalable architecture for peak times"
      ],
      features: [
        "Customer mobile app",
        "Restaurant management dashboard",
        "Delivery driver app",
        "Real-time order tracking",
        "Payment gateway integration",
        "Rating and review system",
        "Analytics and reporting",
        "Push notifications"
      ],
      timeline: "8 months",
      teamSize: "7 developers",
      impact: "Became #1 food delivery app in the region with 100K+ active users"
    },
    4: {
      fullDescription: "A secure healthcare management system designed to streamline patient care and administrative processes. The platform ensures HIPAA compliance while providing intuitive interfaces for both healthcare providers and patients. Features include appointment scheduling, medical records management, and telemedicine capabilities.",
      challenges: [
        "HIPAA compliance and security",
        "Integration with existing systems",
        "User-friendly interface design",
        "Scalable cloud infrastructure"
      ],
      features: [
        "Patient records management",
        "Appointment scheduling",
        "Telemedicine integration",
        "Prescription management",
        "Insurance processing",
        "Reporting and analytics",
        "Mobile accessibility",
        "HIPAA compliant security"
      ],
      timeline: "10 months",
      teamSize: "6 developers",
      impact: "60% reduction in administrative tasks, 90% patient satisfaction rate"
    },
    5: {
      fullDescription: "A modern social networking mobile application that connects users through shared interests and real-time interactions. The app features advanced messaging capabilities, photo and video sharing, social feeds, and community building tools. Built with scalability in mind to support millions of users.",
      challenges: [
        "Real-time messaging at scale",
        "Content moderation system",
        "Media processing and storage",
        "User engagement optimization"
      ],
      features: [
        "Real-time messaging",
        "Photo and video sharing",
        "Social feeds and stories",
        "Group conversations",
        "Content discovery",
        "Privacy controls",
        "Push notifications",
        "In-app social features"
      ],
      timeline: "7 months",
      teamSize: "8 developers",
      impact: "1M+ downloads in first year, 80% monthly active user retention"
    },
    6: {
      fullDescription: "A sophisticated corporate website with content management system, multilingual support, and advanced SEO optimization. The site features a modern design, fast loading times, and seamless user experience across all devices. Includes an admin panel for easy content management.",
      challenges: [
        "Multilingual content management",
        "SEO optimization across languages",
        "Performance optimization",
        "Scalable content architecture"
      ],
      features: [
        "Custom CMS integration",
        "Multilingual support",
        "SEO optimization",
        "Responsive design",
        "Content scheduling",
        "Analytics integration",
        "Contact forms",
        "Social media integration"
      ],
      timeline: "3 months",
      teamSize: "3 developers",
      impact: "250% increase in organic traffic, 40% improvement in conversion rate"
    }
  };

  const details = projectDetails[project.id] || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-800 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        >
          <X size={20} />
        </button>

        {/* Project image */}
        <div className="aspect-video bg-gray-800 relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium mb-2">
              {project.icon}
              <span>{project.type}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          </div>
        </div>

        <div className="p-8">
          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
              <Calendar className="text-cyan-400 mx-auto mb-2" size={24} />
              <div className="text-white font-semibold">{details.timeline}</div>
              <div className="text-gray-400 text-sm">Duration</div>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
              <Users className="text-cyan-400 mx-auto mb-2" size={24} />
              <div className="text-white font-semibold">{details.teamSize}</div>
              <div className="text-gray-400 text-sm">Team Size</div>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
              <Zap className="text-cyan-400 mx-auto mb-2" size={24} />
              <div className="text-white font-semibold">Success</div>
              <div className="text-gray-400 text-sm">Impact</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">{details.fullDescription}</p>
          </div>

          {/* Impact */}
          {details.impact && (
            <div className="mb-8 bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Project Impact</h3>
              <p className="text-gray-300">{details.impact}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {details.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Challenges</h3>
              <ul className="space-y-2">
                {details.challenges?.map((challenge, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Code className="text-cyan-400 mr-3 flex-shrink-0" size={16} />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-800">
            <button className="btn-primary group flex-1">
              <ExternalLink size={20} />
              View Live Project
            </button>
            <button className="btn-secondary group flex-1">
              <Github size={20} />
              View Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;