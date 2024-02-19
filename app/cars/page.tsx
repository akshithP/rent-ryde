"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";
import LocationMenu from "@/components/Schedule Bar/LocationMenu";
import DatePicker from "@/components/Schedule Bar/DatePicker";
import TimePicker from "@/components/Schedule Bar/TimePicker";
import BrandFilter from "@/components/Filter Menus/BrandFilter";
import CarTypeFilter from "@/components/Filter Menus/CarTypeFilter";
import FuelTypeFilter from "@/components/Filter Menus/FuelTypeFilter";
import MobileScheduleBar from "@/components/MobileScheduleBar";
import { useMediaQuery } from "react-responsive";
import CarsPagination from "@/components/CarsPagination";
import Pagination from "@mui/material/Pagination";

const Cars = () => {
  // Storing all cars data in useState
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("Set Location...");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);
  const [time, setTime] = useState("9:00 AM");

  // Use media query to determine screen size
  const isMobile = useMediaQuery({ maxWidth: 640 });

  // Fecth the all car data initially when the page is loaded
  useEffect(() => {
    fetch("/api/cars")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // For Pagination
  const [currentPage, setCurrentpage] = useState(1);
  const cardsPerPage = 12;
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currentCarCards = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / cardsPerPage);

  return (
    <div>
      {/*---------------------------------------------MAIN CONTAINER----------------------------------------- */}
      <div
        id="mainContainer"
        className="grid grid-cols-3 mt-5 gap-5 p-5 justify-center items-center lg:max-w-7xl lg:mx-auto  bg-secondary2 rounded-md"
      >
        {/*--------------------------------SCHEDULE MENUS-------------------------------- */}
        <div className="col-span-3 w-full">
          {isMobile ? (
            <MobileScheduleBar
              selectedLocation={location}
              setSelectedLocation={setLocation}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
          ) : (
            <div
              id="menusContainer"
              className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 w-full"
            >
              <div className="lg:col-span-1 sm:col-span-2">
                <LocationMenu
                  selectedLocation={location}
                  setSelectedLocation={setLocation}
                />
              </div>
              <DatePicker date={date} setDate={setDate} />
              <TimePicker time={time} setTime={setTime} />
            </div>
          )}
        </div>

        {/*--------------------------------FILTER MENUS-------------------------------- */}
        <div id="filterMenus" className="col-span-3">
          <ul className="flex flex-row overflow-x-auto overflow-hidden gap-3 justify-items-center">
            <li>
              <BrandFilter
                allBrands={(data as any[]).map((obj) => obj.brand)}
              />
            </li>
            <li>
              <CarTypeFilter
                carTypes={(data as any[]).map((obj) => obj.car_type)}
              />
            </li>
            <li>
              <FuelTypeFilter
                fuelTypes={(data as any[]).map((obj) => obj.fuel_type)}
              />
            </li>
          </ul>
        </div>

        {/*--------------------------------CAR CARDS-------------------------------- */}

        <div
          id="carCards"
          className="col-span-3 grid lg:grid-cols-3 sm:grid-cols-2 p-5 gap-5"
        >
          {currentCarCards &&
            currentCarCards?.map((car: any) => (
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
        </div>
        {/*--------------------------------PAGINATION-------------------------------- */}
        <div className="col-span-3 place-items-center">
          <CarsPagination
            totalPages={totalPages}
            setCurrentPage={setCurrentpage}
          />
        </div>
      </div>
    </div>
  );
};

export default Cars;
