// import React from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import image1 from "../../../assets/Website Pic/Adarsh X Akansha.jpg";
import image2 from "../../../assets/Website Pic/Aparna X Saurabh.jpg";
import image3 from "../../../assets/Website Pic/Eshan X Megha.jpg";
import image4 from "../../../assets/Website Pic/Prateek X Anamika.jpg";
import image5 from "../../../assets/Website Pic/Raunak X Saniya.jpg";
import image6 from "../../../assets/Website Pic/Ritika X Ashutosh.jpg";
import image7 from "../../../assets/Website Pic/Samar X Husain.jpg";
import image8 from "../../../assets/Website Pic/Shivam X Shipra.jpg";
import image9 from "../../../assets/Website Pic/Adarsh X Akansha.jpg";
// import { width } from "@mui/system";

const ClientsSection = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: "90%",
    width: "80%",
    height: "80%",
    bgcolor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: 0,
    // borderRadius: "20px",
    // p: 4,
  };
  const [data, setData] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (newData) => {
    setOpen(true);
    setData(newData);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="w-[90%] h-full flex flex-col items-center justify-center gap-[2rem]">
        <div className="flex gap-[1rem] w-full">
          <div className="sectionHeading flex flex-col items-start max-md:p-0">
            <h1 className="text-[70px] text-[#3D3D3D] max-md:text-[40px]">
              The Client’s Words
            </h1>
          </div>
        </div>
        <div className="bg-[#FAFFEB] h-full w-full p-[1rem]">
          <div className="grid grid-cols-3 gap-[1rem] w-full max-md:overflow-x-scroll max-md:flex max-md:flex-row">
            <div className="grid grid-rows-2 gap-[1rem] max-md:min-w-[90%]">
              <div className="grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">
                <div className="flex flex-col items-start bg-white p-[1rem] max-md:p-[10px]">
                  <h4 className="text-[#FFBB00]">Adarsh X Akansha</h4>
                  <p className="text-[500] text-[12px] text-start pb-[2px]">
                    Capturing Our Perfect Day
                  </p>
                  <p className="text-[#5D5D5D] text-start text-[10px] max-md:text-start">
                    "Bliss Lens 360 truly captured the magic of our wedding day!
                    The photos and videos are absolutely stunning, and we
                    couldn't have asked for a better team to work with. Thank
                    you for preserving our memories so beautifully!"
                  </p>
                  <p
                    onClick={() =>
                      handleOpen(
                        <img
                          className="w-full h-full object-cover object-[center_40%] rounded-[10px]"
                          src={image1}
                          alt="Adarsh X Akansha"
                        />
                      )
                    }
                    className="underline text-[#FFBB00] text-[10px] cursor-pointer"
                  >
                    View Images
                  </p>
                </div>
                <div className="flex flex-col items-start bg-white p-[1rem]">
                  <h4 className="text-[#FFBB00]">Aparna X Saurabh</h4>
                  <p className="text-[500] text-[12px] text-start pb-[2px]">
                    Incredible Wedding Photos and Videos
                  </p>
                  <p className="text-[#5D5D5D] text-start text-[10px] max-md:text-start">
                    "We are beyond thrilled with the work Bliss Lens 360 did for
                    our wedding. Their photographers and videographers were
                    professional, creative, and attentive. The final product was
                    nothing short of amazing. Highly recommend!"
                  </p>
                  <p
                    onClick={() =>
                      handleOpen(
                        <img
                          className="w-full h-full object-cover object-[center_60%] rounded-[10px]"
                          src={image2}
                          alt="Aparna X Saurabh"
                        />
                      )
                    }
                    className="underline text-[#FFBB00] text-[10px] cursor-pointer"
                  >
                    View Images
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start bg-white p-[1rem]">
                <h4 className="text-[#FFBB00] text-[24px]">Eshan X Megha</h4>
                <p className="text-[500] text-start pb-[2px]">
                  Exceptional Wedding Coverage
                </p>
                <p className="text-[#5D5D5D] text-start max-md:text-start">
                  "Bliss Lens 360 was phenomenal! They captured every special
                  moment of our wedding day with such artistry. The photos and
                  videos are simply breathtaking. We are so grateful for their
                  amazing work!"
                </p>
                <p
                  onClick={() =>
                    handleOpen(
                      <img
                        className="w-full h-full object-cover object-[center_40%] rounded-[10px]"
                        src={image3}
                        alt="Eshan X Megha"
                      />
                    )
                  }
                  className="underline text-[#FFBB00] cursor-pointer"
                >
                  View Images
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-[1rem] max-md:min-w-[90%]">
              <div className="flex flex-col items-start bg-white p-[1rem] max-md:p-[10px]">
                <h4 className="text-[#FFBB00] text-[24px]">
                  Prateek X Anamika
                </h4>
                <p className="text-[500] text-start pb-[2px]">
                  Professional and Talented
                </p>
                <p className="text-[#5D5D5D] text-start max-md:text-start">
                  "The team at Bliss Lens 360 exceeded our expectations. They
                  were professional, punctual, and incredibly talented. The
                  wedding photos and videos are of exceptional quality, and we
                  couldn't be happier with the results."
                </p>
                <p
                  onClick={() =>
                    handleOpen(
                      <img
                        className="w-full h-full object-cover object-[center_70%] rounded-[10px]"
                        src={image4}
                        alt="Prateek X Anamika"
                      />
                    )
                  }
                  className="underline text-[#FFBB00] cursor-pointer"
                >
                  View Images
                </p>
              </div>
              <div className="grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">
                <div className="flex flex-col items-start bg-white p-[1rem]">
                  <h4 className="text-[#FFBB00]">Raunak X Saniya</h4>
                  <p className="text-[500] text-[12px] text-start pb-[2px]">
                    A Dream Come True
                  </p>
                  <p className="text-[#5D5D5D] text-start text-[10px] max-md:text-start">
                    "Hiring Bliss Lens 360 was one of the best decisions we made
                    for our wedding. Their team was so easy to work with and
                    made us feel comfortable throughout the day. The photos and
                    videos are absolutely gorgeous!"
                  </p>
                  <p
                    onClick={() =>
                      handleOpen(
                        <img
                          className="w-full h-full object-cover object-[center_47%] rounded-[10px]"
                          src={image5}
                          alt="Raunak X Saniya"
                        />
                      )
                    }
                    className="underline text-[#FFBB00] text-[10px] cursor-pointer"
                  >
                    View Images
                  </p>
                </div>
                <div className="flex flex-col items-start bg-white p-[1rem]">
                  <h4 className="text-[#FFBB00]">Ritika X Ashutosh</h4>
                  <p className="text-[500] text-[12px] text-start pb-[2px]">
                    Unforgettable Wedding Moments
                  </p>
                  <p className="text-[#5D5D5D] text-start text-[10px] max-md:text-start">
                    "Bliss Lens 360 captured our wedding day perfectly. The team
                    was professional and creative, and they didn't miss a single
                    detail. We love our photos and videos and will cherish them
                    forever!"
                  </p>
                  <p
                    onClick={() =>
                      handleOpen(
                        <img
                          className="w-full h-full object-cover object-[center_35%] rounded-[10px]"
                          src={image6}
                          alt="Ritika X Ashutosh"
                        />
                      )
                    }
                    className="underline text-[#FFBB00] text-[10px] cursor-pointer"
                  >
                    View Images
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-[1rem] max-md:min-w-[90%]">
              <div className="grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">
                <div className="flex flex-col items-start bg-white p-[1rem] max-md:p-[10px]">
                  <h4 className="text-[#FFBB00]">Samar X Husain</h4>
                  <p className="text-[500] text-[12px] text-start pb-[2px]">
                    Wonderful Experience!
                  </p>
                  <p className="text-[#5D5D5D] text-start text-[10px] max-md:text-start">
                    "Bliss Lens 360 made our wedding day even more special with
                    their incredible photography and videography. The team was
                    friendly, professional, and so talented. The end result was
                    beautiful and exceeded our expectations!"
                  </p>
                  <p
                    onClick={() =>
                      handleOpen(
                        <img
                          className="w-full h-full object-cover object-[center_30%] rounded-[10px]"
                          src={image7}
                          alt="Samar X Husain"
                        />
                      )
                    }
                    className="underline text-[#FFBB00] text-[10px] cursor-pointer"
                  >
                    View Images
                  </p>
                </div>
                <div className="flex flex-col items-start bg-white p-[1rem]">
                  <h4 className="text-[#FFBB00]">Shivam X Shipra</h4>
                  <p className="text-[500] text-[12px] text-start pb-[2px]">
                    Highly Recommend for Weddings
                  </p>
                  <p className="text-[#5D5D5D] text-start text-[10px] max-md:text-start">
                    "We couldn't be happier with Bliss Lens 360. They did an
                    outstanding job capturing our wedding day. The photos and
                    videos are stunning, and the team was an absolute pleasure
                    to work with. Highly recommend their services!"
                  </p>
                  <p
                    onClick={() =>
                      handleOpen(
                        <img
                          className="w-full h-full object-cover object-[center_60%] rounded-[10px]"
                          src={image8}
                          alt="Shivam X Shipra"
                        />
                      )
                    }
                    className="underline text-[#FFBB00] text-[10px] cursor-pointer"
                  >
                    View Images
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start bg-white p-[1rem]">
                <h4 className="text-[#FFBB00] text-[24px]">Adarsh X Akansha</h4>
                <p className="text-[500] text-start pb-[2px]">
                  Best Decision for Our Wedding
                </p>
                <p className="text-[#5D5D5D] text-start max-md:text-start">
                  "Choosing Bliss Lens 360 for our wedding photography and
                  videography was the best decision we made. They captured every
                  moment beautifully, and the quality of their work is
                  exceptional. We are so grateful for their amazing service!"
                </p>
                <p
                  onClick={() =>
                    handleOpen(
                      <img
                        className="w-full h-full object-cover object-[center_40%] rounded-[10px]"
                        src={image9}
                        alt="Adarsh X Akansha"
                      />
                    )
                  }
                  className="underline text-[#FFBB00] cursor-pointer"
                >
                  View Images
                </p>
              </div>
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
          <div className="w-full h-full flex justify-center relative bg-white bg-opacity-[10%] rounded-[10px] shadow-md">
            {data}
            <p
              onClick={handleClose}
              className="text-white absolute right-[1rem] text-[20px] font-[600] cursor-pointer"
            >
              x
            </p>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ClientsSection;
