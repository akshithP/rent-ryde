"use server";
import { User } from "@prisma/client";
import prisma from "../prisma";
import * as bcrypt from "bcrypt";

// Function that takes a user and insert it into the database
export async function registerUser(
  user: Omit<User, "id" | "emailVerified" | "image" | "phone">
) {
  // Remove the ID type
  const result = await prisma.user.create({
    data: {
        ...user,
        password: await bcrypt.hash(user.password, 10)
    },
  });
}
