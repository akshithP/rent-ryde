"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CarLogo from "../../../../public/icons/car-logo.svg";
import Image from "next/image";
import { passwordStrength } from "check-password-strength";
import PasswordStrength from "@/components/Auth Form/PasswordStrength";
import { resetUserPassword } from "@/app/lib/actions/authActions";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    jwt: string;
  };
}

// For form validation
const FormSchema = z
  .object({
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

const ResetPassword = ({ params }: Props) => {
  // Setup react hook form, for validation
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // State to store the password strength returned by the
  const [passStrength, setPassStrength] = useState(0);

  // Run use effect everytime password changes
  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);

  // Use router to redirect the user to main page after successful login
  const router = useRouter();

  // Hnalde on submit
  const submitReq: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    try {
      const result = await resetUserPassword(params.jwt, data.confirmPassword);
      if (result === "success") {
        alert("Your password has been reset");
      }
    } catch {
      alert("Something went wrong");
    }

    // After registering successfully, redirect user to sign in page
    router.push("/auth/signin");
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
              {isSubmitting ? "Resetting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
