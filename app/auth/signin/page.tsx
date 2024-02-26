"use client";
import React, { useState } from "react";
import Login from "@/components/Auth Form/Login";

interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

const Signin = ({ searchParams }: Props) => {
  console.log(searchParams);
  return (
    <div className="flex shadow-xl items-center justify-center bg-gradient-to-b from-secondary to-primary h-screen ">
      <div className="md:w-96 md:h-[600px] w-80 h-[520px] bg-secondary2 rounded-md px-5 py-5">
        <Login callbackUrl={searchParams.callbackUrl} />
      </div>
    </div>
  );
};

export default Signin;
