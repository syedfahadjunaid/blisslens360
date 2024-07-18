import React from "react";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import AboutUsSection from "../../components/home/AboutUsSection/AboutUsSection";
import ServicesSection from "../../components/home/ServicesSection/ServicesSection";
import PortfolioSection from "../../components/home/PortfolioSection/PortfolioSection";
import ClientsSection from "../../components/home/ClientsSection/ClientsSection";
import ContactSection from "../../components/home/ContactSection/ContactSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[2rem]">
      <HeroSection />
      <AboutUsSection />
      <div className="w-[70%] border-t-[3px]"></div>
      <ServicesSection />
      <PortfolioSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
