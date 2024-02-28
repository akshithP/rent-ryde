import React from "react";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Profile = async () => {
  // Need to get  authUser from the session.
  // Can use useSession, like sign in button before. but only in client component
  // GET server session function, gets the session on server side.
  const session = await getServerSession(authOptions);

  // Grab user from session
  const user = session?.user;

  // Protect profile page, check if user is inside otherwise back to login
  if (!session || !session.user) redirect("/auth/signin");

  return (
    <div className="p-3 grid grid-cols-1 gap-3 text-textPrimary text-xl font-medium">
      <div>First Name: {user?.firstName}</div>
      <div>Last Name: {user?.lastName}</div>
      <div>email ID: {user?.email}</div>
    </div>
  );
};

export default Profile;
