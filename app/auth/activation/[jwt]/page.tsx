import { activateUser } from "@/app/lib/actions/authActions";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    jwt: string;
  };
}

const Activation = async ({ params }: Props) => {
  // Create another server action to activate the user
  // Then call the activate user, pass the JWT
  // Which decodes it and then activates the user in the database
  // Then return a proper message of the activation

  // Call the activate user function
  const result = await activateUser(params.jwt);
  return (
    <div className="flex shadow-xl items-center justify-center bg-gradient-to-b from-secondary to-primary h-screen ">
      <div className="bg-secondary2 rounded-md px-5 py-5">
        {result === "success" ? (
          //----------------------------------SUCCESSFUL ACTIVATION---------------------------------
          <div className="flex flex-col gap-3 justify-center items-center ">
            <h1 className="text-textPrimary font-semibold text-xl">
              Your account has been activated!
            </h1>
            <Link
              href={"/auth/signin"}
              className="px-4 py-2 text-textPrimary bg-black rounded-lg text-lg font-medium hover:bg-primary2 transition-colors"
            >
              Continue to Login
            </Link>
          </div>
        ) : result === "alreadyActivated" ? (
          //----------------------------------ALREADY ACTIVATED---------------------------------
          <div className="flex flex-col gap-3 justify-center items-center ">
            <h1 className="text-textPrimary font-semibold text-xl">
              Your account is already activated
            </h1>
            <Link
              href={"/auth/signin"}
              className="px-4 py-2 text-textPrimary bg-black rounded-lg text-lg font-medium hover:bg-primary2 transition-colors"
            >
              Continue to Login
            </Link>
          </div>
        ) : (
          //---------------------------------DOESNT EXIST---------------------------------
          <div className="flex flex-col gap-3 justify-center items-center ">
            <h1 className="text-textPrimary font-semibold text-xl">
              Sorry your account doesn&apos;t exist
            </h1>
            <Link
              href={"/auth/signup"}
              className="px-4 py-2 text-textPrimary bg-black rounded-lg text-lg font-medium hover:bg-primary2 transition-colors"
            >
              Continue to Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activation;
