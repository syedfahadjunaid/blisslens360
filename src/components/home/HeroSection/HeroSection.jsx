import React from "react";
import { MdArrowOutward } from "react-icons/md";
import heroBackgroundImage from "../../../assets/heroBackground.png";
import designImage5k from "../../../assets/5kDesignImage.png";
import heroCarouselFrame from "../../../assets/heroCarouselFrame.png";
import image1 from "../../../assets/carousel/image1.png";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FiArrowDownRight } from "react-icons/fi";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const HeroSection = () => {
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{
        background: `url('${heroBackgroundImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPositionY: "8rem",
      }}
    >
      <div className="flex justify-end w-full mt-[5rem] pr-[2rem]">
        <div className="flex flex-col headingFont text-start">
          <p className="text-[#FFBB00] pl-[10px]">5k+</p>
          <p className="text-[#6D6D6D] pl-[10px]">weddings</p>
          <img src={designImage5k} alt="designImage" className="w-[100px]" />
        </div>
      </div>
      <div className="w-[90%] flex flex-row items-start">
        <div className="w-[50%] flex flex-col gap-[1rem]">
          <h1 className="headingFont text-[80px] text-start leading-[5rem]">
            Crafting Everlasting Moments
          </h1>
          <p className="text-start text-[#4F4F4F]">
            The Joy of Connection: How Making Moments Matters strengthens
            Relationships
          </p>
          <button className="flex justify-center w-fit text-white border bg-[#FFBB01] p-[1rem] rounded-[30px] flex items-center gap-[10px]">
            <p>Book Now</p>
            <MdArrowOutward />
          </button>
        </div>
        <div className="w-[50%] h-fit bg-gray flex justify-center items-center relative">
          <img
            src={heroCarouselFrame}
            className="w-[450px] h-[450px]"
            alt="heroCarouselFrameImage"
          />
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={3}
            className="w-[70%] absolute"
            isPlaying={true}
            interval={3000}
            infinite={true}
          >
            <Slider>
              <Slide index={0}>
                <img src={image1} alt="image1" />
              </Slide>
              <Slide index={1}>
                <img src={image1} alt="image2" />
              </Slide>
              <Slide index={2}>
                <img src={image1} alt="image3" />
              </Slide>
            </Slider>
            <div className="w-full flex justify-center">
              <div className="border border-solid border-[#FFBB01] w-fit flex items-center justify-center rounded-full h-[40px] w-[40px]">
                <ButtonBack>
                  <IoIosArrowBack />
                </ButtonBack>
                <ButtonNext>
                  <IoIosArrowForward />
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <div className="w-full flex px-[2rem]">
        <div className="flex justify-center w-[50%]">
          <div className="flex flex-col headingFont text-start">
            <p className="text-[#FFBB00] pl-[10px]">3k+</p>
            <p className="text-[#6D6D6D] pl-[10px]">Events</p>
            <img src={designImage5k} alt="designImage" className="w-[150px]" />
          </div>
        </div>
        <div className="flex justify-end w-[50%]">
          <div className="border border-black border-[2px] rounded-full w-[100px] h-[100px] flex flex-col items-center justify-center">
            <p className="text-[14px]">SEE OUR WORK</p>
            <FiArrowDownRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
