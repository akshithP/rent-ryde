"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import CarImage from "../public/car-map.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div
      id="heroContainer"
      className="flex lg:flex-row flex-col gap-5 items-center lg:max-w-7xl lg:mx-auto max-w-full"
    >
      {/*-------------------------------------HERO TEXT CONTAINER--------------------------------*/}
      <div id="heroTextContainer" className="flex-1 lg:mt-32 mt-20">
        {/*-----------------TITLE----------------*/}
        <h1 className="font-extrabold md:text-6xl text-5xl font-poppins text-textPrimary">
          WHERE TO NEXT? <br /> YOUR <span className="text-primary2">RYDE</span>{" "}
          AWAITS
        </h1>

        {/*-----------------SUBTITLE----------------*/}
        <p className="font-normal text-xl font-poppins text-textPrimary mt-5">
          Instant access to your ideal
          <span className="text-primary2"> ryde</span>. Rent, relax, and roam
          freely
        </p>

        {/*-----------------BOOK NOW BUTTON----------------*/}
        <button className="flex gap-2 mt-5 justify-center items-center bg-primary2 text-textPrimary font-bold px-4 py-3 rounded hover:bg-black transition-colors hover:scale-105 transition-all'">
          <p>Book Now</p>
          <FaChevronRight className="text-xl font-semibold" />
        </button>
      </div>

      {/*-------------------------------------IMAGE CONTAINER--------------------------------*/}
      <div
        id="imageContainer"
        className="xl:flex-[1.5] flex justify-end items-end w-full lg:mt-32"
      >
        <div
          id="image"
          className="relative xl:w-full w-[90%] xl:h-full items-center"
        >
          <Image
            src={CarImage}
            alt="Muscle Car with World Map Background"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
