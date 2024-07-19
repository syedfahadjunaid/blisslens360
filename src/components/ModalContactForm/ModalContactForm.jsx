import React, { useState } from "react";

import logo from "../../assets/logo.png";

import { useRef } from "react";
import emailjs from "emailjs-com";

const ModalContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = {
      name: name,
      number: phoneNumber,
    };

    emailjs
      .sendForm(
        // "service_z17to8s",
        // "template_6qdkdw4",
        form.current
        // "8AXI-DnI3pQQixoOx"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
    setName("");
    setPhoneNumber();

    console.log(submitData);
  };
  return (
    <div className="w-[500px] max-md:w-[350px] h-full flex flex-col gap-[1rem] rounded-[10px] bg-gradient-to-r from-[#FFBB01] to-[#000000] p-[4px]">
      <div className="w-full h-full flex flex-col gap-[1rem] rounded-[10px] bg-white p-[2rem]">
        <img src={logo} alt="logo" className="w-[200px]" />
        <p className="text-[14px]">
          The Joy of Connection: How Making Moments Matters strengthens
          Relationships
        </p>
        <form
          className="flex flex-col gap-[1rem]"
          onSubmit={handleSubmit}
          ref={form}
        >
          <input
            className="border-[#A9A9A9] border-solid border-[1px] p-[10px] rounded-[4px] w-full"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            required
          />
          <input
            className="border-[#A9A9A9] border-solid border-[1px] p-[10px] rounded-[4px] w-full"
            placeholder="Number"
            type="number"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button className="rounded-[4px] border-black border-solid border-[1px] p-[10px] w-full">
            Book Now
          </button>
        </form>
        <div className="w-[100%] border-t my-[1rem]"></div>
        <div className="w-full flex justify-between items-center text-[#A9A9A9]">
          <a
            className="cursor-pointer hover:underline max-md:text-[10px]"
            href="tel:+9190445423535"
          >
            +91 90445423535
          </a>
          <a
            className="cursor-pointer hover:underline max-md:text-[10px]"
            href="mailto:email@gmail.com"
          >
            email@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalContactForm;
