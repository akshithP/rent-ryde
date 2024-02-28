"use client";
import React, { useState } from "react";
import Login from "@/components/Auth Form/Login";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import CarLogo from "../../../public/icons/car-logo.svg";
import { forgotPassword } from "@/app/lib/actions/authActions";
import { useToast } from "@chakra-ui/react";

// For form validation
const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address🙏"),
});

const ForgotPassword = () => {
  // Setup react hook form, for validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Toast
  const toast = useToast();

  // Handle form submission
  const submitReq: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    try {
      const result = await forgotPassword(data.email);
      toast({
        title: "Email sent!",
        description: "Please check your email to reset your password",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      reset(); //reset the form fields
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="flex shadow-xl items-center justify-center bg-gradient-to-b from-secondary to-primary h-screen ">
      <div className="w-80 bg-secondary2 rounded-md px-5 py-5">
        <form
          onSubmit={handleSubmit(submitReq)}
          className="grid grid-cols-1 p-4 gap-4 text-textPrimary"
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
              Forgot Password
            </h1>
          </div>

          {/*----------------------------------EMAIL--------------------------------- */}
          <div id="email" className="flex flex-col w-full">
            <h1>Email ID</h1>
            <input
              {...register("email")}
              className="bg-transparent px-2 py-1 rounded-lg border-2 border-borderCol focus:outline-none"
              placeholder="example@example.com"
              type="email"
            ></input>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/*-------------------------------SIGN IN BUTTON------------------------------- */}
          <div id="sign-in" className="flex flex-col w-full">
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-primary rounded-lg py-2 text-secondary2 font-semibold hover:bg-primary2 hover:text-textPrimary transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
