// This route handler handles all API requests, like signin/sign out etc
import prisma from "@/app/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
  // Specifying the login page
  pages: {
    signIn: "/auth/signin",
  },
  // Ways to authenticating user like with credentials, google provider etc
  providers: [
    CredentialsProvider({
      name: "Credentials", // name of the credentials provider

      // defining the credentials is important because describes either user/email and password
      credentials: {
        username: {
          label: "User Name",
          type: "text",
          placeholder: "Your User Name",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      // When user presses sign in, its packed as credential object and passed to this function
      async authorize(credentials) {
        // Checking if the user exists by connecting and querying the prisma db
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        if (!user) {
          throw new Error("Username or password is not correct");
        }

        // NAive method, need to hash the password before saving to DB
        // const isPasswordCorrect = credentials?.password === user.password;

        // If password isnt provided
        if (!credentials?.password) {
          throw new Error("Password is not provided");
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(
          credentials?.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Password is not correct");
        }

        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      },
    }),
  ],

  callbacks: {
    // First time user is signed in, user obj is available. But everytime useSession is called/used user obj is undefined. Need to put user into token, this way user obj is not undefined
    async jwt({ token, user }) {
      if (user) {
        token.user = user as User;
      }
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
