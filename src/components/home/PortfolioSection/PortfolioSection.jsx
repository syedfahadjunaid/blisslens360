// import React from "react";
import section3BGImage from "../../../assets/section3BGImage.png";
import LeafLImage from "../../../assets/leafL.png";
import LeafRImage from "../../../assets/leafR.png";
import HeadingImage from "../../../assets/headingImage2.png";

import Image1 from "../../../assets/Website Pic/Aparna X Saurabh.jpg";
import Image2 from "../../../assets/Website Pic/Eshan X Megha.jpg";
import Image3 from "../../../assets/Website Pic/Ritika X Ashutosh.jpg";
import Image4 from "../../../assets/Website Pic/Shivam X Shipra.jpg";

import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";

// import ModalPortfolio from "../../ModalPortfolio/ModalPortfolio";

import { MdArrowOutward } from "react-icons/md";
import img from "../../../assets/img.jpg";

const PortfolioSection = () => {
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "80%",
  //   height: "80%",
  //   bgcolor: "transparent",
  //   border: "none",
  //   outline: "none",
  //   boxShadow: 0,
  //   // borderRadius: "20px",
  //   // p: 4,
  // };

  // const [data, setData] = React.useState();

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = (newData) => {
  //   setOpen(true);
  //   setData(newData);
  // };
  // const handleClose = () => setOpen(false);

  const cardsData = [
    {
      cardImage: Image1,
      cardBtnText: "Aparna X Saurabh",
      cardBtnLink: "",
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
      cardImage: Image2,
      cardBtnText: "Eshan X Megha",
      cardBtnLink: "",
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
      cardImage: Image3,
      cardBtnText: "Ritika & Ashutosh",
      cardBtnLink: "",
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
      cardImage: Image4,
      cardBtnText: "Shivam X Shipra",
      cardBtnLink: "",
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

  const renderedPortfolioCards = cardsData?.map((data, index) => {
    return (
      <React.Fragment key={index + data?.cardBtnText}>
        {index % 2 === 0 ? (
          <div className="flex items-start w-[25%] h-full relative max-md:min-w-[80%]">
            <div className="h-[90%] w-full relative flex justify-center items-center max-md:h-full">
              <img
                src={data?.cardImage}
                alt={`${data.cardBtnText}-${index}-image`}
                className="h-full w-full rounded-[10px] object-cover"
              />
              <div className="flex flex-col items-center gap-[1rem] absolute w-full h-full flex justify-end pb-[1rem] opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s] bg-white bg-opacity-30 max-md:opacity-100 max-md:bg-opacity-0">
                <div className="border-[1px] border-black border-solid rounded-full w-[40px] h-[40px] bg-white flex items-center justify-center">
                  <MdArrowOutward />
                </div>
                <a
                  href="https://www.instagram.com/blisslens360?igsh=MW1hc21xeXczanV5OQ=="
                  target="_blank"
                  rel="noreferrer"
                  // onClick={() => handleOpen(data)}
                  className="bg-white bg-opacity-50 p-[1rem] rounded-full"
                >
                  {data.cardBtnText}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-end w-[25%] h-full relative max-md:w-full max-md:min-w-[80%]">
            <div className="h-[90%] w-full relative flex justify-center items-center max-md:h-full">
              <img
                src={data?.cardImage}
                alt={`${data.cardBtnText}-${index}-image`}
                className="h-full w-full rounded-[10px] object-cover"
              />
              <div className="flex flex-col items-center gap-[1rem] absolute w-full h-full flex justify-end pb-[1rem] opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s] bg-white bg-opacity-30 max-md:opacity-100 max-md:bg-opacity-0">
                <div className="border-[1px] border-black border-solid rounded-full w-[40px] h-[40px] bg-white flex items-center justify-center">
                  <MdArrowOutward />
                </div>
                <a
                  href="https://www.instagram.com/blisslens360?igsh=MW1hc21xeXczanV5OQ=="
                  target="_blank"
                  rel="noreferrer"
                  // onClick={() => handleOpen(data)}
                  className="bg-white bg-opacity-50 p-[1rem] rounded-full"
                >
                  {data.cardBtnText}
                </a>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  });
  return (
    <>
      <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] relative">
        <div className="w-[100%] h-full flex flex-col items-center justify-center gap-[2rem] relative max-md:w-[90%]">
          <img
            src={section3BGImage}
            alt="section2BgImage"
            className="w-[100%] max-md:hidden"
          />
          <div className="max-md:flex-col items-center absolute top-0 hidden max-md:flex max-md:relative">
            <div className="flex items-center">
              <img src={LeafLImage} alt="leafLeftImage" />
              <h1 className="text-[70px] text-[#3D3D3D] headingFont max-md:text-[40px]">
                Portfolio
              </h1>
              <img src={LeafRImage} alt="leafRightImage" />
            </div>
            <img src={HeadingImage} alt="HeadingImage" />
          </div>
          <div className="absolute flex gap-[2rem] h-[400px] max-md:relative max-md:overflow-x-scroll max-md:w-full max-md:pb-[1rem] max-md:gap-[1rem]">
            {renderedPortfolioCards}
          </div>
          <div className="items-center hidden max-md:flex">
            <img src={HeadingImage} alt="HeadingImage" />
          </div>
        </div>

        <div className="flex flex-col items-center absolute top-0 max-md:hidden max-md:relative">
          <div className="flex items-center">
            <img src={LeafLImage} alt="leafLeftImage" />
            <h1 className="text-[70px] text-[#3D3D3D] headingFont">
              Portfolio
            </h1>
            <img src={LeafRImage} alt="leafRightImage" />
          </div>
          <img src={HeadingImage} alt="HeadingImage" />
        </div>

        <div className="flex flex-col items-center absolute bottom-[4rem] max-md:hidden max-md:relative">
          <img src={HeadingImage} alt="HeadingImage" />
        </div>
      </div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalPortfolio data={data} />
        </Box>
      </Modal> */}
    </>
  );
};

export default PortfolioSection;
