// This route handler handles all API requests, like signin/sign out etc
import prisma from "@/app/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import { User } from "@prisma/client";

const authOptions: AuthOptions = {
  // Specifying the login page path
  pages: {
    signIn: "/auth/signin",
  },

  // Session of next auth is turned to JWT, saved as cookie, and we can access session of next auth using getServerSession
  session: {
    strategy: "jwt",
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
        // Checking if the user exists by connecting and querying the prisma DB
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        // If the user is not found
        if (!user) {
          throw new Error("Username or password is not correct");
        }

        // If password isnt provided
        if (!credentials?.password) {
          throw new Error("Password is not provided");
        }

        // Check if the entered password is correct
        const isPasswordCorrect = await bcrypt.compare(
          credentials?.password,
          user.password
        );

        // If password is not correct
        if (!isPasswordCorrect) {
          throw new Error("Password is not correct");
        }

        // If the user has not activated their email yet
        if (!user.emailVerified) {
          throw new Error("Please verify your email to activate your account");
        }

        // Destructuring the user object to not include password
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

export default authOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
