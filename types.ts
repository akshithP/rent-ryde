import { User } from "@prisma/client";

export type Links = {
  id: number;
  title: string;
  url: string;
};

declare module "next-auth" {
  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}
