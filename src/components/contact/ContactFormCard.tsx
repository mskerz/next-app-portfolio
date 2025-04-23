"use client";

import { ContactForm } from "@/components/forms";
import { useColorModeValue } from "../ui/color-mode";

export default function ContactFormCard() {
  const bgCard = useColorModeValue("bg-gray-100/50", "bg-white/15");

  return (
    <div
      className={`${bgCard} w-full md:w-fit flex flex-col p-6 px-20 h-full rounded-xl backdrop-blur-3xl`}
    >
       
      <h1 className="text-4xl font-medium   ">Contact</h1>
      <div className="flex flex-col">
        <p className="  mt-4">Please provide your contact details below.</p>
        <div className="flex gap-4 mt-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
