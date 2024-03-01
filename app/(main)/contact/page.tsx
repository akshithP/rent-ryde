"use client";
import React from "react";
import Image from "next/image";
import { BiSolidPhoneCall as Phone } from "react-icons/bi";
import { IoMail as Mail } from "react-icons/io5";
import { FaLocationDot as Pin } from "react-icons/fa6";
import Facebook from "../../../public/facebook.png";
import Instagram from "../../../public/instagram.png";
import X from "../../../public/twitter.png";
import DualCircle from "../../../public/dual-circles.png";
import ContactForm from "@/components/ContactForm";

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
        className="grid md:grid-cols-5 grid-cols-1 gap-0 p-10 lg:max-w-7xl lg:mx-auto max-w-full"
      >
        {/*-----------------------------------------------------LEFT FORM--------------------------------------------------*/}
        <div className="col-span-2 bg-primary rounded-lg p-10 flex flex-col md:gap-y-20 gap-y-5 font-poppins relative z-1">
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
            href={`tel:+61-469-035-759`}
            className="flex gap-5 justify-start items-center text-secondary2 hover:text-textPrimary transition-colors"
          >
            <Phone size={34} />
            <p className="text-lg font-medium hover:underline ">
              +61-469-035-759
            </p>
          </a>

          {/*---------MAIL----------*/}
          <a
            href={`mailto:rentrydehelp@gmail.com`}
            className="flex gap-5 justify-start items-center text-secondary2 hover:text-textPrimary transition-colors"
          >
            <Mail size={34} />
            <p className="text-lg font-medium hover:underline">
              rentrydehelp@gmail.com
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
            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              className="w-11 h-11 bg-secondary2 rounded-full flex justify-center items-center"
            >
              <Image
                src={Facebook}
                alt="Facebook Page Icon"
                width={25}
                height={25}
              />
            </a>

            <a
              href={"https://www.instagram.com/"}
              target="_blank"
              className="w-11 h-11 bg-secondary2 rounded-full flex justify-center items-center"
            >
              <Image
                src={Instagram}
                alt="Instagram Page Icon"
                width={25}
                height={25}
              />
            </a>

            <a
              href={"https://twitter.com/"}
              target="_blank"
              className="w-11 h-11 bg-secondary2 rounded-full flex justify-center items-center"
            >
              <Image src={X} alt="X Page Icon" width={25} height={25} />
            </a>
          </section>

          <div className="absolute bottom-0 right-0 ">
            <Image src={DualCircle} alt="Dual Circle" />
          </div>
        </div>

        {/*----------------------------------------------RIGHT FORM-----------------------------------------------*/}
        <div className="col-span-3 bg-secondary2 rounded-lg z-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
