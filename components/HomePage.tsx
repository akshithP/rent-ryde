"use client";
import React from "react";
import { poppins } from "@/fonts";
import { FaChevronRight } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div id="HeroText" className="grid gap-y-5 grid-cols-1">
        <section className="font-extrabold text-6xl font-poppins text-textPrimary">
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
          <button className="flex gap-2 justify-center items-center bg-primary2 text-textPrimary font-bold px-4 py-3 rounded hover:bg-black transition-colors">
            <p>Book Now</p>
            <FaChevronRight className="text-xl font-semibold" />
          </button>
        </section>
      </div>
      <div id="CarImage">Image</div>
    </div>
  );
};

export default HomePage;
