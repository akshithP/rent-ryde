"use server";
import { User } from "@prisma/client";
import prisma from "../prisma";
import * as bcrypt from "bcrypt";
import {
  compileActivationTemplate,
  compileForgotPasswordTemplate,
  compileContactMessageTemplate,
  sendMail,
} from "../mail";
import { signJwt, verifyJwt } from "../jwt";

/*
 * --------------------------------------------------------------------------------------------------------------------
 * |                                             FUNCTION TYPE DECLARATION                                            |
 * --------------------------------------------------------------------------------------------------------------------
 */
// Declared type of activateUser function
type ActivateUserFunction = (
  jwtUserId: string
) => Promise<"userNotExist" | "alreadyActivated" | "success">;

// Declared type of ResetPasswordFunction function
type ResetPasswordFunction = (
  jwtUserId: string,
  confirmPassword: string
) => Promise<"userNotFound" | "success">;

/**
 * --------------------------------------------------------------------------------------------------------------------
 * |                                             REGISTER USER FUNCTION                                               |
 * --------------------------------------------------------------------------------------------------------------------
 * Takes user object, removes the properties from user including, id, image etc.
 * User parameters comes with user object from auth and also includes password.
 *
 * @param {Omit<User, "id" | "emailVerified" | "image" | "phone">} user
 * @return
 */
export async function registerUser(
  user: Omit<User, "id" | "emailVerified" | "image" | "phone">
) {
  // Create the user with user object and password that is hashed
  const result = await prisma.user.create({
    data: {
      ...user,
      password: await bcrypt.hash(user.password, 10),
    },
  });

  // Encrypt the user ID using JWT Token before compiling and sending the activation email
  const jwtUserId = signJwt({
    id: result.id, //id of the inserted user
  });

  // Compile the activation email using the template, creating the URL and embedding the encrypted user ID
  const body = compileActivationTemplate(
    user.firstName,
    `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`
  );

  // Send the activation email
  await sendMail({
    to: user.email,
    subject: "Activate Your Account - Rent Ryde",
    body: body,
  });
  return result;
}

/**
 * --------------------------------------------------------------------------------------------------------------------
 * |                                               ACTIVATE USER FUNCTION                                             |
 * --------------------------------------------------------------------------------------------------------------------
 *
 * Takes the jwtToken, comprising of user ID, and finds the user in the DB. And sets the user's emailVerified state
 * to timestamp if the account isn't already activated.
 * @param jwtUserId: string
 * @return
 */
export const activateUser: ActivateUserFunction = async (jwtUserId: string) => {
  // Need to extract the payload(encrypted DATA) fromt JWT token and get the user ID
  const payload = verifyJwt(jwtUserId);
  const userId = payload?.id;

  // Find the user in the prisma DB, user clicks activation and we received the encrypted userID
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  // If we can't find the user then return doesn't exist
  if (!user) {
    return "userNotExist";
  }

  // If emailVerified is already set to TIMESTAMP, it means account is already activated
  if (user.emailVerified) {
    return "alreadyActivated";
  }

  // Otherwise, we update the emailVerified state to current timestamp of account activation
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

/**
 * --------------------------------------------------------------------------------------------------------------------
 * |                                         FORGOT PASSWORD LINK FUNCTION                                            |
 * --------------------------------------------------------------------------------------------------------------------
 *
 * Takes user's email and sends them reset password link
 * @param {string} email
 * @return
 */
export async function forgotPassword(email: string) {
  // Find the user in the prisma DB, to ensure user exists.
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // If user doesn't exist
  if (!user) {
    throw new Error("Sorry, There is no such user with that email!");
  }

  // Secure the user's ID using JWT Token
  const jwtUserId = signJwt({
    id: user.id,
  });

  // Compile the body of the forgot password email with reset password link
  const body = compileForgotPasswordTemplate(
    user.firstName,
    `${process.env.NEXTAUTH_URL}/auth/resetPassword/${jwtUserId}`
  );

  // Send the email to user
  const result = await sendMail({
    to: user.email,
    subject: "Reset Password - Rent Ryde",
    body: body,
  });

  return result;
}

/**
 * --------------------------------------------------------------------------------------------------------------------
 * |                                         FORGOT PASSWORD LINK FUNCTION                                            |
 * --------------------------------------------------------------------------------------------------------------------
 *
 * After user clicks reset password link, they are redirected to resetPassword page where they enter new password.
 * The password is hashed before updating the password in the database.
 * @param {string} email
 * @return
 */
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

  // Find the user in the prisma DB
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  // if user is not found
  if (!user) return "userNotFound";

  // If user exists, then update their password
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

/**
 * --------------------------------------------------------------------------------------------------------------------
 * |                                        SEND CONTACT FORM MESSAGE                                                 |
 * --------------------------------------------------------------------------------------------------------------------
 *
 * After user clicks reset password link, they are redirected to resetPassword page where they enter new password.
 * The password is hashed before updating the password in the database.
 * @param {string} email
 * @return
 */
export async function submitContactMessage(userData: any) {
  // Compile the contact form message form template
  const body = compileContactMessageTemplate(
    userData.firstName,
    userData.message
  );

  // Send the email to user
  const result = await sendMail({
    to: userData.email,
    subject: "Message Received - Rent Ryde",
    body: body,
  });
  return result;
}
