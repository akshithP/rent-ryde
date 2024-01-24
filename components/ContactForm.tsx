"use client";
import React from "react";
import { IoMdSend as Send } from "react-icons/io";

const ContactForm = () => {
  return (
    <div
      id="mainContactForm"
      className="grid md:grid-cols-2 grid-cols-1 p-10 md:gap-10 gap-5"
    >
      {/*-----------------FIRST NAME----------------*/}
      <div id="firstName" className="flex flex-col gap-2">
        <p className="text-lg font-normal text-primary">First Name</p>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
      </div>

      {/*-----------------LAST NAME----------------*/}
      <div id="lastName" className="flex flex-col gap-2">
        <p className="text-lg font-normal text-primary">Last Name</p>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
      </div>

      {/*-----------------EMAIL ID----------------*/}
      <div id="email" className="flex flex-col gap-2">
        <p className="text-lg font-normal text-primary">Email ID</p>
        <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
      </div>

      {/*-----------------PHONE NUMBER----------------*/}
      <div id="phone" className="flex flex-col gap-2">
        <p className="text-lg font-normal text-primary">Phone Number</p>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your number..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
      </div>

      {/*------------------------------------WRITE MESSAGE----------------------------------*/}
      <div className="flex flex-col gap-2 md:col-span-2">
        <p className="text-lg font-normal text-primary">Message</p>
        <input
          type="text"
          id="message"
          placeholder="Write your message here..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
      </div>

      {/*------------------------------------SEND BUTTON----------------------------------*/}
      <div className="flex flex-col gap-2 md:col-start-2 md:col-span-1">
        <button className="flex gap-2 mt-5 justify-center items-center bg-primary text-secondary2 font-bold px-4 py-3 rounded hover:bg-black hover:text-textPrimary transition-colors hover:scale-105 transition-all'">
          <p>Send Message</p>
          <Send className="text-xl font-semibold" />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
