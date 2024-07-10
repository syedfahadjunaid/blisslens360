import React from "react";
import servicedSectionBG from "../../../assets/servicedSectionBG.png";

import Image1 from "../../../assets/serviceSection/1.png";
import Image2 from "../../../assets/serviceSection/2.png";
import Image3 from "../../../assets/serviceSection/3.png";

import frameImage from "../../../assets/serviceSection/frame.png";

const ServicesSection = () => {
  return (
    <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] py-[4rem] relative">
      <img
        src={servicedSectionBG}
        alt="section2BgImage"
        className="w-full h-full"
      />
      <div className="w-[90%] h-full flex flex-col items-center justify-center gap-[2rem] absolute">
        <div className="flex gap-[1rem] w-full">
          <div className="sectionHeading flex flex-col items-start">
            <h1 className="text-[70px] text-[#3D3D3D]">
              Services We’re Offering
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] w-full p-[2rem]">
          <div className="flex w-full gap-[1rem]">
            <div className="w-[65%] h-full cursor-pointer relative flex items-center justify-center">
              <button className="bg-white bg-opacity-50 p-[1rem] rounded-full absolute">
                Pre Wedding
              </button>
              <img src={Image1} alt="Image1" className="w-full h-[350px]" />
              <div className="bg-white w-full h-[350px] absolute top-0 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out duration-[0.5s] flex flex-col items-center justify-center">
                <div className="w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s]">
                  <img src={frameImage} alt="frameImage" className="" />
                </div>
              </div>
            </div>
            <div className="w-[35%] h-full cursor-pointer relative flex items-center justify-center">
              <button className="bg-white bg-opacity-50 p-[1rem] rounded-full absolute">
                Fashion
              </button>
              <img src={Image2} alt="Image2" className="w-full h-[350px]" />
              <div className="bg-white w-full h-[350px] absolute top-0 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out duration-[0.5s] flex flex-col items-center justify-center">
                <div className="w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s]">
                  <img src={frameImage} alt="frameImage" className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full cursor-pointer relative flex items-center justify-center">
            <button className="bg-white bg-opacity-50 p-[1rem] rounded-full absolute">
              Wedding
            </button>
            <img src={Image3} alt="Image3" className="w-full h-[350px]" />
            <div className="bg-white w-full h-[350px] absolute top-0 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out duration-[0.5s] flex flex-col items-center justify-center">
              <div className="w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s]">
                <img src={frameImage} alt="frameImage" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
