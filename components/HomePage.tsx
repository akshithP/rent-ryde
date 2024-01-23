"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import CarImage from "../public/car-map.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center lg:max-w-7xl lg:mx-auto max-w-full mt-20">
      {/*-------------------------------------HERO TEXT CONTAINER--------------------------------*/}
      <div id="HeroText" className="grid grid-cols-1 gap-y-10">
        {/*-----------------TITLE----------------*/}
        <section className="font-extrabold md:text-6xl text-5xl font-poppins text-textPrimary">
          <h1>
            WHERE TO NEXT? <br /> YOUR{" "}
            <span className="text-primary2">RYDE</span> AWAITS
          </h1>
        </section>

        {/*-----------------SUBTEXT----------------*/}
        <section className="font-normal text-xl font-poppins text-textPrimary">
          <p>
            Instant access to your ideal
            <span className="text-primary2"> ryde</span>. Rent, relax, and roam
            freely
          </p>
        </section>

        {/*-----------------BOOK NOW BUTTON----------------*/}
        <section>
          <button className="flex gap-2 justify-center items-center bg-primary2 text-textPrimary font-bold px-4 py-3 rounded hover:bg-black transition-colors hover:scale-105 transition-all'">
            <p>Book Now</p>
            <FaChevronRight className="text-xl font-semibold" />
          </button>
        </section>
      </div>

      {/*-------------------------------------IMAGE CONTAINER--------------------------------*/}
      <div>
        <Image
          src={CarImage}
          alt="Muscle Car with World Map Background"
          className="w-full object-cover align-middle"
        />
      </div>
    </div>

    // <div
    //   id="heroContainer"
    //   className="flex md:flex-row flex-col gap-5 mx-auto;"
    // >
    //   {/*-------------------------------------HERO TEXT CONTAINER--------------------------------*/}
    //   <div id="heroTextContainer" className="flex-1 pt-32">
    //     {/*-----------------TITLE----------------*/}
    //     <h1 className="font-extrabold md:text-6xl text-5xl font-poppins text-textPrimary">
    //       WHERE TO NEXT? <br /> YOUR <span className="text-primary2">RYDE</span>{" "}
    //       AWAITS
    //     </h1>

    //     {/*-----------------SUBTITLE----------------*/}
    //     <p className="font-normal text-xl font-poppins text-textPrimary mt-5">
    //       Instant access to your ideal
    //       <span className="text-primary2"> ryde</span>. Rent, relax, and roam
    //       freely
    //     </p>

    //     {/*-----------------BOOK NOW BUTTON----------------*/}
    //     <button className="flex gap-2 mt-5 justify-center items-center bg-primary2 text-textPrimary font-bold px-4 py-3 rounded hover:bg-black transition-colors hover:scale-105 transition-all'">
    //       <p>Book Now</p>
    //       <FaChevronRight className="text-xl font-semibold" />
    //     </button>
    //   </div>

    //   {/*-------------------------------------IMAGE CONTAINER--------------------------------*/}
    //   <div
    //     id="imageContainer"
    //     className="xl:flex-[1.5] flex justify-end items-end w-full "
    //   >
    //     <div
    //       id="image"
    //       className="@apply relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;"
    //     >
    //       <Image
    //         src={CarImage}
    //         alt="Muscle Car with World Map Background"
    //         className="object-contain"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomePage;
