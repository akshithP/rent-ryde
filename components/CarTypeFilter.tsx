"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown as DropDown } from "react-icons/io";

const CarTypeFilter = ({ allTypes }: any) => {
  console.log(allTypes);

  const uniqueTypes = [...new Set(allTypes)] as string[];
  uniqueTypes.sort();

  return (
    <div className="w-auto">
      <Menu
        as="div"
        className="relative flex-1 inline-block w-full text-center"
      >
        {/*--------------------------DROPDOWN MENU BUTTON--------------------------- */}
        <Menu.Button className="flex bg-black text-textPrimary text-lg font-medium px-4 py-2 w-full justify-center rounded-full hover:bg-zinc-900 transition-colors focus:outline-none outline-none">
          <div className="flex gap-2 items-center">
            <h1>Car Type</h1>
            <DropDown size={20} className="text-textPrimary" />
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
          <Menu.Items className="absolute z-10 mt-2 p-2 w-full text-left text-md text-textPrimary origin-top-right divide-y divide-red-300 rounded-md bg-black shadow-lg ring-2 ring-black/5 focus:outline-none outline-none">
            <div>
              {uniqueTypes.map((type, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer px-2 py-1 hover:bg-primary text-md rounded-md"
                  >
                    {type}
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

export default CarTypeFilter;
