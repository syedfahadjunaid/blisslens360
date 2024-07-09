import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useLocation } from "react-router-dom";
import linkBorderImage from "../../assets/linkBorder.png";
import navBackgroundImage from "../../assets/navBackground.png";

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const activeStyle = "text-yellow absolute text-center w-full h-fit";
  return (
    <div className="flex items-center w-[90%] justify-between shadow-md p-[1rem] relative">
      <div className="flex w-full justify-end">
        <img
          src={navBackgroundImage}
          alt="navigation-background-image"
          //   className="pr-[10rem]"
        />
      </div>
      <div className="flex items-center gap-[2rem] absolute">
        <img
          src={logo}
          alt="blisslens_logo"
          className=""
          onClick={() => navigate("/")}
        />
        <div className="border-solid border-l-[2px] pl-[2rem] flex gap-[2rem] items-center">
          {location.pathname === "/" ? (
            <div className="relative w-fit flex items-center justify-center h-full">
              <img
                src={linkBorderImage}
                alt="link_border"
                className="w-[65px] h-[65px]"
              />
              <Link
                to={"/"}
                className={
                  location.pathname === "/" ? activeStyle : "text-gray"
                }
              >
                Home
              </Link>
            </div>
          ) : (
            <Link
              to={"/"}
              className={
                location.pathname === "/" ? activeStyle : "text-gray w-[65px]"
              }
            >
              Home
            </Link>
          )}
          {location.pathname === "/portfolio" ? (
            <div className="relative w-fit flex items-center justify-center h-full">
              <img
                src={linkBorderImage}
                alt="link_border"
                className="w-[65px] h-[65px]"
              />
              <Link
                to={"/"}
                className={
                  location.pathname === "/portfolio" ? activeStyle : "text-gray"
                }
              >
                Portfolio
              </Link>
            </div>
          ) : (
            <Link
              to={"/portfolio"}
              className={
                location.pathname === "/portfolio"
                  ? activeStyle
                  : "text-gray w-[65px]"
              }
            >
              Portfolio
            </Link>
          )}
        </div>
      </div>

      <button className="border border-black p-[1rem] rounded-[30px] flex items-center gap-[10px]">
        <p>Book Now</p>
        <MdArrowOutward />
      </button>
    </div>
  );
};

export default Navbar;
