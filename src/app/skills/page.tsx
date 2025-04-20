"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { SkillIcons, skills } from "@/constant/icon";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const dark = {
    bg: "bg-gray-700/40",
    iconColor : "text-cyan-400"
  }
  const light = {
    bg: "bg-gray-200/40",
    iconColor : "text-cyan-700"
  }
  const colorClass = useColorModeValue(light, dark)
  return (
    <section className="py-12">
      <h1 className="text-3xl  md:text-4xl font-semibold mb-4 text-center">
        My Skills
      </h1>
      <div className="grid grid-cols-3   md:grid-cols-4 gap-4">
        {skills.map((skill, index) => {
          const { label, Icon, color } = skill;
          const iconColor = useColorModeValue(color.light, color.dark);
          return (
            <motion.div
              key={index}
              className= {`${colorClass.bg} backdrop-blur-3xl rounded-xl text-center py-4 px-4 shadow-md hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2`}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 1 }}
            >
              {Icon && <Icon  size={32}  color={iconColor}  />}
              <span className="text-sm">{label}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
