"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hoverClass = useColorModeValue("text-cyan-400", "text-cyan-300"); 
  return (
    <header>
      <nav  className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md   py-4">
        <div className="container mx-auto px-4 md:px-8 flex justify-between lg:justify-around items-center">
          {/* Brand */}
          <div className="text-2xl font-medium">
            <Link href="/" className="hover:text-cyan-400 transition">
              Portfolio
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            <Link href="/about" className="hover:text-cyan-400 transition">
              About
            </Link>
            <Link href="/skills" className="hover:text-cyan-400 transition">
              Skills
            </Link>
            <Link href="/projects" className="hover:text-cyan-400 transition">
              Projects
            </Link>
            <Link href="/experiences" className="hover:text-cyan-400 transition">
              Experiences 
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
            <ColorModeButton className="transition" />
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex ">
          <ColorModeButton className="hover:text-cyan-400 transition" />

            <button onClick={() => setMenuOpen(!menuOpen)}>
              <motion.div
                initial={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
                animate={{ rotate: menuOpen ? 90 : 0 }}
              >
                {menuOpen ? (
                  <BiX size={28} />
                ) : (
                  <BiMenu size={28} />
                )}
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
              <Link href="/about" className="focus:text-cyan-300" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/skills" className="focus:text-cyan-300"  onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
              <Link href="/projects" className="focus:text-cyan-300" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/experiences" className="focus:text-cyan-300" onClick={() => setMenuOpen(false)}>
                Experiences
              </Link>
              <Link href="/contact" className="focus:text-cyan-300" onClick={() => setMenuOpen(false)}>
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
