"use client";

import { Navbar } from "@/components/layout";
import { PageTransition } from "@/components/transition";
import {  useColorModeValue } from "@/components/ui/color-mode";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // กำหนดสีพื้นหลังตามธีม
  const bgClass = useColorModeValue(
    "bg-gradient-to-br from-white to-blue-500", // light mode
    "bg-gradient-to-tr from-black to-blue-950" // dark mode
  );

  return (
    <div className={`${bgClass} min-h-screen overflow-hidden`}>
          <Navbar />
          <PageTransition>
            <main className="pt-24 lg:pt-32 container mx-auto px-4 md:px-8 lg:px-16">
           
             {children}
            
            </main>
          </PageTransition>
        </div>
  );
}
