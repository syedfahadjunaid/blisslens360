import React from "react";
import bgImage from "../../../assets/homeContactBGImage.jpg";
import image1 from "../../../assets/homeContactSectionImage.png";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const ContactSection = () => {
  return (
    <div className="w-[90%] h-full flex flex-col items-center justify-center gap-[2rem] mt-[3rem] relative">
      <img src={bgImage} alt="contactBGImage" className="h-full w-full" />
      <div className="absolute flex justify-start items-center w-full h-full">
        <div className="w-[70%] flex flex-col items-start p-[2rem] gap-[2rem]">
          <div>
            <h1 className="text-[45px] text-[#FFFFFF]">
              Looking For Custom Wedding ?
            </h1>
            <p className="text-[#BDBDBD]">
              Crafting Unforgettable Wedding Experiences That Truly Embody Your
              Unique Love Story
            </p>
          </div>
          <div className="flex items-center justify-start gap-[1rem]">
            <button className="flex justify-center w-fit text-white bg-[#FFBB01] p-[1rem] rounded-[30px] flex items-center gap-[10px]">
              <p>Call Us Now</p>
              <CiPhone />
            </button>
            <button className="flex justify-center w-fit text-white border border-[#FFBB01] p-[1rem] rounded-[30px] flex items-center gap-[10px]">
              <p>Mail Us</p>
              <CiMail />
            </button>
          </div>
        </div>
        <div className="w-[30%] relative h-full">
          <img src={image1} alt="image1" className="w-full absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
