import React, { useState } from "react";

import logo from "../../assets/logo.png";

import { useRef } from "react";
import emailjs from "emailjs-com";

const ModalContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const form = useRef();

  const [submitResponse, setSubmitResponse] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const submitData = {
    //   name: name,
    //   number: phoneNumber,
    // };

    emailjs
      .sendForm(
        "service_yaa3fwe",
        "template_g0anif8",
        form.current,
        "S_kzOiITauvZ9sKf7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitResponse(true);
        },
        (error) => {
          console.log(error.text);
          setSubmitResponse(false);
        }
      );
    setName("");
    setPhoneNumber("");
    setEmail("");

    // console.log(submitData);
  };
  return (
    <div className="w-[500px] max-md:w-[350px] h-full flex flex-col gap-[1rem] rounded-[10px] bg-gradient-to-r from-[#FFBB01] to-[#000000] p-[4px]">
      <div className="w-full h-full flex flex-col gap-[1rem] rounded-[10px] bg-white p-[2rem]">
        <img src={logo} alt="logo" className="w-[200px]" />
        <p className="text-[14px]">
          The Joy of Connection: How Making Moments Matters strengthens
          Relationships
        </p>
        {submitResponse === false ? (
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
              name="name"
            />
            <input
              className="border-[#A9A9A9] border-solid border-[1px] p-[10px] rounded-[4px] w-full"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required
              name="email"
            />
            <input
              className="border-[#A9A9A9] border-solid border-[1px] p-[10px] rounded-[4px] w-full"
              placeholder="Phone Number"
              // type="number"
              value={phoneNumber}
              minLength={10}
              maxLength={10}
              required
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setPhoneNumber(value);
              }}
              name="number"
            />
            <button className="rounded-[4px] border-black border-solid border-[1px] p-[10px] w-full">
              Book Now
            </button>
          </form>
        ) : (
          <p className="text-[30px] text-green">Message Sent Successfully!</p>
        )}
        <div className="w-[100%] border-t my-[1rem]"></div>
        <div className="w-full flex justify-between items-center text-[#A9A9A9]">
          <a
            className="cursor-pointer hover:underline max-md:text-[10px]"
            href="tel:+918948869106"
          >
            +91 8948869106
          </a>
          <a
            className="cursor-pointer hover:underline max-md:text-[10px]"
            href="mailto:blisslens360@gmail.com"
          >
            blisslens360@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalContactForm;
