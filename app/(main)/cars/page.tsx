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

interface ActiveFilters {
  brands: string[];
  car_types: string[];
  fuel_types: string[];
}

const Cars = () => {
  // Storing all cars data in useState
  const [data, setData] = useState([]);
  const [cars, setCars] = useState([]);

  // Schedule menu's useState values
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

  // Fetch all car data initially when the page is loaded
  useEffect(() => {
    fetch("/api/cars")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setCars(json);
      });
  }, []);

  // For Pagination
  const [currentPage, setCurrentpage] = useState(1);
  const cardsPerPage = 12;
  let lastIndex = currentPage * cardsPerPage;
  let firstIndex = lastIndex - cardsPerPage;
  let currentCarCards = cars.slice(firstIndex, lastIndex);
  let totalPages = Math.ceil(cars.length / cardsPerPage);

  useEffect(() => {
    lastIndex = currentPage * cardsPerPage;
    firstIndex = lastIndex - cardsPerPage;
    currentCarCards = cars.slice(firstIndex, lastIndex);
    totalPages = Math.ceil(cars.length / cardsPerPage);
  }, [cars, currentPage]);

  // All filter menus selected items are store in activeFilters
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    brands: [],
    car_types: [],
    fuel_types: [],
  });

  // Filters the displayed cars based on the chosen filters
  const applyFilters = () => {
    let result = data;

    if (activeFilters.brands.length) {
      result = result.filter((car: any) =>
        activeFilters.brands.includes(car.brand)
      );
    }

    if (activeFilters.car_types.length) {
      result = result.filter((car: any) =>
        activeFilters.car_types.includes(car.car_type)
      );
    }

    if (activeFilters.fuel_types.length) {
      result = result.filter((car: any) =>
        activeFilters.fuel_types.includes(car.fuel_type)
      );
    }

    setCars(result);
  };

  // Run the applyfilter function everytime new filter option is selected
  useEffect(() => {
    applyFilters();
  }, [data, activeFilters]);

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
                setActiveFilters={setActiveFilters}
              />
            </li>
            <li>
              <CarTypeFilter
                carTypes={(data as any[]).map((obj) => obj.car_type)}
                setActiveFilters={setActiveFilters}
              />
            </li>
            <li>
              <FuelTypeFilter
                fuelTypes={(data as any[]).map((obj) => obj.fuel_type)}
                setActiveFilters={setActiveFilters}
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