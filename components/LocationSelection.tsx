"use client";
import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { HiOutlineChevronUpDown as ChevUpDown } from "react-icons/hi2";
import { FaCheck as Check } from "react-icons/fa6";
import { IoLocationSharp as LocationPin } from "react-icons/io5";

// Predefined Addresses forr the user to choose from
const addresses = [
  "Clayton",
  "Melbourne CBD",
  "Preston",
  "St Kilda",
  "Tarneit",
];

const LocationSelection = () => {
  // Use state for selected address and query for user to search
  const [selectedAddress, setSelectedAddress] = useState();
  const [query, setQuery] = useState("");

  // Filters the addresses based on user input
  const filteredAddresses =
    query === ""
      ? addresses
      : addresses.filter((address) =>
          address
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="">
      {/*----------------------AUTO COMPLETE/ DROPDOWN MENU------------------- */}
      <Combobox value={selectedAddress} onChange={setSelectedAddress}>
        <div className="relative mt-1">
          <div className=" flex flex-coljustify-center items-center relative px-3 py-2 w-full cursor-default overflow-hidden rounded-lg bg-secondary text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <LocationPin size={30} className="text-primary" />

            {/*----------------------INPUT FIELD------------------- */}
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-lg leading-5 bg-secondary text-textPrimary focus:ring-0 focus:outline-none"
              placeholder="Select your city..."
              displayValue={selectedAddress}
              onChange={(event) => setQuery(event.target.value)}
            />

            {/*----------------------DROPDOWN BUTTON------------------- */}
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevUpDown
                size={25}
                className="h-5 w-5 text-gray-400 text-xl"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>

          {/*----------------------TRANSITION FOR THE OPTIONS------------------- */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {/*----------------------ALL ADDRESS OPTIONS------------------- */}
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondary py-1 text-base drop-shadow-xl ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredAddresses.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredAddresses.map((address) => (
                  <Combobox.Option
                    key={address}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary text-white" : "text-textPrimary"
                      }`
                    }
                    value={address}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {address}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-primary"
                            }`}
                          >
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default LocationSelection;
