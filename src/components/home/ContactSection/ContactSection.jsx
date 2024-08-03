import React from "react";
import bgImage from "../../../assets/homeContactBGImage.jpg";
import homeContactBGImageMobile from "../../../assets/homeContactBGImageMobile.jpg";
import image1 from "../../../assets/homeContactSectionImage.png";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const ContactSection = () => {
  return (
    <div className="w-[90%] h-full flex flex-col items-center justify-center gap-[2rem] mt-[3rem] relative max-md:mt-0">
      <img
        src={bgImage}
        alt="contactBGImage"
        className="h-full w-full max-md:hidden"
      />
      <img
        src={homeContactBGImageMobile}
        alt="contactBGImage"
        className="h-full w-full hidden max-md:block max-md:h-full"
      />
      <div className="absolute flex justify-start items-center w-full h-full">
        <div className="w-[70%] flex flex-col items-start p-[2rem] gap-[2rem] max-md:w-full">
          <div>
            <h1 className="text-[45px] text-[#FFFFFF] max-md:text-[25px]">
              Looking For Custom Wedding ?
            </h1>
            <p className="text-[#BDBDBD]">
              Crafting Unforgettable Wedding Experiences That Truly Embody Your
              Unique Love Story
            </p>
          </div>
          <div className="flex items-center justify-start gap-[1rem] max-md:justify-center w-full">
            <a
              href="tel:+917880904742"
              className="flex justify-center w-fit text-white bg-[#FFBB01] p-[1rem] rounded-[30px] flex items-center gap-[10px] max-md:p-[12px] max-md:text-[14px] cursor-pointer"
            >
              <p>Call Us Now</p>
              <CiPhone />
            </a>
            <a
              href="mailto:blisslens360@gmail.com"
              className="flex justify-center w-fit text-white border border-[#FFBB01] p-[1rem] rounded-[30px] flex items-center gap-[10px] max-md:p-[12px] max-md:text-[14px] cursor-pointer"
            >
              <p>Mail Us</p>
              <CiMail />
            </a>
          </div>
        </div>
        <div className="w-[30%] relative h-full max-md:hidden">
          <img src={image1} alt="image1" className="w-full absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
