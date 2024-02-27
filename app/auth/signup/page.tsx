"use client";
import React from "react";
import Register from "@/components/Auth Form/Register";

const Signup = () => {
  return (
    <div className="flex shadow-xl justify-center bg-gradient-to-b from-secondary to-primary h-screen ">
      <div className="w-96 bg-secondary2 rounded-md px-5 py-5">
        <Register />
      </div>
    </div>
  );
};

export default Signup;
