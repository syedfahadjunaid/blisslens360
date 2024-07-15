import React from "react";
// import ContactSection from "../home/ContactSection/ContactSection";

import bgImage from "../../assets/homeContactBGImage.jpg";
import homeContactBGImageMobile from "../../assets/homeContactBGImageMobile.jpg";
import image1 from "../../assets/homeContactSectionImage.png";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const ModalPortfolio = ({ data }) => {
  return (
    <div className="bg-white rounded-[10px] p-[2rem] h-full">
      <div className="flex flex-col h-full overflow-y-scroll p-[10px]">
        <div className="w-full flex items-center justify-center">
          <img
            className="flex w-[60%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img1}
            alt={data?.cardBtnText + "image1"}
          />
          <img
            className="flex w-[40%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img2}
            alt={data?.cardBtnText + "image2"}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            className="flex w-[40%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img3}
            alt={data?.cardBtnText + "image3"}
          />
          <img
            className="flex w-[35%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img4}
            alt={data?.cardBtnText + "image4"}
          />
          <img
            className="flex w-[25%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img5}
            alt={data?.cardBtnText + "image5"}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            className="flex w-[100%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img6}
            alt={data?.cardBtnText + "image6"}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            className="flex w-[40%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img7}
            alt={data?.cardBtnText + "image7"}
          />
          <img
            className="flex w-[60%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img8}
            alt={data?.cardBtnText + "image8"}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            className="flex w-[100%] h-[300px] border-[10px] rounded-[10px] border-solid border-white"
            src={data?.modalImages?.img9}
            alt={data?.cardBtnText + "image9"}
          />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-[2rem] mt-[3rem] relative max-md:mt-0">
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
                  Crafting Unforgettable Wedding Experiences That Truly Embody
                  Your Unique Love Story
                </p>
              </div>
              <div className="flex items-center justify-start gap-[1rem] max-md:justify-center w-full">
                <button className="flex justify-center w-fit text-white bg-[#FFBB01] p-[1rem] rounded-[30px] flex items-center gap-[10px] max-md:p-[12px] max-md:text-[14px]">
                  <p>Call Us Now</p>
                  <CiPhone />
                </button>
                <button className="flex justify-center w-fit text-white border border-[#FFBB01] p-[1rem] rounded-[30px] flex items-center gap-[10px] max-md:p-[12px] max-md:text-[14px]">
                  <p>Mail Us</p>
                  <CiMail />
                </button>
              </div>
            </div>
            <div className="w-[30%] relative h-full max-md:hidden">
              <img
                src={image1}
                alt="image1"
                className="w-full absolute bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPortfolio;
