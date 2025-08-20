import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TechnologiesSection from "../components/TechnologiesSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="dark-container">
      <Header />
      <HeroSection />
      <TechnologiesSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;