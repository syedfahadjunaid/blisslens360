// import React from "react";
import { MdArrowOutward } from "react-icons/md";
import heroBackgroundImage from "../../../assets/heroBackground.png";
import designImage5k from "../../../assets/5kDesignImage.png";
import heroCarouselFrame from "../../../assets/heroCarouselFrame.png";
import image1 from "../../../assets/Website Pic/DSC00074.jpg";
import image2 from "../../../assets/Website Pic/DSC04005.jpg";
import image3 from "../../../assets/Website Pic/DSC06206.jpg";
import image4 from "../../../assets/Website Pic/OM_01162.jpg";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FiArrowDownRight } from "react-icons/fi";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import ModalContactForm from "../../ModalContactForm/ModalContactForm";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: 0,
    // borderRadius: "20px",
    // p: 4,
  };
  return (
    <>
      <div
        className="w-full flex flex-col items-center"
        style={{
          background: `url('${heroBackgroundImage}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPositionY: "8rem",
        }}
      >
        <div className="flex justify-end w-full mt-[5rem] pr-[2rem] max-md:hidden">
          <div className="flex flex-col headingFont text-start">
            <p className="text-[#FFBB00] pl-[10px]">5k+</p>
            <p className="text-[#6D6D6D] pl-[10px]">weddings</p>
            <img src={designImage5k} alt="designImage" className="w-[100px]" />
          </div>
        </div>
        <div className="w-[90%] flex flex-row items-start max-md:flex-col max-md:gap-[2rem] max-md:mt-[7rem]">
          <div className="w-[50%] flex flex-col gap-[1rem] max-md:w-full">
            <h1 className="headingFont text-[70px] text-start leading-[5rem] max-md:text-[50px] max-md:leading-[3rem]">
              Redefining Moments to Treasure Lifetime!
            </h1>
            <p className="text-start text-[#4F4F4F]">
              Welcome to Blisslens360! Based in Lucknow, India, we are a
              boutique candid wedding photography studio renowned for our fun,
              unconventional, and modern approach to capturing the stories of
              your most special day.
            </p>
            <button
              onClick={handleOpen}
              className="flex justify-center w-fit text-white border bg-[#FFBB01] p-[1rem] rounded-[30px] flex items-center gap-[10px]"
            >
              <p>Book Now</p>
              <MdArrowOutward />
            </button>
          </div>
          <div className="w-[50%] h-fit bg-gray flex justify-center items-center relative max-md:w-full">
            <img
              src={heroCarouselFrame}
              className="w-[450px] h-[450px]"
              alt="heroCarouselFrameImage"
            />
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={90}
              totalSlides={4}
              className="w-[65%] absolute max-md:w-[90%] rounded-[10px]"
              isPlaying={true}
              interval={3000}
              infinite={true}
            >
              <Slider>
                <Slide index={0}>
                  <img src={image1} alt="image1" className="rounded-[10px]" />
                </Slide>
                <Slide index={1}>
                  <img src={image2} alt="image2" className="rounded-[10px]" />
                </Slide>
                <Slide index={2}>
                  <img src={image3} alt="image3" className="rounded-[10px]" />
                </Slide>
                <Slide index={2}>
                  <img src={image4} alt="image4" className="rounded-[10px]" />
                </Slide>
              </Slider>
              <div className="w-full flex justify-center pt-[4px]">
                <div className="border border-solid border-[#FFBB01] w-fit flex items-center justify-center rounded-full h-[50px] w-[50px]">
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
        <div className="w-full flex px-[2rem] items-center max-md:flex-col max-md:gap-[1rem]">
          <div className="flex justify-center w-[50%]">
            <div className="flex flex-col headingFont text-start">
              <p className="text-[#FFBB00] pl-[10px]">3k+</p>
              <p className="text-[#6D6D6D] pl-[10px]">Events</p>
              <img
                src={designImage5k}
                alt="designImage"
                className="w-[150px]"
              />
            </div>
          </div>
          <div className="flex justify-end w-[50%] max-md:justify-center">
            <div className="border border-black border-[2px] rounded-full w-[100px] h-[100px] flex flex-col items-center justify-center">
              <p className="text-[14px]">SEE OUR WORK</p>
              <FiArrowDownRight />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalContactForm />
        </Box>
      </Modal>
    </>
  );
};

export default HeroSection;
