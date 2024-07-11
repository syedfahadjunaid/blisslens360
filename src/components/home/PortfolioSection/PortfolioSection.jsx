import React from "react";
import section3BGImage from "../../../assets/section3BGImage.png";
import LeafLImage from "../../../assets/leafL.png";
import LeafRImage from "../../../assets/leafR.png";
import HeadingImage from "../../../assets/headingImage2.png";

import Image1 from "../../../assets/portfolioSection/1.jpg";
import Image2 from "../../../assets/portfolioSection/2.jpg";
import Image3 from "../../../assets/portfolioSection/3.jpg";
import Image4 from "../../../assets/portfolioSection/4.jpg";

import { MdArrowOutward } from "react-icons/md";

const PortfolioSection = () => {
  return (
    <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] relative">
      <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] relative">
        <img src={section3BGImage} alt="section2BgImage" className="w-[100%]" />
        <div className="absolute flex gap-[2rem] h-[400px]">
          <div className="flex items-start w-[25%] h-full relative">
            <div className="h-[90%] w-full relative flex justify-center items-center">
              <img src={Image1} alt="Image2" className="h-full w-full" />
              <div className="flex flex-col items-center gap-[1rem] absolute w-full h-full flex justify-end pb-[1rem] opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s] bg-white bg-opacity-30">
                <div className="border-[1px] border-black border-solid rounded-full w-[40px] h-[40px] bg-white flex items-center justify-center">
                  <MdArrowOutward />
                </div>
                <button className="bg-white bg-opacity-50 p-[1rem] rounded-full">
                  Title_Work
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-end w-[25%] h-full relative">
            <div className="h-[90%] w-full relative flex justify-center items-center">
              <img src={Image2} alt="Image2" className="h-full w-full" />
              <div className="flex flex-col items-center gap-[1rem] absolute w-full h-full flex justify-end pb-[1rem] opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s] bg-white bg-opacity-30">
                <div className="border-[1px] border-black border-solid rounded-full w-[40px] h-[40px] bg-white flex items-center justify-center">
                  <MdArrowOutward />
                </div>
                <button className="bg-white bg-opacity-50 p-[1rem] rounded-full">
                  Title_Work
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-start w-[25%] h-full relative">
            <div className="h-[90%] w-full relative flex justify-center items-center">
              <img src={Image3} alt="Image3" className="h-full w-full" />
              <div className="flex flex-col items-center gap-[1rem] absolute w-full h-full flex justify-end pb-[1rem] opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s] bg-white bg-opacity-30">
                <div className="border-[1px] border-black border-solid rounded-full w-[40px] h-[40px] bg-white flex items-center justify-center">
                  <MdArrowOutward />
                </div>
                <button className="bg-white bg-opacity-50 p-[1rem] rounded-full">
                  Title_Work
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-end w-[25%] h-full relative">
            <div className="h-[90%] w-full relative flex justify-center items-center">
              <img src={Image4} alt="Image4" className="h-full w-full" />
              <div className="flex flex-col items-center gap-[1rem] absolute w-full h-full flex justify-end pb-[1rem] opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s] bg-white bg-opacity-30">
                <div className="border-[1px] border-black border-solid rounded-full w-[40px] h-[40px] bg-white flex items-center justify-center">
                  <MdArrowOutward />
                </div>
                <button className="bg-white bg-opacity-50 p-[1rem] rounded-full">
                  Title_Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center absolute top-0">
        <div className="flex items-center">
          <img src={LeafLImage} alt="leafLeftImage" />
          <h1 className="text-[70px] text-[#3D3D3D] headingFont">Portfolio</h1>
          <img src={LeafRImage} alt="leafRightImage" />
        </div>
        <img src={HeadingImage} alt="HeadingImage" />
      </div>
    </div>
  );
};

export default PortfolioSection;
