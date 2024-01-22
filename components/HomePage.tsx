"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import CarImage from "../public/car-map.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center lg:max-w-7xl lg:mx-auto max-w-full h-100">
      <div id="HeroText" className="grid gap-y-5 grid-cols-1">
        <section className="font-extrabold md:text-6xl text-5xl font-poppins text-textPrimary">
          <h1>
            WHERE TO NEXT? <br /> YOUR{" "}
            <span className="text-primary2">RYDE</span> AWAITS
          </h1>
        </section>
        <section className="font-normal text-xl font-poppins text-textPrimary">
          <p>
            Instant access to your ideal
            <span className="text-primary2"> ryde</span>. Rent, relax, and roam
            freely
          </p>
        </section>
        <section>
          <button className="flex gap-2 justify-center items-center bg-primary2 text-textPrimary font-bold px-4 py-3 rounded hover:bg-black transition-colors hover:scale-105 transition-all'">
            <p>Book Now</p>
            <FaChevronRight className="text-xl font-semibold" />
          </button>
        </section>
      </div>
      <div id="CarImage">
        <Image
          // width={500}
          // height={500}
          src={CarImage}
          alt="Muscle Car with World Map Background"
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
};

export default HomePage;
