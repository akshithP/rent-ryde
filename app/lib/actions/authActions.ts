"use server";
import { User } from "@prisma/client";
import prisma from "../prisma";
import * as bcrypt from "bcrypt";
import {
  compileActivationTemplate,
  compileForgotPasswordTemplate,
  sendMail,
} from "../mail";
import { signJwt, verifyJwt } from "../jwt";
import { sub } from "date-fns";

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

export async function forgotPassword(email: string) {
  // First find if such user exists
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // If they dont exist
  if (!user) {
    throw new Error("Sorry, There is no such user with that email!");
  }

  // if they exist, send them email with reset password link
  //First create reset password link
  const jwtUserId = signJwt({
    id: user.id, //id of the user
  });

  // Compile the body of the forgot password email with reset password link
  const body = compileForgotPasswordTemplate(
    user.firstName,
    `${process.env.NEXTAUTH_URL}/auth/resetPassword/${jwtUserId}`
  );

  // Send the email
  const result = await sendMail({
    to: user.email,
    subject: "Reset Password - Rent Ryde",
    body: body,
  });

  return result;
}

type ResetPasswordFunction = (
  jwtUserId: string,
  confirmPassword: string
) => Promise<"userNotFound" | "success">;

export const resetUserPassword: ResetPasswordFunction = async (
  jwtUserId,
  confirmPassword
) => {
  // Need to extract the payload fromt JWT token and get the user ID
  const payload = verifyJwt(jwtUserId);

  // If payload doesn't exist
  if (!payload) return "userNotFound";

  // Other wise extract ID
  const userId = payload?.id;

  // Find the user in the db
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  // iF USER DOESN;T EXIST
  if (!user) return "userNotFound";

  // If user
  const updatedPassword = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: await bcrypt.hash(confirmPassword, 10),
    },
  });

  // Check the updatePassword result
  if (updatedPassword) {
    return "success";
  } else {
    throw new Error("Something went wrong");
  }
};
