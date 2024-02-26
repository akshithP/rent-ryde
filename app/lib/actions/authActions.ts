"use server";
import { User } from "@prisma/client";
import prisma from "../prisma";
import * as bcrypt from "bcrypt";
import { compileActivationTemplate, sendMail } from "../mail";

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

  const body = compileActivationTemplate(
    user.firstName,
    `${process.env.NEXTAUTH_URL}/auth/activation/${result.id}`
  );
  await sendMail({
    to: user.email,
    subject: "Activate Your Account - Rent Ryde",
    body: body,
  });
  return result;
}
