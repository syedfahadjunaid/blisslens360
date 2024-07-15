import React from "react";
import bgImage from "../../assets/bgFooter.png";
import LeafLImage from "../../assets/leafL.png";
import LeafRImage from "../../assets/leafR.png";
import Logo from "../../assets/footerLogo.png";
import bgFooterMobile from "../../assets/bgFooterMobile.png";

const Footer = () => {
  return (
    <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] relative bg-gradient-to-b from-[#000000] to-[#484848] mt-[4rem] p-[2rem]">
      <img src={bgImage} alt="bgImage" className="max-md:hidden" />
      <img
        src={bgFooterMobile}
        alt="bgFooterMobile"
        className="hidden max-md:block w-full h-full"
      />
      <div className="flex flex-col h-full items-center justify-between absolute  max-md:gap-[2rem]">
        <div className="flex items-center pt-[2rem] max-md:pt-[4rem]">
          <img
            src={LeafLImage}
            alt="leafLeftImage"
            className="max-md:w-[60px]"
          />
          <img src={Logo} alt="LogoImage" className="max-md:w-[150px]" />
          <img
            src={LeafRImage}
            alt="leafRightImage"
            className="max-md:w-[60px]"
          />
        </div>
        <div className="text-[#FFFFFF] flex flex-col gap-[2rem] items-center">
          <p>Blisslens Photography & Videography</p>
          <div className="">
            <p className="">Address: 1234 Wedding Lane, Love City, LC 56789</p>
            <p className="max-md:hidden">
              Phone: <span className="text-[#FFBB01]">(123) 456-7890</span> |
              Email: <span className="text-[#FFBB01]">info@blisslens.com</span>
            </p>
            <p className="hidden max-md:block">
              Phone: <span className="text-[#FFBB01]">(123) 456-7890</span>
            </p>
            <p className="hidden max-md:block">
              Email: <span className="text-[#FFBB01]">info@blisslens.com</span>
            </p>
          </div>
        </div>
        <p className="pb-[2rem] text-white max-md:pb-[4rem] max-md:text-[14px]">
          © 2024 Blisslens. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
