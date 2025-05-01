"use client";

import { ProjectType } from "@/constant/icon";
import { useColorModeValue } from "../ui/color-mode";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare as PreviewIcon } from "react-icons/fa6";

export default function ProjectCard({ project }: { project: ProjectType }) {
  const { title, project_type, git_link, preview_link, descriptions, tools } =
    project;
  const dark = {
    bg: "bg-gray-800/50",
    title: "text-white",

    project_type: "text-gray-400",

    description: "text-gray-300",
    bg_tool: "bg-gray-700",
  };

  const light = {
    bg: "bg-gray-200/50",
    title: "text-gray-800",
    project_type: "text-gray-600",

    description: "text-gray-600",
    bg_tool: "bg-gray-100",
  };
  const colorClass = useColorModeValue(light, dark);

  return (
    <div
      className={`${colorClass.bg} backdrop-blur-3xl rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-md`}
    >
      <div className="flex items-start justify-between mb-2">
        <p className={`text-xl font-semibold ${colorClass.title}`}>{title}</p>
        <div className="flex gap-3">
          <a
            href={git_link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colorClass.title} hover:text-blue-300 transition-all duration-500`}
          >
            <FaGithub size={24} />
          </a>
          {preview_link && (
            <a
              href={preview_link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${colorClass.title} hover:text-blue-300 transition-all duration-500`}
            >
              <PreviewIcon size={24} />
            </a>
          )}
        </div>
      </div>

      <p className={`text-sm mb-2 ${colorClass.project_type}`}>
        {project_type}
      </p>
      <ul className={`list-disc list-inside my-2 ${colorClass.description}`}>
        <li className="text-md">{descriptions}</li>
      </ul>

      <div className="mb-2 grid grid-cols-2 gap-4 min-w-0">
        {tools?.map((tool, idx) => {
          const { label, icon, color } = tool;
          const Icon = icon;
          const iconColor = useColorModeValue(color.light, color.dark);

          return (
            <div
              key={idx}
              className={`${colorClass.bg_tool} w-full rounded-xl  p-3  flex items-center space-x-1.5 shadow-md`}
            >
              <div className="shrink-0">
                <Icon size={22} color={iconColor} />
              </div>
              <span className="sm:text-[10px] md:text-[12px] ">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
