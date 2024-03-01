"use client";
import React from "react";
import { IoMdSend as Send } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@chakra-ui/react";
import { submitContactMessage } from "@/app/lib/actions/authActions";

// Form schema of contact
const FormSchema = z.object({
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

  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(10, "Please enter a valid phone number"),

  message: z
    .string()
    .min(10, "Message must be at least 25 characters")
    .max(100, "Message must be maximum 500 characters"),
});

const ContactForm = () => {
  // Functions from react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Setup toast
  const toast = useToast();

  // Save Message after submitting
  const submitMessage: SubmitHandler<z.infer<typeof FormSchema>> = async (
    data
  ) => {
    try {
      const result = await submitContactMessage(data);
      toast({
        title: "Message Sent!",
        description: "Please check your email for a copy of message",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitMessage)}
      id="mainContactForm"
      className="grid md:grid-cols-2 grid-cols-1 p-10 md:gap-10 gap-5"
    >
      {/*-----------------FIRST NAME----------------*/}
      <div id="firstName" className="flex flex-col gap-2">
        <p className="text-lg font-normal text-primary">First Name</p>
        <input
          {...register("firstName")}
          type="text"
          id="firstName"
          placeholder="Enter your first name..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      {/*-----------------LAST NAME----------------*/}
      <div id="lastName" className="flex flex-col gap-2">
        <p className="text-lg font-normal text-primary">Last Name</p>
        <input
          {...register("lastName")}
          type="text"
          id="lastName"
          placeholder="Enter your last name..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      {/*-----------------EMAIL ID----------------*/}
      <div id="email" className="flex flex-col gap-2">
        <p className="text-lg font-normal text-primary">Email ID</p>
        <input
          {...register("email")}
          type="email"
          id="email"
          placeholder="Enter your email..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/*-----------------PHONE NUMBER----------------*/}
      <div id="phone" className="flex flex-col gap-2">
        <p className="text-lg font-normal text-primary">Phone Number</p>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          placeholder="Enter your number..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      {/*------------------------------------WRITE MESSAGE----------------------------------*/}
      <div className="flex flex-col gap-2 md:col-span-2">
        <p className="text-lg font-normal text-primary">Message</p>
        <input
          {...register("message")}
          type="text"
          id="message"
          placeholder="Write your message here..."
          className="p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/*------------------------------------SEND BUTTON----------------------------------*/}
      <div className="flex flex-col gap-2 md:col-start-2 md:col-span-1">
        <button
          type="submit"
          className="flex gap-2 mt-5 justify-center items-center bg-primary text-secondary2 font-bold px-4 py-3 rounded hover:bg-black hover:text-textPrimary transition-colors hover:scale-105 transition-all'"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send className="text-xl font-semibold" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
