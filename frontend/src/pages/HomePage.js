import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="dark-container">
      <Header />
      <section id="hero"><HeroSection /></section>
      <section id="technologies"><TechnologiesSection /></section>
      <section id="services"><ServicesSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="portfolio"><PortfolioSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="contact"><ContactSection /></section>
      <Footer />
    </div>
  );
};

export default HomePage;