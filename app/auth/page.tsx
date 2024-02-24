"use client";
import React, { useState } from "react";
import Login from "@/components/Auth Form/Login";
import Register from "@/components/Auth Form/Register";

const Auth = () => {
  // State to handle whether to show login or regiser
  const [activeForm, setActiveForm] = useState("register");

  // Handle form change
  const switchToLogin = () => {
    setActiveForm("login");
  };
  const switchToRegiser = () => {
    setActiveForm("register");
  };

  return (
    <div className="flex shadow-xl items-center justify-center bg-gradient-to-b from-secondary to-primary h-screen ">
      <div className="md:w-96 md:h-[660px] w-80 h-[520px] bg-secondary2 rounded-md px-5 py-5">
        {activeForm === "register" ? (
          <Register switchToLogin={switchToLogin} />
        ) : (
          <Login switchToRegiser={switchToRegiser} />
        )}
      </div>
    </div>
  );
};

export default Auth;
