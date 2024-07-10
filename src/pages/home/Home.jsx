import React from "react";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import AboutUsSection from "../../components/home/AboutUsSection/AboutUsSection";
import ServicesSection from "../../components/home/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[2rem]">
      <HeroSection />
      <AboutUsSection />
      <div className="w-[70%] border-t-[3px]"></div>
      <ServicesSection />
    </div>
  );
};

export default Home;
