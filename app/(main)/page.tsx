import Image from "next/image";
import HomePage from "@/components/HomePage";
import { sendMail } from "../lib/mail";

export default async function Home() {
  await sendMail({
    to: "rentrydehelp@gmail.com",
    subject: "Testing",
    body: "Hello from rent ryde code",
  });
  return (
    <div className="p-5 sm:px10 md:px-20">
      <HomePage />
    </div>
  );
}
