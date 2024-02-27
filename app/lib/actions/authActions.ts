"use server";
import { User } from "@prisma/client";
import prisma from "../prisma";
import * as bcrypt from "bcrypt";
import { compileActivationTemplate, sendMail } from "../mail";
import { signJwt, verifyJwt } from "../jwt";

// Function that takes a user and insert it into the database
export async function registerUser(
  user: Omit<User, "id" | "emailVerified" | "image" | "phone">
) {
  // Remove the ID type
  const result = await prisma.user.create({
    data: {
      ...user,
      password: await bcrypt.hash(user.password, 10),
    },
  });

  const jwtUserId = signJwt({
    id: result.id, //id of the inserted user
  });
  const body = compileActivationTemplate(
    user.firstName,
    `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`
  );
  await sendMail({
    to: user.email,
    subject: "Activate Your Account - Rent Ryde",
    body: body,
  });
  return result;
}

// Returns a promise of a string
type ActivateUserFunction = (
  jwtUserId: string
) => Promise<"userNotExist" | "alreadyActivated" | "success">;

export const activateUser: ActivateUserFunction = async (jwtUserId: string) => {
  // Need to extract the payload fromt JWT token and get the user ID
  const payload = verifyJwt(jwtUserId);
  const userId = payload?.id;

  // Fin the user in the db
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  // If we cant find the user then doesnt exist
  if (!user) {
    return "userNotExist";
  }

  // If emailverified not null, means account already activated
  if (user.emailVerified) {
    return "alreadyActivated";
  }

  // Otherwise we update the email verified state to the datetime account was activated
  const accountVerified = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  return "success";
};
