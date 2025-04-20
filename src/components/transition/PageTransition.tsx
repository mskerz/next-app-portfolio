"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  // const [renderKey, setRenderKey] = useState(pathname);

  // useEffect(() => {
  //   setRenderKey(pathname);
  // }, [pathname]);
  return (
    <motion.div
    key={pathname}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
     transition={{ 
      ease: "easeInOut",
      // stiffness: 70,
      // damping: 15,
      duration: 0.75,
     }}
  >
    {children}
  </motion.div>
  );
}