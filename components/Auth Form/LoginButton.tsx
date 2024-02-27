"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const LoginButton = () => {
  const { data: session } = useSession();
  return (
    <div className="flex md:flex-row flex-col md:items-center items-start px-5 py-2 gap-2">
      {session && session.user ? (
        <>
          <p className="text-red-400 text-lg font-semibold">Hello {session.user.firstName}!</p>
          <Link
            href={"/api/auth/signout"}
            className="bg-black text-textPrimary rounded-lg text-lg font-semibold hover:bg-primary2 px-3 py-1 transition-colors"
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <button
            onClick={() => signIn()}
            className="bg-black text-textPrimary rounded-lg text-lg font-semibold hover:bg-primary2 px-3 py-1 transition-colors"
          >
            Sign in
          </button>
          <Link
            href={"/auth/signup"}
            className="bg-black text-textPrimary rounded-lg text-lg font-semibold hover:bg-primary2 px-3 py-1 transition-colors"
          >
            Sign up
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginButton;
