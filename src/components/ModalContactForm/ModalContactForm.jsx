import React, { useState } from "react";

import logo from "../../assets/logo.png";

const ModalContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = {
      name: name,
      number: phoneNumber,
    };

    console.log(submitData);
  };
  return (
    <div className="w-full h-full flex flex-col gap-[1rem] rounded-[10px] bg-gradient-to-r from-[#FFBB01] to-[#000000] p-[4px]">
      <div className="w-full h-full flex flex-col gap-[1rem] rounded-[10px] bg-white p-[2rem]">
        <img src={logo} alt="logo" className="w-[200px]" />
        <p className="text-[14px]">
          The Joy of Connection: How Making Moments Matters strengthens
          Relationships
        </p>
        <form className="flex flex-col gap-[1rem]" onSubmit={handleSubmit}>
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
            className="cursor-pointer hover:underline"
            href="tel:+9190445423535"
          >
            +91 90445423535
          </a>
          <a
            className="cursor-pointer hover:underline"
            href="mailto:EMail:@gmail.com"
          >
            EMail:@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalContactForm;
