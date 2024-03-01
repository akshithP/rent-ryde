import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import UserProfile from "@/components/UserProfile";

const Profile = async () => {
  // Need to get  authUser from the session.
  // Can use useSession, like sign in button before. but only in client component
  // GET server session function, gets the session on server side.
  const session = await getServerSession(authOptions);

  // Grab user from session
  const user = session?.user;

  // Protect profile page, check if user is inside otherwise back to login
  // if (!session || !session.user) redirect("/auth/signin");

  return (
    <div className="flex flex-col mt-10 justify-center items-center">
      {/*-----------------TITLE----------------*/}
      <div className="flex justify-center p-4">
        <h1
          id="title"
          className="font-extrabold md:text-3xl text-2xl text-primary"
        >
          My Profile
        </h1>
      </div>
      <div className="flex px-3 py-3 w-96 justify-center items-center rounded-lg bg-secondary2 shadow-lg">
        <UserProfile
          firstName={user?.firstName}
          lastName={user?.lastName}
          email={user?.email}
        />
      </div>
    </div>
  );
};

export default Profile;
