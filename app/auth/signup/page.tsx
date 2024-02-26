"use client";
import React, { useState } from "react";
import Register from "@/components/Auth Form/Register";

const Signup = () => {
  return (
    <div className="flex shadow-xl items-center justify-center bg-gradient-to-b from-secondary to-primary h-screen ">
      <div className="md:w-96 md:h-[700px] w-80 h-[520px] bg-secondary2 rounded-md px-5 py-5">
        <Register />
      </div>
    </div>
  );
};

export default Signup;
