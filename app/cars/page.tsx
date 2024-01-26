"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

async function getData() {
  const response = await fetch("http://localhost:3000/api/cars", {
    cache: "no-store",
  });
  if (!response.ok) return notFound();
  return response.json();
}

const Cars = () => {
  // const data = await getData();
  // console.log("PRINTING DATA FROM CAR PAGE");
  // console.log(data);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/cars")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log("PRINTING DATA FROM CAR PAGE");
  console.log(data);

  return (
    <div className="grid grid-cols-5 p-10">
      {data &&
        data?.map((car: any) => (
          <div key={car?._id} className="text-textPrimary font-semibold text-lg">
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
        ))}
    </div>
  );
};

export default Cars;
