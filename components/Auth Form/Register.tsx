"use client";
import React from "react";
import Image from "next/image";
import CarLogo from "../../public/icons/car-logo.svg";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schema using zod
const FormSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must less than 50 characters"),

    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must less than 50 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Both passwords do not match!",
    path: ["password", "confirmPassword"],
  });

const Register = ({ switchToLogin }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Save user after registration
  const saveUser: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(saveUser)}
        className="grid grid-col-1 p-4 gap-4 text-textPrimary"
      >
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
            {...register("email")}
            className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
            type="email"
            placeholder="example@example.com"
          ></input>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/*----------------------------------PASSWORD--------------------------------- */}
        <div id="password" className="flex flex-col w-full">
          <h1>Password</h1>
          <input
            {...register("password")}
            className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
            type="password"
            placeholder="********"
          ></input>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/*----------------------------------CONFIRM PASSWORD--------------------------------- */}
        <div id="password" className="flex flex-col w-full">
          <h1>Confirm Password</h1>
          <input
            {...register("confirmPassword")}
            className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
            type="password"
            placeholder="********"
          ></input>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/*-------------------------------SUBMIT BUTTON------------------------------- */}
        <div id="Submit" className="flex flex-col w-full">
          <button
            type="submit"
            className="bg-primary rounded-lg py-2 text-secondary2 font-semibold hover:bg-primary2 hover:text-textPrimary transition-colors"
          >
            Submit
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
      </form>
    </div>
  );
};

export default Register;
