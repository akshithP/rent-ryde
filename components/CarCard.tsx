"use client";
import React from "react";
import Image from "next/image";
import { poppins } from "@/fonts";
import { GiCarWheel as CarWheel } from "react-icons/gi";
import { BsFillFuelPumpFill as Fuel } from "react-icons/bs";
import { IoPeople as Seats } from "react-icons/io5";

// Received props from car page
interface CardCardProps {
  imageURL: string;
  brand: string;
  model: string;
  carType: string;
  driveType: string;
  fuelEconomy: number;
  seats: number;
}

const CarCard = ({
  imageURL,
  brand,
  model,
  carType,
  driveType,
  fuelEconomy,
  seats,
}: CardCardProps) => {
  return (
    <div
      id="cardContainer"
      className={`bg-black ${poppins.className} max-w-96 gap-5 rounded-lg`}
    >
      {/*-----------------------------------CAR IMAGE---------------------------------*/}
      <div id="imageContainer" className="max-w-96 min-w-96 min-h-56 max-h-56">
        <Image
          width={384}
          height={288}
          src={imageURL}
          alt={`Image of ${brand} ${model}`}
          className="rounded-tl-lg rounded-tr-lg object-cover max-w-96 min-w-96 min-h-56 max-h-56"
        />
      </div>

      {/*-----------------------------------SPECIFICATIONS---------------------------------*/}
      <div id="specsContainer" className="grid grid-cols-3 gap-5 col-auto p-5 ">
        {/*------------------------CAR TITLE--------------------*/}
        <div id="carTitleSpan" className="col-span-2">
          <div id="carTitle" className="flex flex-col">
            <h1 className=" text-primary text-lg font-semibold">
              {brand} {model}
            </h1>
            <p className="text-textSecondary text-base font-semibold">
              {carType}
            </p>
          </div>
        </div>

        {/*------------------------RENTAL PRICE--------------------*/}
        <div id="carRentalPrice">
          <h1 className=" text-textPrimary text-lg font-semibold">$299/day</h1>
        </div>

        {/*------------------------DRIVE--------------------*/}
        <div className="flex justify-center items-center gap-1 uppercase">
          <CarWheel size={25} className="text-textSecondary" />
          <p className="text-base text-textPrimary font-medium">{driveType}</p>
        </div>

        {/*------------------------FUEL ECONOMY--------------------*/}
        <div className="flex justify-center items-center gap-1">
          <Fuel size={25} className="text-textSecondary" />
          <p className="text-base text-textPrimary font-medium">
            {fuelEconomy} kpl
          </p>
        </div>

        {/*------------------------SEATS-------------------*/}
        <div className="flex justify-center items-center gap-1">
          <Seats size={25} className="text-textSecondary" />
          <p className="text-base text-textPrimary font-">{seats}</p>
        </div>

        <div className="col-span-3">
          <button className="text-lg bg-primary text-textPrimary px-5 py-3 rounded-md w-full hover:bg-secondary2 hover:text-primary transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
