// import React from "react";
import servicedSectionBG from "../../../assets/servicedSectionBG.png";

import Image1 from "../../../assets/Website Pic/Pre Wedding.jpg";
// import Image2 from "../../../assets/serviceSection/2.png";
import Image3 from "../../../assets/Website Pic/Wedding.jpg";

import img from "../../../assets/img.jpg";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import frameImage from "../../../assets/serviceSection/frame.png";

import ModalServices from "../../ModalServices/ModalServices";

const ServicesSection = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: 0,
    // borderRadius: "20px",
    // p: 4,
  };

  const [data, setData] = React.useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = (newData) => {
    setOpen(true);
    setData(newData);
  };
  const handleClose = () => setOpen(false);

  const cardsData = [
    {
      modalImages: {
        img1: img,
        img2: img,
        img3: img,
        img4: img,
        img5: img,
        img6: img,
        img7: img,
        img8: img,
        img9: img,
      },
    },
    {
      modalImages: {
        img1: img,
        img2: img,
        img3: img,
        img4: img,
        img5: img,
        img6: img,
        img7: img,
        img8: img,
        img9: img,
      },
    },
    {
      modalImages: {
        img1: img,
        img2: img,
        img3: img,
        img4: img,
        img5: img,
        img6: img,
        img7: img,
        img8: img,
        img9: img,
      },
    },
  ];
  return (
    <>
      <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] py-[4rem] relative max-md:py-[2rem]">
        <img
          src={servicedSectionBG}
          alt="section2BgImage"
          className="w-full h-full max-md:hidden"
        />
        <div className="w-[90%] h-full flex flex-col items-center justify-center gap-[2rem] absolute max-md:relative">
          <div className="flex gap-[1rem] w-full">
            <div className="sectionHeading flex flex-col items-start max-md:p-0 max-md:text-start">
              <h1 className="text-[70px] text-[#3D3D3D] max-md:text-[40px]">
                Services We’re Offering
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] w-full p-[2rem] max-md:p-0">
            <div className="flex w-full gap-[1rem] max-md:flex-col">
              <a
                href="https://www.instagram.com/blisslens360?igsh=MW1hc21xeXczanV5OQ=="
                target="_blank"
                rel="noreferrer"
                className="w-full h-full cursor-pointer relative flex items-center justify-center max-md:w-full"
                // onClick={() => handleOpen(cardsData[0])}
              >
                <button className="bg-white bg-opacity-50 p-[1rem] rounded-full absolute">
                  Pre Wedding
                </button>
                <img
                  src={Image1}
                  alt="Image1"
                  className="w-full h-[350px] object-cover rounded-[10px]"
                />
                <div className="bg-white w-full h-[350px] absolute top-0 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out duration-[0.5s] flex flex-col items-center justify-center">
                  <div className="w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s]">
                    <img src={frameImage} alt="frameImage" className="" />
                  </div>
                </div>
              </a>
              {/* <a
                className="w-[35%] h-full cursor-pointer relative flex items-center justify-center max-md:w-full"
                onClick={() => handleOpen(cardsData[1])}
              >
                <button className="bg-white bg-opacity-50 p-[1rem] rounded-full absolute">
                  Fashion
                </button>
                <img src={Image2} alt="Image2" className="w-full h-[350px]" />
                <div className="bg-white w-full h-[350px] absolute top-0 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out duration-[0.5s] flex flex-col items-center justify-center">
                  <div className="w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s]">
                    <img src={frameImage} alt="frameImage" className="" />
                  </div>
                </div>
              </a> */}
            </div>
            <a
              href="https://www.instagram.com/blisslens360?igsh=MW1hc21xeXczanV5OQ=="
              target="_blank"
              rel="noreferrer"
              className="w-full h-full cursor-pointer relative flex items-center justify-center"
              // onClick={() => handleOpen(cardsData[2])}
            >
              <button className="bg-white bg-opacity-50 p-[1rem] rounded-full absolute">
                Wedding
              </button>
              <img
                src={Image3}
                alt="Image3"
                className="w-full h-[350px] object-cover rounded-[10px]"
              />
              <div className="bg-white w-full h-[350px] absolute top-0 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out duration-[0.5s] flex flex-col items-center justify-center">
                <div className="w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s]">
                  <img src={frameImage} alt="frameImage" className="" />
                </div>
              </div>
            </a>
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
          <ModalServices data={data} />
        </Box>
      </Modal>
    </>
  );
};

export default ServicesSection;
