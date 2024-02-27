"use client";
import React from "react";
import Image from "next/image";
import CarLogo from "../../public/icons/car-logo.svg";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import Link from "next/link";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  callbackUrl?: string; //When user signs in successfully, redirect the user to callbackUrl
}

// For form validation
const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address🙏"),

  password: z.string({
    required_error: "Please enter a valid password",
  }),
});

const Login = (props: Props) => {
  // Use router to redirect the user to main page after successful login
  const router = useRouter();

  // Form schema
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    const result = await signIn("credentials", {
      // Specify the provider which is credentials (defined in route.js)
      redirect: false, // So it doesn't refresh the page and redirect back to call back url.
      username: data.email,
      password: data.password,
    });

    // Alert if the user info entered are not valid
    if (!result?.ok) {
      alert(result?.error);
      return;
    }

    // If the prop exist then push it otherwise back to home page
    router.push(props.callbackUrl ? props.callbackUrl : "/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            Login
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

        {/*-------------------------------SIGN IN BUTTON------------------------------- */}
        <div id="sign-in" className="flex flex-col w-full">
          <button
            type="submit"
            className="bg-primary rounded-lg py-2 text-secondary2 font-semibold hover:bg-primary2 hover:text-textPrimary transition-colors"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </div>

        {/*----------------------------------PASSWORD--------------------------------- */}
        <div id="forgot" className="flex flex-col w-full">
          <Link
            href={"/auth/forgotPassword"}
            className="text-base text-blue-400 underline hover:text-blue-200"
          >
            Forgot your Password?
          </Link>
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

        {/*-------------------------------DONT HAVE ACCOUNT BUTTON------------------------------- */}
        <div className="flex items-center justify-center gap-1 font-normal">
          <Link href={"/auth/signup"}>
            <span className="hover:underline hover:text-blue-200">
              Don&apos;t have an account?
            </span>
          </Link>
        </div>

        {/*-------------------------------CONTINUE AS GUEST BUTTON------------------------------- */}
        <div className="flex items-center justify-center gap-1 font-normal">
          <Link href={"/"}>
            <span className="hover:underline hover:text-blue-200">
              Continue as Guest
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
