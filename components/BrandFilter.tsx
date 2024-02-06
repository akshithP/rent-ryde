"use client";
import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuItem } from "@mui/material";
import { IoIosArrowDown as DropDown } from "react-icons/io";

const BrandFilter = ({ allBrands }: any) => {
  console.log(allBrands);

  const uniqueBrands = [...new Set(allBrands)] as string[];

  return (
    <div className="w-auto">
      <Menu
        as="div"
        className="relative flex-1 inline-block w-full text-center"
      >
        {/*--------------------------DROPDOWN MENU BUTTON--------------------------- */}
        <Menu.Button className="flex bg-black text-textPrimary text-lg font-medium px-4 py-2 w-full justify-center rounded-full hover:bg-zinc-900 transition-colors focus:outline-none outline-none">
          <div className="flex gap-2 items-center">
            <h1>Brand</h1>
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
          <Menu.Items className="absolute z-10 mt-2 p-2 w-full text-left text-md text-textPrimary origin-top-right divide-y divide-red-300 rounded-md bg-secondary shadow-lg ring-2 ring-black/5 focus:outline-none outline-none">
            <div>
              {uniqueBrands.map((brand, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer px-2 py-1 hover:bg-primary text-md rounded-md"
                  >
                    {brand}
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

export default BrandFilter;
