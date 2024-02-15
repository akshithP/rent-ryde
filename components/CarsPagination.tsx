"use client";
import React from "react";

interface carPaginationProps {
  totalCars: number;
  cardsPerPage: number;
  setCurrentPage: any;
  currentPage: number;
}

const CarsPagination = ({
  totalCars,
  cardsPerPage,
  setCurrentPage,
  currentPage,
}: carPaginationProps) => {
  // For total number of pages
  const pages = [];

  // Fill the array with page numbers
  for (let i = 1; i <= Math.ceil(totalCars / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap font-medium text-textPrimary bg-primary mb-3">
      <button
        className="px-3 py-2 outline-none hover:bg-secondary transition-colors"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={` px-3 py-2  outline-none hover:bg-secondary transition-colors ${
              currentPage == page ? "bg-secondary" : ""
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        className="px-3 py-2 outline-none hover:bg-secondary transition-colors"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default CarsPagination;
