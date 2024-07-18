// import React from "react";
import logo from "../../assets/logo.png";

import { MdArrowOutward } from "react-icons/md";

import linkBorderImage from "../../assets/linkBorder.png";
import navBackgroundImage from "../../assets/navBackground.png";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import ModalContactForm from "../ModalContactForm/ModalContactForm";
import Hamburger from "hamburger-react";

const Navbar = ({ setLink, link }) => {
  // const navigate = useNavigate();

  // const location = useLocation();

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isOpen, setIsOpen] = React.useState(false);

  const activeStyle =
    "text-yellow absolute text-center w-full h-fit cursor-pointer";

  return (
    <>
      <div className="w-full">
        <div className="fixed top-0 w-full flex items-center justify-center z-10 max-md:hidden">
          <div className="flex items-center w-[90%] justify-between shadow-md relative bg-white">
            <div className="flex w-full justify-end pr-[5rem]">
              <img
                src={navBackgroundImage}
                alt="navigation-background-image"
                //   className="pr-[10rem]"
              />
            </div>
            <div className="flex items-center justify-between w-full absolute p-[1rem]">
              <div className="flex items-center gap-[2rem] py-[1rem]">
                <img
                  src={logo}
                  alt="blisslens_logo"
                  className=""
                  // onClick={() => navigate("/")}
                  onClick={() => setLink("Home")}
                />
                <div className="border-solid border-l-[2px] pl-[2rem] flex gap-[2rem] items-center">
                  {link === "Home" ? (
                    <div className="relative w-fit flex items-center justify-center h-full cursor-pointer">
                      <img
                        src={linkBorderImage}
                        alt="link_border"
                        className="w-[65px] h-[65px]"
                      />
                      <div
                        // to={"/"}
                        onClick={() => setLink("Home")}
                        className={link === "Home" ? activeStyle : "text-gray"}
                      >
                        Home
                      </div>
                    </div>
                  ) : (
                    <div
                      // to={"/"}
                      onClick={() => setLink("Home")}
                      className={
                        link === "Home"
                          ? activeStyle
                          : "text-gray w-[65px] cursor-pointer"
                      }
                    >
                      Home
                    </div>
                  )}
                  {link === "Portfolio" ? (
                    <div className="relative w-fit flex items-center justify-center h-full cursor-pointer">
                      <img
                        src={linkBorderImage}
                        alt="link_border"
                        className="w-[65px] h-[65px]"
                      />
                      <div
                        // to={"/"}
                        onClick={() => setLink("Portfolio")}
                        className={
                          link === "Portfolio" ? activeStyle : "text-gray "
                        }
                      >
                        Portfolio
                      </div>
                    </div>
                  ) : (
                    <div
                      // to={"/portfolio"}
                      onClick={() => setLink("Portfolio")}
                      className={
                        link === "Portfolio"
                          ? activeStyle
                          : "text-gray w-[65px] cursor-pointer"
                      }
                    >
                      Portfolio
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={handleOpen}
                className="flex justify-center border border-black p-[1rem] rounded-[30px] flex items-center gap-[10px]"
              >
                <p>Book Now</p>
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className="fixed top-0 w-full hidden max-md:block relative">
          <div className="fixed w-full z-20 bg-white flex items-center justify-between">
            <img src={logo} alt="logo" className="p-[1rem] w-[200px]" />
            <div className="w-fit right-0 p-[1rem]">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
          </div>
          {isOpen && (
            <div className="fixed w-full flex items-center justify-center bg-white h-screen z-10 top-0">
              <div className="flex flex-col gap-[2rem] items-center">
                {link === "Home" ? (
                  <div className="relative w-fit flex items-center justify-center h-full">
                    <img
                      src={linkBorderImage}
                      alt="link_border"
                      className="w-[65px] h-[65px]"
                    />
                    <div
                      // to={"/"}
                      onClick={() => setLink("Home")}
                      className={link === "Home" ? activeStyle : "text-gray"}
                    >
                      Home
                    </div>
                  </div>
                ) : (
                  <div
                    // to={"/"}
                    onClick={() => {
                      setLink("Home");
                      setIsOpen(false);
                    }}
                    className={
                      link === "Home" ? activeStyle : "text-gray w-[65px]"
                    }
                  >
                    Home
                  </div>
                )}
                {link === "Portfolio" ? (
                  <div className="relative w-fit flex items-center justify-center h-full">
                    <img
                      src={linkBorderImage}
                      alt="link_border"
                      className="w-[65px] h-[65px]"
                    />
                    <div
                      // to={"/"}
                      onClick={() => setLink("Portfolio")}
                      className={
                        link === "Portfolio" ? activeStyle : "text-gray"
                      }
                    >
                      Portfolio
                    </div>
                  </div>
                ) : (
                  <div
                    // to={"/portfolio"}
                    onClick={() => {
                      setLink("Portfolio");
                      setIsOpen(false);
                    }}
                    className={
                      link === "Portfolio" ? activeStyle : "text-gray w-[65px]"
                    }
                  >
                    Portfolio
                  </div>
                )}
              </div>
            </div>
          )}
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

export default Navbar;
