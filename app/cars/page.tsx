"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";
import LocationSelection from "@/components/LocationSelection";

const Cars = () => {
  // Storing all cars data in useState
  const [data, setData] = useState([]);

  // Fecth the all car data initially when the page is loaded
  useEffect(() => {
    fetch("/api/cars")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <div
        id="mainContainer"
        className="flex flex-col mt-5 gap-5 p-5 items-center lg:max-w-7xl lg:mx-auto max-w-full bg-secondary2 rounded-md"
      >
        <LocationSelection />
        {/* <div id="carCards" className="grid grid-cols-3 p-10 gap-5">
          {data &&
            data?.map((car: any) => (
              <CarCard
                key={car?._id}
                imageURL={car?.image_url}
                brand={car?.brand}
                model={car?.model}
                carType={car?.car_type}
                driveType={car?.drive}
                fuelEconomy={car?.fuel_economy}
                seats={car?.seats}
              ></CarCard>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default Cars;
