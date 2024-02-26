"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CarLogo from "../../public/icons/car-logo.svg";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordStrength } from "check-password-strength";
import PasswordStrength from "./PasswordStrength";
import { registerUser } from "@/app/lib/actions/authActions";

// Form schema using zod
const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters") // Corrected the error message
      .max(50, "First name must be less than 50 characters")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special characters are allowed."), // Correct regex usage

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters") // Corrected the field name in the error message
      .max(50, "Last name must be less than 50 characters")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special characters are allowed."), // Correct regex usage

    email: z.string().email("Please enter a valid email address🙏"),

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
    message: "Both passwords do not match☹️!",
    path: ["confirmPassword"],
  });

const Register = ({ switchToLogin }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // State to store the password strength returned by the
  const [passStrength, setPassStrength] = useState(0);

  // Run use effect everytime password changes
  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);

  // Save user after registration
  const saveUser: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    const { confirmPassword, ...user } = data;
    try {
      const result = await registerUser(user);
      alert("Your account has been registered!");
    } catch {
      alert("Could not register");
    }
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

        {/*----------------------------------FIRST NAME--------------------------------- */}
        <div id="firstName" className="flex flex-col w-full">
          <h1>First Name</h1>
          <input
            {...register("firstName")}
            className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
            type="text"
            placeholder="John"
          ></input>
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        {/*----------------------------------LAST NAME--------------------------------- */}
        <div id="lastName" className="flex flex-col w-full">
          <h1>Last Name</h1>
          <input
            {...register("lastName")}
            className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
            type="text"
            placeholder="Doe"
          ></input>
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
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
          <PasswordStrength passStrength={passStrength} />
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
