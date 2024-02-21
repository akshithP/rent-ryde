"use client";
import React from "react";
import Image from "next/image";
import CarLogo from "../../public/icons/car-logo.svg";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

const Register = ({ switchToLogin }: any) => {
  return (
    <div>
      <div className="grid grid-col-1 p-4 gap-4 text-textPrimary">
        {/*----------------------------------LOGO CONTAINER------------------------------------ */}
        <div
          id="LogoContainer"
          className="flex gap-2 items-center justify-center"
        >
          <Image
            width={34}
            height={26}
            src={CarLogo}
            alt="Rent Ryde Car Logo"
          />
          <h1 className="text-primary font-extrabold text-2xl font-plusJakartaSans">
            RENT RYDE
          </h1>
        </div>

        {/*----------------------------------LOGO TITLE------------------------------------ */}
        <div id="LoginTitle">
          <h1 className="text-textPrimary md:text-2xl text-xl font-semibold">
            Register
          </h1>
        </div>

        {/*----------------------------------EMAIL--------------------------------- */}
        <div id="email" className="flex flex-col w-full">
          <h1>Email ID</h1>
          <input
            className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
            type="email"
          ></input>
        </div>

        {/*----------------------------------PASSWORD--------------------------------- */}
        <div id="password" className="flex flex-col w-full">
          <h1>Password</h1>
          <input
            className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
            type="password"
          ></input>
        </div>

        {/*----------------------------------CONFIRM PASSWORD--------------------------------- */}
        <div id="password" className="flex flex-col w-full">
          <h1>Confirm Password</h1>
          <input
            className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
            type="password"
          ></input>
        </div>

        {/*-------------------------------SIGN IN BUTTON------------------------------- */}
        <div id="sign-in" className="flex flex-col w-full">
          <button className="bg-primary rounded-lg py-2 text-secondary2 font-semibold hover:bg-primary2 hover:text-textPrimary transition-colors">
            Sign in
          </button>
        </div>

        {/*-------------------------------OR DIVIDED------------------------------- */}
        <div
          id="or-divider"
          className="flex items-center justify-center w-full"
        >
          <div className="flex-grow border-t border-borderCol"></div>
          <span className="flex-shrink mx-4 text-borderCol font-medium">
            OR
          </span>
          <div className="flex-grow border-t border-borderCol"></div>
        </div>

        {/*-------------------------------GOOGLE SIGN IN BUTTON------------------------------- */}
        <div id="sign-in" className="flex w-full">
          <button className="flex w-full gap-2 items-center px-2 justify-center bg-black rounded-lg py-2 text-textPrumary font-semibold hover:bg-primary2 hover:text-textPrimary transition-colors">
            <GoogleIcon size={20} />
            <h1>Sign in with Google</h1>
          </button>
        </div>

        {/*-------------------------------GOOGLE SIGN IN BUTTON------------------------------- */}
        <div className="flex items-center justify-center gap-1 font-normal">
          <span>Already have an account? </span>
          <span
            className="text-blue-400 underline hover:cursor-pointer hover:text-blue-200"
            onClick={switchToLogin}
          >
            Login Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
