"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
import { navItems } from "@/constant/navbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [focused, setFocused] = useState<string | null>(null)

  const hoverClass = useColorModeValue(
    "hover:text-indigo-600",
    "hover:text-cyan-300"
  );
  const indicatorClass = useColorModeValue(
    "bg-indigo-600",
    "bg-cyan-300"
  );
  return (
    <header>
      <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md   py-4">
        <div className="container mx-auto px-4 md:px-8 flex justify-between lg:justify-around items-center">
          {/* Brand */}
          <div className="text-2xl font-medium">
            <Link href="/" className={`${hoverClass} transition`}>
              Wichasin
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`${hoverClass} transition`}
                  onFocus={() => setFocused(item.href)}
                  onBlur={() => setFocused(null)}
                >
                  {item.name}
                </Link>
                {(pathname === item.href || focused === item.href) && (
                  <motion.div
                  layoutId="indicator"
                  className={`absolute left-0 right-0 -bottom-1 h-[4px] ${indicatorClass} rounded`}
                  transition={{ duration: 0.3 }}
                  />
                )}
                </div>
            ))}
            <ColorModeButton className="transition" />
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex ">
            <ColorModeButton className={`${hoverClass} transition`} />

            <button onClick={() => setMenuOpen(!menuOpen)}>
              <motion.div
                initial={{ rotate: 0 }}
                transition={{ duration: 0.7,  }}
                animate={{ rotate: menuOpen ? 90 : 0 }}
              >
                {menuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-transparent backdrop-blur-md px-16 pt-4 pb-6 flex flex-col gap-4 text-lg ml-auto" // <--- เพิ่ม ml-4 ให้ตรงกับ Brand
            >
              <Link
                href="/about"
                className="focus:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/skills"
                className="focus:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="focus:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/experiences"
                className="focus:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link
                href="/contact"
                className="focus:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
