import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollToSection } from "../hooks/useScrollToSection";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //     setIsMenuOpen(false);
  //   }
  // };

  return (
    <header className="dark-header fixed top-0 left-0 w-full z-50">
      <div className="flex items-center">
    
      <div 
  onClick={() => scrollToSection("hero")} 
  className="flex items-center space-x-2 cursor-pointer"
>
  <img 
    alt="Icon" 
    src="/assets/icon.png" 
    style={{ maxWidth: "11%", height: "auto", borderRadius: "50%" }} 
  />
  <h1 className="text-2xl font-bold text-white">KCoders</h1>
</div>
      </div>

      {/* Desktop Navigation */}
      <nav className="dark-nav hidden md:flex">
        <button
          onClick={() => scrollToSection("hero")}
          className="dark-nav-link"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("technologies")}
          className="dark-nav-link"
        >
          Technologies
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className="dark-nav-link"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="dark-nav-link"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="dark-nav-link"
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollToSection("testimonials")}
          className="dark-nav-link"
        >
          Testimonials
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="dark-nav-link"
        >
          Contact
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="dark-nav-link text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="dark-nav-link text-left"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="dark-nav-link text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="dark-nav-link text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="dark-nav-link text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="dark-nav-link text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="dark-nav-link text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;