// Protect pages from unauthenticated users using next-auth middleware

export { default } from "next-auth/middleware";

export const config = {
  // Defining pages that need to be protected, in this case only profile for now
  matcher: ["/profile"],
};
