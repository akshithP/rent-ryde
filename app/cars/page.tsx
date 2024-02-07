"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";
import LocationMenu from "@/components/LocationMenu";
import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import BrandFilter from "@/components/BrandFilter";
import CarTypeFilter from "@/components/CarTypeFilter";
import FuelTypeFilter from "@/components/FuelTypeFilter";

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
      {/*---------------------------------------------MAIN CONTAINER----------------------------------------- */}
      <div
        id="mainContainer"
        className="flex flex-col mt-5 gap-5 p-5 justify-center items-center lg:max-w-7xl lg:mx-auto max-w-full bg-secondary2 rounded-md"
      >
        {/*--------------------------------SCHEDULE MENUS-------------------------------- */}
        <div
          id="menusContainer"
          className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4"
        >
          <div className="lg:col-span-1 sm:col-span-2">
            <LocationMenu />
          </div>
          <DatePicker />
          <TimePicker />
        </div>

        {/*--------------------------------FILTER MENUS-------------------------------- */}
        <div id="filterMenus" className="flex justify-start gap-3">
          <BrandFilter allBrands={(data as any[]).map((obj) => obj.brand)} />
          <CarTypeFilter
            carTypes={(data as any[]).map((obj) => obj.car_type)}
          />
          <FuelTypeFilter
            allTypes={(data as any[]).map((obj) => obj.fuel_type)}
          />
        </div>

        {/*--------------------------------CAR CARDS-------------------------------- */}
        {/* <div
          id="carCards"
          className="grid lg:grid-cols-3 sm:grid-cols-2 p-5 gap-5"
        >
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
