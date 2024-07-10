import React from "react";
import section2BgImage from "../../../assets/section2BgImage.png";
import section2Img from "../../../assets/section2Img.png";

const AboutUsSection = () => {
  return (
    <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] relative">
      <img
        src={section2BgImage}
        alt="section2BgImage"
        className="w-[90%] h-[90%]"
      />
      <div className="w-[80%] h-full flex items-center justify-center gap-[2rem] absolute">
        <div className="flex flex-col gap-[1rem] w-[50%]">
          <div className="sectionHeading flex flex-col items-start">
            <h1 className="text-[70px] text-[#3D3D3D]">About us</h1>
            <h4 className="text-[18px] text-[#4F4F4F]">
              Welcome to Blisslens – Where Moments Become Timeless
            </h4>
          </div>
          <p className="text-justify text-[16px] text-[#5D5D5D]">
            At Blisslens, we believe that every moment deserves to be captured
            with elegance and precision. We are a team of passionate
            photographers and videographers specializing in wedding photography,
            fashion photoshoots, and corporate events. With a keen eye for
            detail and a commitment to excellence, we transform your special
            moments into lasting memories.
          </p>
          <p className="text-justify text-[16px] text-[#5D5D5D]">
            Blisslens was born out of a love for storytelling through the lens.
            Founded by [Founder's Name], our journey began [X] years ago with a
            simple mission: to create stunning visual narratives that celebrate
            love, beauty, and life.
          </p>
        </div>
        <div className="flex w-[50%]">
          <img src={section2Img} className="w-[100%]" alt="section2Img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
