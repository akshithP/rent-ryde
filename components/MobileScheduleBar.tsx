"use client";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdLocationOn as LocationPin } from "react-icons/md";
import { IoCalendar as Calendar } from "react-icons/io5";
import { FaClock as Clock } from "react-icons/fa6";
import LocationMenu from "@/components/Schedule Bar/LocationMenu";
import DatePicker from "@/components/Schedule Bar/DatePicker";
import TimePicker from "@/components/Schedule Bar/TimePicker";
import { FaLongArrowAltRight as RightArrow } from "react-icons/fa";
import { format, addDays } from "date-fns";

const MobileScheduleBar = ({
  selectedLocation,
  setSelectedLocation,
  date,
  setDate,
  time,
  setTime,
}: any) => {
  // use state for the modal
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedLocation, setSelectedLocation] = useState("Set Location...");

  // Open modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Close mmodal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-secondary px-3 py-2 rounded-lg hover:bg-black/30">
      <div id="locationContainer">
        {/*----------------------------MENU CONTAINER-------------------------- */}
        <div
          id="allMenusContainer"
          onClick={openModal}
          className="grid grid-cols-2 gap-2 cursor-pointer"
        >
          {/*----------------------------------------------LOCATION--------------------------------------------- */}
          <div
            id="locationBar"
            className="flex justify-start items-center gap-1 col-span-2"
          >
            <LocationPin size={20} className="text-primary" />
            <h1 className="text-textPrimary text-base font-medium">
              {selectedLocation}
            </h1>
          </div>

          {/*----------------------------------------------DATES--------------------------------------------- */}
          <div className="flex justify-start items-center gap-1">
            <Calendar size={18} className="text-primary" />
            <div className="flex gap-2 items-center text-textPrimary">
              <div>{format(date[0].startDate, "dd/MM")}</div>
              <div className="text-primary font-semibold">to</div>
              <div>
                {date[0].endDate ? (
                  <div>{format(date[0].endDate, "dd/MM")}</div>
                ) : (
                  <div>{format(date[0].startDate, "dd/MM")}</div>
                )}
              </div>
            </div>
          </div>

          {/*----------------------------------------------TIME--------------------------------------------- */}
          <div className="flex justify-start items-center gap-1">
            <Clock size={18} className="text-primary" />
            <div className="flex gap-2 items-center text-textPrimary">
              <div>{time}...</div>
            </div>
          </div>
        </div>

        {/*---------------------TRANSITION------------------ */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/55" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full h-[600px]	 max-w-md transform overflow-hidden rounded-2xl bg-secondary2 p-6 text-left align-middle shadow-xl transition-all">
                    <div className=" flex flex-col gap-2">
                      <LocationMenu
                        selectedLocation={selectedLocation}
                        setSelectedLocation={setSelectedLocation}
                      />
                      <DatePicker date={date} setDate={setDate} />
                      <TimePicker time={time} setTime={setTime} />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default MobileScheduleBar;
