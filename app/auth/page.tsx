import React from "react";
import Login from "@/components/Auth Form/Login";
import Register from "@/components/Auth Form/Register";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-secondary to-primary h-screen ">
      <div className="md:w-96 md:h-[560px] w-80 h-[520px] bg-secondary2 rounded-md px-5 py-5">
        <Login  />
      </div>
    </div>
  );
};

export default page;
