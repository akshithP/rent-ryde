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
import { useToast } from "@chakra-ui/react";
import { IoEye as EyeOn } from "react-icons/io5";
import { IoEyeOff as EyeOff } from "react-icons/io5";

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

  // Toast
  const toast = useToast();

  // Hnalde on submit
  const submitReq: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    try {
      const result = await resetUserPassword(params.jwt, data.confirmPassword);
      if (result === "success") {
        toast({
          title: "Success!",
          description: "Your password has been reset",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
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

    // After registering successfully, redirect user to sign in page
    router.push("/auth/signin");
  };

  // Visibility of password field
  const [showPassword, setShowPassword] = useState(false);

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
            <div className="flex items-center rounded-lg border-2 border-borderCol focus:outline-none">
              <input
                {...register("password")}
                className="w-64 bg-transparent px-2 py-1 focus:outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="********"
              ></input>
              {showPassword ? (
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2 hover:cursor-pointer"
                >
                  <EyeOff className="hover:text-primary " size={20} />
                </div>
              ) : (
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2 hover:cursor-pointer"
                >
                  <EyeOn className="hover:text-primary " size={20} />
                </div>
              )}
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <PasswordStrength passStrength={passStrength} />
          </div>

          {/*----------------------------------CONFIRM PASSWORD--------------------------------- */}
          <div id="password" className="flex flex-col w-full">
            <h1>Confirm Password</h1>
            <div className="flex items-center rounded-lg border-2 border-borderCol focus:outline-none">
              <input
                {...register("confirmPassword")}
                className="w-64 bg-transparent px-2 py-1 focus:outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="********"
              ></input>
              {showPassword ? (
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2 hover:cursor-pointer"
                >
                  <EyeOff className="hover:text-primary " size={20} />
                </div>
              ) : (
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2 hover:cursor-pointer"
                >
                  <EyeOn className="hover:text-primary " size={20} />
                </div>
              )}
            </div>
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
