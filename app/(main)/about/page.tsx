"use client";
import React from "react";
import Image from "next/image";
import CarAbout from "../../../public/car-about.png";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="pageContainer"
      className="lg:max-w-7xl lg:mx-auto max-w-full md:mt-20"
    >
      <div
        id="aboutContainer"
        className="grid md:grid-cols-2 grid-cols-1 gap-x-5 place-items-center"
      >
        {/*-----------------IMAGE CONTAINER----------------*/}
        <div
          id="imageContainer"
          className="md:max-w-[600px] md:max-h-[600px] max-w-[420px] max-h-[420px]"
        >
          <Image src={CarAbout} alt="Range Rover Orange Car" className="md" />
        </div>

        {/*-----------------ABOUT US TEXT---------------*/}
        <div id="aboutUsText" className="gap-y-5 p-4">
          {/*-----------------TITLE---------------*/}
          <h1
            id="title"
            className="font-extrabold md:text-3xl text-2xl text-primary"
          >
            About Us
          </h1>

          {/*-----------------HEADING---------------*/}
          <h1
            id="heading"
            className="font-extrabold md:text-4xl text-2xl text-textPrimary"
          >
            Driven by Excellence in Service
          </h1>

          {/*---------------BODY TEXT---------------*/}
          <p className="font-normal md:text-xl text-lg font-poppins text-textSecondary mt-5">
            Dedicated to delivering the highest quality in car rental services,
            we ensure an effortless booking process and a comfortable ride. Our
            platform is tailored for the utmost convenience and
            cost-effectiveness.
          </p>

          {/*---------------1st Check Box---------------*/}
          <section className="flex gap-2 mt-5 justify-start items-center">
            <FaCheckCircle
              size={34}
              className="text-primary md:text-xl text-lg"
            />
            <p className="font-semibold text-textPrimary md:text-2xl text-lg">
              24/7 Online Booking
            </p>
          </section>

          {/*---------------2nd Check Box---------------*/}
          <section className="flex gap-2 mt-5 justify-start items-center">
            <FaCheckCircle size={34} className="text-primary text-xl" />
            <p className="font-semibold text-textPrimary md:text-2xl text-lg">
              Diverse Vehicle Selection
            </p>
          </section>

          {/*---------------3rd Check Box---------------*/}
          <section className="flex gap-2 mt-5 justify-start items-center">
            <FaCheckCircle size={34} className="text-primary text-xl" />
            <p className="font-semibold text-textPrimary md:text-2xl text-lg">
              Flexible locations
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
