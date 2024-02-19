import React from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowForward as Next } from "react-icons/io";
import { IoIosArrowBack as Prev } from "react-icons/io";

interface props {
  totalPages: number;
  cardsPerPage: number;
  totalCards: number;
  setCurrentPage: any;
}

const CarsPagination = ({
  totalPages,
  cardsPerPage,
  totalCards,
  setCurrentPage,
}: props) => {
  // Handle when page is clicked
  const handleOnChange = (event: any) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className="text-textPrimary font-medium max-w-full">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className="flex rounded-lg gap-1 items-center justify-center bg-black px-2 py-1 outline-none border-none">
            <h1>Next</h1>
            <Next size={20} />
          </span>
        }
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        pageCount={totalPages}
        previousLabel={
          <span className="flex rounded-lg  gap-1 items-center justify-center bg-black px-2 py-1 outline-none">
            <Prev size={20} />
            <h1>Prev</h1>
          </span>
        }
        breakClassName='3'
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center gap-3 text-textPrimary font-medium bg-grey "
        pageClassName="px-3 py-1 rounded-lg hover:bg-primary2 cursor:pointer"
        onPageChange={handleOnChange}
        activeClassName="bg-primary2 border-none outline-none focus:outline-none"
      />
    </div>
  );
};

export default CarsPagination;
