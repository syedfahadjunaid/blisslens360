import React from "react";
import section2BgImage from "../../../assets/section2BgImage.png";
import section2Img from "../../../assets/section2Img.png";

const AboutUsSection = () => {
  return (
    <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] relative">
      <img
        src={section2BgImage}
        alt="section2BgImage"
        className="w-[90%] h-[90%] max-md:hidden"
      />
      <div className="w-[80%] h-full flex items-center justify-center gap-[2rem] absolute max-md:flex-col max-md:relative max-md:w-[90%]">
        <div className="flex flex-col gap-[1rem] w-[50%] max-md:w-full">
          <div className="sectionHeading flex flex-col items-start">
            <h1 className="text-[70px] text-[#3D3D3D]">About us</h1>
            <h4 className="text-[18px] text-[#4F4F4F] max-md:text-start">
              Welcome to Blisslens – Where Moments Become Timeless
            </h4>
          </div>
          <p className="text-justify text-[16px] text-[#5D5D5D]">
            We at Blisslens360, encapsulate the beauty, emotion, and enchantment
            of your special day. As expert wedding photographers, we understand
            that your wedding is not merely a day but a celebration of your
            unique love story. Let us guide you through a visual journey of your
            most significant moments, creating an enduring legacy of your love.
          </p>
          <p className="text-justify text-[16px] text-[#5D5D5D]">
            At Blisslens360, we provide extensive coverage for weddings,
            pre-weddings, birthdays, engagements, and family gatherings. Our
            expertise includes not only outdoor shoots but also exceptional
            in-house services such as photo restoration and album design.
          </p>
          <p className="text-justify text-[16px] text-[#5D5D5D]">
            We go beyond taking pictures—we create stories filled with joy and
            emotion, ensuring each memory endures a lifetime. With unwavering
            dedication and enthusiasm, we treat every client like family,
            pouring passion into every shot.
          </p>
        </div>
        <div className="flex w-[50%] max-md:w-full">
          <img src={section2Img} className="w-[100%]" alt="section2Img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
