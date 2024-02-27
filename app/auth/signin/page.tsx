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
      <div className="w-80 bg-secondary2 rounded-md px-5 py-5">
        <Login callbackUrl={searchParams.callbackUrl} />
      </div>
    </div>
  );
};

export default Signin;
