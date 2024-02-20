"use client";
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { IoIosArrowDown as DropDown } from "react-icons/io";

const BrandFilter = ({ allBrands, allCars, setCars, data }: any) => {
  // Ensuring the filter options are unique and sorted beforehand
  const uniqueTypes = [...new Set(allBrands)] as string[];
  uniqueTypes.sort();

  // Use state for the selected types
  const [selectedBrands, setSelectedBrands] = useState<string | string[]>([]);

  // Whenever new brand is selected
  const handleTypeSelectionChange = (selectedValues: string | string[]) => {
    setSelectedBrands(selectedValues);
  };
  
  // Run the filter function everytime new brand is selected
  useEffect(() => {
    const filteredBrands = data.filter(
      (car: any) =>
        selectedBrands.length == 0 || selectedBrands.includes(car.brand)
    );
    setCars(filteredBrands);
  }, [data, selectedBrands, setCars]);

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
          <h1>Brand</h1>
          <DropDown size={20} className="text-textPrimary" />
        </div>
      </MenuButton>

      {/*-----------------------MENU LIST ITEMS-------------------------*/}
      <MenuList
        minWidth="240px"
        backgroundColor="black"
        overflowY="auto"
        maxHeight="300px"
        sx={{
          "&::-webkit-scrollbar": {
            width: "16px",
            borderRadius: "8px",
            backgroundColor: "black",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `#C10000`,
            borderRadius: "8px",
          },
          // Add more styling here as needed
        }}
      >
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

export default BrandFilter;
