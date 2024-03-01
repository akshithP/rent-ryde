import Link from "next/link";
import React from "react";
import { FaEdit as Edit } from "react-icons/fa";

interface Props {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const UserProfile = ({ firstName, lastName, email }: Props) => {
  return (
    <form className="grid grid-cols-1 gap-4 p-5 text-textPrimary">
      {/*------------------------------------------FIRST NAME------------------------------------------- */}
      <div id="firstName" className="flex flex-col gap-1">
        <p className="text-lg font-normal text-primary">First Name</p>
        <input
          type="text"
          id="firstName"
          disabled
          value={firstName}
          className="hover:cursor-not-allowed p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
      </div>

      {/*------------------------------------------LAST NAME------------------------------------------- */}
      <div id="lastName" className="flex flex-col gap-1">
        <p className="text-lg font-normal text-primary">Last Name</p>
        <input
          type="text"
          id="lastName"
          disabled
          value={lastName}
          className="hover:cursor-not-allowed p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
      </div>

      {/*------------------------------------------EMAIL------------------------------------------- */}
      <div id="email" className="flex flex-col gap-1">
        <p className="text-lg font-normal text-primary">Email</p>
        <input
          type="text"
          id="email"
          disabled
          value={email}
          className="hover:cursor-not-allowed p-3 bg-transparent outline-none border-b-2 border-borderCol text-lg font-normal text-textPrimary placeholder:italic placeholder:text-base placeholder:font-light"
        ></input>
      </div>

      {/*------------------------------------SEND BUTTON----------------------------------*/}
      <div className="flex flex-col gap-2">
        <Link
          href={"auth/forgotPassword"}
          className="flex gap-2 mt-5 justify-center items-center bg-primary text-secondary2 font-bold px-4 py-3 rounded hover:bg-black hover:cursor-pointer hover:text-textPrimary transition-colors hover:scale-105 transition-all'"
        >
          <p>Change Password</p>
          <Edit className="text-xl font-semibold" />
        </Link>
      </div>
    </form>
  );
};

export default UserProfile;
