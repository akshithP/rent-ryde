import React from "react";
import { ImSpinner9 as Spinner } from "react-icons/im";

const loading = () => {
  return (
    <div className="animate-spin text-2xl text-primary mt-10 text-center flex justify-center items-center">
      <Spinner size={40}></Spinner>
    </div>
  );
};

export default loading;
