import type { Metadata } from "next";
import { plusJakartaSans } from "@/fonts";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Rent Ryde",
  description: "Rent Ryde is a car rental app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-secondary`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
