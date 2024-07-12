import React from "react";
import bgImage from "../../assets/bgFooter.png";
import LeafLImage from "../../assets/leafL.png";
import LeafRImage from "../../assets/leafR.png";
import Logo from "../../assets/footerLogo.png";

const Footer = () => {
  return (
    <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] relative bg-gradient-to-b from-[#000000] to-[#484848] mt-[4rem] p-[2rem]">
      <img src={bgImage} alt="bgImage" />
      <div className="flex flex-col h-full items-center justify-between absolute">
        <div className="flex items-center pt-[2rem]">
          <img src={LeafLImage} alt="leafLeftImage" />
          <img src={Logo} alt="LogoImage" />
          <img src={LeafRImage} alt="leafRightImage" />
        </div>
        <div className="text-[#FFFFFF] flex flex-col gap-[2rem] items-center">
          <p>Blisslens Photography & Videography</p>
          <div className="">
            <p className="">Address: 1234 Wedding Lane, Love City, LC 56789</p>
            <p className="">
              Phone: <span className="text-[#FFBB01]">(123) 456-7890</span> |
              Email:
              <span className="text-[#FFBB01]">info@blisslens.com</span>
            </p>
          </div>
        </div>
        <p className="pb-[2rem] text-white">
          © 2024 Blisslens. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
