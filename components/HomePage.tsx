"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import CarImage from "../public/car-map.png";
import Ellipse from "../public/ellipse.png";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const handleClick = () => {};
  return (
    <div>
      <div
        id="heroContainer"
        className="flex lg:flex-row flex-col gap-5 items-center lg:max-w-7xl lg:mx-auto max-w-full"
      >
        {/*-------------------------------------HERO TEXT CONTAINER--------------------------------*/}
        <div id="heroTextContainer" className="flex-1 lg:mt-20 mt-8">
          {/*-----------------TITLE----------------*/}
          <h1 className="font-extrabold md:text-6xl text-5xl font-poppins text-textPrimary">
            WHERE TO NEXT? <br /> YOUR{" "}
            <span className="text-primary2">RYDE</span> AWAITS
          </h1>

          {/*-----------------SUBTITLE----------------*/}
          <p className="font-normal text-xl font-poppins text-textPrimary mt-5">
            Instant access to your ideal
            <span className="text-primary2"> ryde</span>. Rent, relax, and roam
            freely
          </p>

          {/*-----------------BOOK NOW BUTTON----------------*/}
          <button
            onClick={handleClick}
            className="flex gap-2 mt-5 justify-center items-center bg-primary2 text-textPrimary font-bold px-4 py-3 rounded hover:bg-black transition-colors hover:scale-105 transition-all'"
          >
            <Link href={"/cars"}>
              <p>Book Now</p>
            </Link>
            <FaChevronRight className="text-xl font-semibold" />
          </button>
        </div>

        {/*-------------------------------------IMAGE CONTAINER--------------------------------*/}
        <div
          id="imageContainer"
          className="xl:flex-[1.5] flex justify-end items-end w-full lg:mt-24"
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

      {/*-----------------BOTTOM ELLIPSE CONTAINER--------------*/}
      <div className="flex justify-center">
        <div
          id="bottomCurve"
          className="fixed bottom-0  lg:max-w-7xl lg:mx-auto max-w-full overflow-hidden "
        >
          <Image src={Ellipse} alt="Ellipse Shape" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
