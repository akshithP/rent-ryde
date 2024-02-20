"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, Button } from "@chakra-ui/react";
import { IoCloseOutline as Clear } from "react-icons/io5";

const ClearFilters = ({ activeFilters, setActiveFilters }: any) => {
  // Clear out the filters by setting activeFilters as empty
  const handleClear = () => {
    setActiveFilters({ ["brands"]: [], ["car_types"]: [], ["fuel_types"]: [] });
  };

  return (
    <Menu closeOnSelect={false}>
      {/*-----------------------MENU BUTTON---------------------------*/}
      <MenuButton
        as={Button}
        backgroundColor="#C10000"
        color="white"
        _hover={{ backgroundColor: "#800101" }}
        borderRadius="full"
        onClick={handleClear}
      >
        <div className="flex gap-2 items-center">
          <h1>Clear Filters</h1>
          <Clear size={25} className="text-textPrimary" />
        </div>
      </MenuButton>
    </Menu>
  );
};

export default ClearFilters;
