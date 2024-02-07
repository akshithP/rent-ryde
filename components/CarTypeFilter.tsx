"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { IoIosArrowDown as DropDown } from "react-icons/io";

const CarTypeFilter2 = ({ carTypes }: any) => {
  // Ensuring the filter options are unique and sorted beforehand
  const uniqueTypes = [...new Set(carTypes)] as string[];
  uniqueTypes.sort();

  // Use state for the selected types
  const [selectedTypes, setSelectedTypes] = useState<string | string[]>([]);

  const handleTypeSelectionChange = (selectedValues: string | string[]) => {
    setSelectedTypes(selectedValues);
  };

  return (
    <Menu closeOnSelect={false}>
      {/*-----------------------MENU BUTTON---------------------------*/}
      <MenuButton
        as={Button}
        backgroundColor="black"
        color="white"
        _hover={{ backgroundColor: "#C10000" }}
        borderRadius="full"
      >
        <div className="flex gap-2 items-center">
          <h1>Car Type</h1>
          <DropDown size={20} className="text-textPrimary" />
        </div>
      </MenuButton>

      {/*-----------------------MENU LIST ITEMS-------------------------*/}
      <MenuList minWidth="240px" backgroundColor="black">
        <MenuOptionGroup
          type="checkbox"
          backgroundColor="black"
          onChange={handleTypeSelectionChange}
        >
          {uniqueTypes.map((type, index) => (
            <MenuItemOption
              key={index}
              value={type}
              backgroundColor="black"
              color="white"
              _hover={{ backgroundColor: "#C10000" }}
            >
              {type}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default CarTypeFilter2;
