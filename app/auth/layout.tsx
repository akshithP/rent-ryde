import type { Metadata } from "next";
import { plusJakartaSans } from "@/fonts";
import "../globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Rent Ryde is a car rental app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
