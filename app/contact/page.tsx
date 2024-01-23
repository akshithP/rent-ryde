"use client";
import React from "react";
import Image from "next/image";
import { BiSolidPhoneCall as Phone } from "react-icons/bi";
import { IoMail as Mail } from "react-icons/io5";
import { FaLocationDot as Pin } from "react-icons/fa6";
import { FaInstagram as Instagram } from "react-icons/fa";
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { FaXTwitter as X } from "react-icons/fa6";
import DualCircle from "../../public/dual-circles.png";

const Contact = () => {
  return (
    <div id="pageContainer">
      {/*-----------------TITLE----------------*/}
      <div className="flex justify-center p-4">
        <h1
          id="title"
          className="font-extrabold md:text-3xl text-2xl text-primary"
        >
          Contact Us
        </h1>
      </div>

      {/*-----------------CONTACT FORM----------------*/}
      <div
        id="content"
        className="grid grid-cols-5 gap-0 p-10 lg:max-w-7xl lg:mx-auto max-w-full"
      >
        {/*---------LEFT FORM----------*/}
        <div className="col-span-2 bg-primary rounded-lg p-10 flex flex-col gap-y-20 font-poppins relative z-1">
          <section className="gap-10">
            <h1 className="text-2xl font-bold text-secondary2">
              Contact Information
            </h1>

            <p className="text-lg font-normal text-textPrimary">
              Any questions? Just send us a message!
            </p>
          </section>

          {/*---------PHONE----------*/}
          <a
            href={`tel:+61-0234-5678`}
            className="flex gap-5 justify-start items-center text-secondary2 hover:text-textPrimary transition-colors"
          >
            <Phone size={34} />
            <p className="text-lg font-medium hover:underline ">
              +61-0234-5678
            </p>
          </a>

          {/*---------MAIL----------*/}
          <a
            href={`mailto:rentryde@help.com.au`}
            className="flex gap-5 justify-start items-center text-secondary2 hover:text-textPrimary transition-colors"
          >
            <Mail size={34} />
            <p className="text-lg font-medium hover:underline">
              rentryde@help.com.au
            </p>
          </a>

          {/*---------ADDRESS----------*/}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=132+Kaer+Morhen+Street,+Melbourne,+3000+Australia`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-5 justify-start items-center text-secondary2 z-10 hover:text-textPrimary transition-colors"
          >
            <Pin size={34} />
            <p className="text-lg font-medium underline">
              132 Kaer Morhen Street, Melbourne, 3000 Australia
            </p>
          </a>

          {/*---------ICONS----------*/}
          <section className="flex gap-5 z-10">
            <Facebook size={25} className="text-[#4267B2]" />
            <Instagram size={25} className="text-[#E1306C]" />
            <X size={25} />
          </section>

          <div className="absolute bottom-0 right-0 ">
            <Image src={DualCircle} alt="Dual Circle" />
          </div>
        </div>

        {/*---------RIGHT FORM----------*/}
        <div className="col-span-3 bg-secondary2 rounded-lg z-0">RIGHT</div>
      </div>
    </div>
  );
};

export default Contact;
