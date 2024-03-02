import React from "react";
import Image from "next/image";
import { IoClose as Close } from "react-icons/io5";
import { FaCar as CarBody } from "react-icons/fa";
import { IoCalendar as Calendar } from "react-icons/io5";
import { BsFillFuelPumpFill as FuelType } from "react-icons/bs";
import { GiCarWheel as Wheel } from "react-icons/gi";
import { PiGasCanFill as FuelEconomy } from "react-icons/pi";
import { IoPeople as Seats } from "react-icons/io5";
import LocationMenu from "./Schedule Bar/LocationMenu";
import DatePicker from "./Schedule Bar/DatePicker";
import TimePicker from "./Schedule Bar/TimePicker";
import MobileScheduleBar from "./MobileScheduleBar";

interface Props {
  brand: string;
  model: string;
  imageUrl: string;
  carType: string;
  year: string;
  fuelType: string;
  driveType: string;
  economy: number;
  seats: number;
  driveRange: number;
  isOpen: boolean;
  selectedLocation: any;
  setSelectedLocation: any;
  date: any;
  setDate: any;
  time: any;
  setTime: any;
  onClose: () => void;
}

const CarModal = (carProps: Props) => {
  // If model is not open
  if (!carProps.isOpen) return null;

  // Otherwise return the content
  return (
    <div
      onClick={carProps.onClose}
      className="fixed inset-0 bg-black bg-opacity-70 z-30 flex justify-center items-center"
    >
      <div className="bg-secondary lg:max-w-7xl lg:mx-auto p-4 rounded-md w-4/5">
        <form
          onClick={(e) => e.stopPropagation()}
          className="grid grid-cols-5 p-4 gap-4"
        >
          {/*------------------------------------CAR BRAND & MODEL---------------------------------------- */}
          <div
            id="carTitle"
            className="flex text-primary items-center sm:text-3xl text-xl font-semibold col-span-4 text-center"
          >
            <h1>
              {carProps.brand} {carProps.model}
            </h1>
          </div>

          {/*------------------------------------Close---------------------------------------- */}
          <div id="closeButton" className="flex justify-end col-span-1">
            <button onClick={carProps.onClose}>
              <Close
                size={40}
                className="hover:text-primary text-textSecondary transition-colors "
              />
            </button>
          </div>

          {/*------------------------------------IMAGE---------------------------------------- */}
          <div id="carImage" className="md:col-span-3 col-span-5 ">
            <Image
              width={700}
              height={604}
              src={carProps.imageUrl}
              alt={`Image of ${carProps.brand} ${carProps.model}`}
              className="rounded-lg object-cover"
            />
          </div>

          {/*------------------------------------SCHEDULER---------------------------------------- */}
          <div
            id="carScheduler"
            className="bg-secondary2 rounded-lg md:col-span-2 col-span-5"
          >
            <div className="flex flex-col p-4 gap-6 z-50">
              <h1 className="text-lg font-semibold text-textPrimary">
                Confirm Details
              </h1>
              <MobileScheduleBar
                selectedLocation={carProps.selectedLocation}
                setSelectedLocation={carProps.setSelectedLocation}
                date={carProps.date}
                setDate={carProps.setDate}
                time={carProps.time}
                setTime={carProps.setTime}
                carModal={true}
              />
              {/* <LocationMenu
                selectedLocation={carProps.selectedLocation}
                setSelectedLocation={carProps.setSelectedLocation}
              />
              <DatePicker date={carProps.date} setDate={carProps.setDate} />
              <TimePicker time={carProps.time} setTime={carProps.setTime} /> */}
            </div>
          </div>

          {/*------------------------------------PROPERTIES---------------------------------------- */}
          <div id="carProperties" className="col-span-5">
            <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 bg-secondary2 p-3 rounded-md">
              {/**************************       BODY TYPE       ********************************* */}
              <div id="bodyType" className="grid grid-cols-2 gap-x-2">
                <div className="flex items-center justify-end">
                  <CarBody size={30} className="text-primary text-right" />
                </div>
                <div className="flex items-center">
                  <h1 className="text-textPrimary text-base">
                    {carProps.carType}
                  </h1>
                </div>
                <h1 className="text-borderCol text-sm  col-start-2">
                  Body Type
                </h1>
              </div>

              {/**************************       YEAR       ********************************* */}
              <div id="year" className="grid grid-cols-2 gap-x-2">
                <div className="flex items-center justify-end">
                  <Calendar size={30} className="text-primary text-right" />
                </div>
                <div className="flex items-center">
                  <h1 className="text-textPrimary text-base">
                    {carProps.year}
                  </h1>
                </div>
                <h1 className="text-borderCol text-sm  col-start-2">Year</h1>
              </div>

              {/**************************       FUEL TYPE       ********************************* */}
              <div id="fuelType" className="grid grid-cols-2 gap-x-2">
                <div className="flex items-center justify-end">
                  <FuelType size={30} className="text-primary text-right" />
                </div>
                <div className="flex items-center">
                  <h1 className="text-textPrimary text-base">
                    {carProps.fuelType.charAt(0).toUpperCase() +
                      carProps.fuelType.slice(1)}
                  </h1>
                </div>
                <h1 className="text-borderCol text-sm  col-start-2">
                  Fuel Type
                </h1>
              </div>

              {/**************************       DRIVE TYPE       ********************************* */}
              <div id="driveType" className="grid grid-cols-2 gap-x-2">
                <div className="flex items-center justify-end">
                  <Wheel size={30} className="text-primary text-right" />
                </div>
                <div className="flex items-center">
                  <h1 className="text-textPrimary text-base">
                    {carProps.driveType}
                  </h1>
                </div>
                <h1 className="text-borderCol text-sm  col-start-2">Drive</h1>
              </div>

              {/**************************       FUEL ECONOMY       ********************************* */}
              <div id="driveType" className="grid grid-cols-2 gap-x-2">
                <div className="flex items-center justify-end">
                  <FuelEconomy size={30} className="text-primary text-right" />
                </div>
                <div className="flex items-center">
                  <h1 className="text-textPrimary text-base">
                    {carProps.economy} kpl
                  </h1>
                </div>
                <h1 className="text-borderCol text-sm  col-start-2">Economy</h1>
              </div>

              {/**************************       SEATS       ********************************* */}
              <div id="seats" className="grid grid-cols-2 gap-x-2">
                <div className="flex items-center justify-end">
                  <Seats size={30} className="text-primary text-right" />
                </div>
                <div className="flex items-center">
                  <h1 className="text-textPrimary text-base">
                    {carProps.seats} people
                  </h1>
                </div>
                <h1 className="text-borderCol text-sm  col-start-2">Seats</h1>
              </div>
            </div>
          </div>

          {/*------------------------------------SAVE BTN---------------------------------------- */}
          <div
            id="saveBtn"
            className="col-span-5 items-center justify-center w-full"
          >
            <button className="w-full bg-primary text-textPrimary px-5 py-2 rounded-md text-lg hover:bg-black transition-colors">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarModal;
