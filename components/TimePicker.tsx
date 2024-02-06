"use client";
import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaClock as Clock } from "react-icons/fa6";
import { FaLongArrowAltRight as RightArrow } from "react-icons/fa";

// Timings avaialble
const timings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"];

const TimePicker = () => {
  // HOUR USE STAE
  const [time, setTime] = useState("9:00 AM");
  return (
    <div id="mainContainer" className="w-auto">
      <Menu
        as="div"
        className="relative flex-1 inline-block w-full text-center "
      >
        {/*----------------------------DROPDOWN MENU----------------------------- */}
        <Menu.Button className="inline-flex flex-col w-full justify-center rounded-md bg-secondary px-4 py-2 md:text-lg text-base font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <div className="flex gap-2 justify-start items-center text-textSecondary text-base">
            <Clock className="text-primary" size={20} />
            <h1>Time</h1>
          </div>
          <div className="flex ml-7 gap-2 items-center">
            <div>{time}</div>
            <RightArrow size={25} className="text-primary" />
            <div>{time}</div>
          </div>
        </Menu.Button>

        {/*----------------------------MENU OPTIONS--------------------------- */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/*----------------------------OPTIONS------------------------ */}
          <Menu.Items className="absolute z-10 mt-2 p-2 w-full text-left text-md text-textPrimary origin-top-right divide-y divide-red-300 rounded-md bg-secondary shadow-lg ring-2 ring-black/5 focus:outline-none outline-none">
            <div>
              {timings.map((time, index) => {
                return (
                  <div
                    onClick={() => setTime(time)}
                    key={index}
                    className="cursor-pointer px-2 py-1 hover:bg-primary text-md rounded-md"
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default TimePicker;
