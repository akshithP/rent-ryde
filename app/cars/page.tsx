"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";

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
    <div className="grid grid-cols-3 p-10 gap-5">
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
      {/* {data &&
        data?.map((car: any) => (
          <div
            key={car?._id}
            className="text-textPrimary font-semibold text-lg"
          >
            <p>Brand: {car?.brand}</p>
            <p>Model: {car?.model}</p>
            <p>Year: {car?.year}</p>
            <p>Km(s) per 1L: {car?.fuel_economy}km</p>
            <Image
              width={300}
              height={300}
              src={car?.image_url}
              alt="car image"
            />
          </div>
        ))} */}
    </div>
  );
};

export default Cars;
