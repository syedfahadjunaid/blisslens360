import React from "react";
import heroBackgroundImage from "../../../assets/heroBackground.png";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen flex items-center"
      style={{
        background: `url('${heroBackgroundImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    ></div>
  );
};

export default HeroSection;
