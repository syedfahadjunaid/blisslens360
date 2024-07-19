// import React from "react";

import Image1 from "../../assets/portfolioSection/1.jpg";
import Image2 from "../../assets/portfolioSection/2.jpg";
import Image3 from "../../assets/portfolioSection/3.jpg";
import Image4 from "../../assets/portfolioSection/4.jpg";

import img from "../../assets/img.jpg";

import { MdArrowOutward } from "react-icons/md";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import ModalPortfolio from "../../components/ModalPortfolio/ModalPortfolio";

const Portfolio = () => {
  const [data, setData] = React.useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = (newData) => {
    setOpen(true);
    setData(newData);
  };
  const handleClose = () => setOpen(false);

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

  const portfolioData = [
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

  const renderedPortfolioCards = portfolioData?.map((data, index) => {
    return (
      <div className="flex items-center justify-center w-dull h-full relative max-md:min-w-[90%]">
        <div className="h-[90%] w-full relative flex justify-center items-center max-md:h-full">
          <img
            src={data?.cardImage}
            alt={`${data.cardBtnText}-${index}-image`}
            className="h-full w-full"
          />
          <div className="flex flex-col items-center gap-[1rem] absolute w-full h-full flex justify-end pb-[1rem] opacity-0 hover:opacity-100 transition ease-in-out duration-[0.5s] bg-white bg-opacity-30">
            <div className="border-[1px] border-black border-solid rounded-full w-[40px] h-[40px] bg-white flex items-center justify-center">
              <MdArrowOutward />
            </div>
            <a
              // onClick={() => handleOpen(data)}
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white bg-opacity-50 p-[1rem] rounded-full"
            >
              {data.cardBtnText}
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="w-[90%] flex flex-col items-center gap-[2rem] mt-[5rem]">
        <div className="flex gap-[1rem] w-full">
          <div className="sectionHeading flex flex-col items-start max-md:p-0 max-md:text-start">
            <h1 className="text-[70px] text-[#3D3D3D] max-md:text-[40px]">
              Portfolio
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center justify-center w-full gap-[1rem] max-md:grid-cols-1">
          {renderedPortfolioCards}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalPortfolio data={data} />
        </Box>
      </Modal>
    </>
  );
};

export default Portfolio;
