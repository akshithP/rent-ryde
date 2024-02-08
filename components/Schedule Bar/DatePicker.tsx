"use client";
import React, { useState, Fragment } from "react";
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Menu, Transition } from "@headlessui/react";
import { IoCalendar as Calendar } from "react-icons/io5";
import { FaLongArrowAltRight as RightArrow } from "react-icons/fa";

const DatePicker = ({ date, setDate }: any) => {
  return (
    <div id="mainContainer" className="w-auto	">
      <Menu
        as="div"
        className="relative flex-1 inline-block w-full text-center "
      >
        {/*----------------------------DROPDOWN MENU----------------------------- */}
        <Menu.Button className="inline-flex flex-col w-full justify-center rounded-md bg-secondary px-4 py-2 md:text-lg text-base font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <div className="flex gap-2 justify-start items-center text-textSecondary text-base">
            <Calendar className="text-primary" size={20} />
            <h1>Date</h1>
          </div>
          <div className="flex  gap-2 items-center">
            <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
            <RightArrow size={25} className="text-primary" />
            <div>
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd/MM/yyyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>

        {/*----------------------------DATE RANGE PICKER--------------------------- */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/*----------------------------CALENDAR------------------------ */}
          <Menu.Items className="absolute z-50 mt-2 p-2 w-full text-left text-md text-textPrimary origin-top-right divide-y divide-red-300 rounded-md bg-transparent focus:outline-none">
            <DateRange
              onChange={(item: any) => setDate([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={date}
              rangeColors={["#E35973"]}
              minDate={addDays(new Date(), 0)}
            />
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DatePicker;
