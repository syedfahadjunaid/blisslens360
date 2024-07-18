import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import HeroSection from "./components/home/HeroSection/HeroSection";
import AboutUsSection from "./components/home/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/home/ServicesSection/ServicesSection";
import PortfolioSection from "./components/home/PortfolioSection/PortfolioSection";
import ClientsSection from "./components/home/ClientsSection/ClientsSection";
import ContactSection from "./components/home/ContactSection/ContactSection";

function App() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [link, setLink] = useState("Home");

  const heroRef = useRef();
  const portfolioRef = useRef();

  const heroRefScroll = () => heroRef.current.scrollIntoView();
  const portfolioRefScroll = () => portfolioRef.current.scrollIntoView();

  useEffect(() => {
    if (link === "Home") {
      heroRefScroll();
    } else if (link === "Portfolio") {
      portfolioRefScroll();
    }
  }, [link]);

  return (
    <div className="App flex flex-col gap-[0rem] items-center">
      <Navbar setLink={setLink} link={link} />
      <div className="w-full flex flex-col items-center gap-[2rem]">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <AboutUsSection />
        <div className="w-[70%] border-t-[3px]"></div>
        <ServicesSection />
        <div ref={portfolioRef} className="pt-[4rem] max-md:pt-[5rem]">
          <PortfolioSection />
        </div>
        <ClientsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
