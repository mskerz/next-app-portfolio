// Frontend Icons
import { FaReact, FaAngular } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";

// Backend Icons
import { FaNodeJs } from "react-icons/fa";

// Language & Tools
import {
  SiJavascript,
  SiExpress,
  SiFastapi,
  SiLaravel,
  SiPhp,
  SiDart,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPython,
  SiGit,
  SiRedux,
  SiFigma,
} from "react-icons/si";
import { label } from "framer-motion/client";
import { BsBootstrapFill } from "react-icons/bs";
import { IconType } from "react-icons";

export const SkillIcons = {
  // Frontend
  React: FaReact,
  NextJS: RiNextjsFill,
  Tailwind: RiTailwindCssLine,
  Redux: SiRedux,
  Flutter: FaFlutter,
  Angular: FaAngular,
  Bootstrap: BsBootstrapFill,
  // Backend
  NodeJS: FaNodeJs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  Laravel: SiLaravel,
  // Languages & Tools
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  Dart: SiDart,
  Python: SiPython,

  // Database
  MongoDB: SiMongodb,
  MySQL: SiMysql,

  // Others
  Git: SiGit,
  Figma: SiFigma,
};

export type ProjectType = {
  title?: string;
  project_type?: string;
  git_link?: string;
  preview_link?: string;
  descriptions?: string;
  tools?: {
    label: string;
    icon: IconType; // SkillIcons
    color: { dark: string; light: string };
  }[];
};

export const skills = [
  {
    label: "Javascript",
    Icon: SkillIcons.JavaScript,
    color: { dark: "#f0db4f", light: "#f0db4f" },
  },
  {
    label: "TypeScript",
    Icon: SkillIcons.TypeScript,
    color: { dark: "#3178c6", light: "#3178c6" },
  },
  {
    label: "React",
    Icon: SkillIcons.React,
    color: { dark: "#61dafb", light: "#21a1f1" },
  },
  {
    label: "Angular",
    Icon: SkillIcons.Angular,
    color: { dark: "#dd0031", light: "#dd0031" },
  },
  {
    label: "NextJS (Basic)",
    Icon: SkillIcons.NextJS,
    color: { dark: "#FFFF", light: "#000000" },
  },
  {
    label: "Tailwind CSS",
    Icon: SkillIcons.Tailwind,
    color: { dark: "#38bdf8", light: "#38bdf8" },
  },
  {
    label: "Express",
    Icon: SkillIcons.Express,
    color: { dark: "#FFFF", light: "#000000" },
  },
  {
    label: "Node.js",
    Icon: SkillIcons.NodeJS,
    color: { dark: "#339933", light: "#339933" },
  },
  {
    label: "Python",
    Icon: SkillIcons.Python,
    color: { dark: "#3776ab", light: "#3776ab" },
  },

  {
    label: "MySQL",
    Icon: SkillIcons.MySQL,
    color: { dark: "#00758f", light: "#00758f" },
  },
  {
    label: "MongoDB",
    Icon: SkillIcons.MongoDB,
    color: { dark: "#47a248", light: "#47a248" },
  },

  {
    label: "Git",
    Icon: SkillIcons.Git,
    color: { dark: "#f05032", light: "#f05032" },
  },
  // { label: "Figma", Icon: SkillIcons.Figma, color: { dark: "#f24e1e", light: "#f24e1e" } },
];

export const projects: ProjectType[] = [
  {
    title: "Portfolio Website",
    project_type: "Personal Project",
    git_link: "https://github.com/mskerz/next-app-portfolio",
    preview_link: "https://wichasin-next-portfolio.vercel.app/",
    descriptions:
      "A personal portfolio website built with Next.js and Tailwind CSS. Implemented Chakra UI and Framer Motion for animations.",
    tools: [
      {
        label: "Next.js",
        icon: SkillIcons.NextJS,
        color: { dark: "#FFFF", light: "#000000" },
      },
      {
        label: "Tailwind CSS",
        icon: SkillIcons.Tailwind,
        color: { dark: "#38bdf8", light: "#38bdf8" },
      },
    ],
  },
  {
    title: "Mini Blog Social Media",
    project_type: "Side Project",
    git_link: "https://github.com/mskerz/blog-social-react",
    preview_link : "https://blog-social-react.vercel.app",
    descriptions:
      "A full-stack Web Application where users can sign up, post, like, comment, and update profiles. Managed state with Redux Toolkit.",
    tools: [
      {
        label: "React",
        icon: SkillIcons.React,
        color: { dark: "#61dafb", light: "#61dafb" },
      },
      {
        label: "Redux",
        icon: SkillIcons.Redux,
        color: { dark: "#764abc", light: "#764abc" },
      },
      {
        label: "Express",
        icon: SkillIcons.Express,
        color: { dark: "#ffffff", light: "#000000" }, // ปรับให้ตัดกัน
      },
      {
        label: "MongoDB",
        icon: SkillIcons.MongoDB,
        color: { dark: "#47a248", light: "#47a248" },
      },

      {
        label: "JavaScript",
        icon: SkillIcons.JavaScript,
        color: { dark: "#f0db4f", light: "#f7df1e" }, // ปรับนิดหน่อย
      },
      {
        label: "TypeScript",
        icon: SkillIcons.TypeScript,
        color: { dark: "#3178c6", light: "#3178c6" },
      },
    ],
  },

  {
    title: "Thesis Finder",
    project_type: "Graduate Project",
    git_link: "https://github.com/mskerz/thesis-search-project",
    descriptions:
      "Web application for thesis search system using TF-IDF to measure word importance and PythaiNLP for document retrieval and word processing for KU CSC students.",
    tools: [
      {
        label: "Angular",
        icon: SkillIcons.Angular,
        color: { dark: "#dd0031", light: "#dd0031" },
      },
      {
        label: "FastAPI",
        icon: SkillIcons.FastAPI,
        color: { dark: "#009688", light: "#00bfa5" }, // ให้สว่างขึ้นหน่อยตอน light
      },
      {
        label: "MySQL",
        icon: SkillIcons.MySQL,
        color: { dark: "#00758f", light: "#00758f" },
      },
      {
        label: "Python",
        icon: SkillIcons.Python,
        color: { dark: "#3776ab", light: "#306998" },
      },
    ],
  },
  {
    title: "Mobile App : Article App",
    project_type: "Class Project",
    git_link: "https://github.com/mskerz/content_manage_apps",
    descriptions:
      "Mobile app for article management with bookmarking, search, and user accounts. Built with Flutter/Dart and Laravel backend using MySQL and RESTful API.",

    tools: [
      {
        label: "Flutter",
        icon: SkillIcons.Flutter,
        color: { dark: "#02569b", light: "#42a5f5" }, // โทนสว่างสำหรับ light
      },
      {
        label: "Dart",
        icon: SkillIcons.Dart,
        color: { dark: "#0175c2", light: "#40c4ff" },
      },
      {
        label: "Laravel",
        icon: SkillIcons.Laravel,
        color: { dark: "#ff2d20", light: "#ff4e42" },
      },
      {
        label: "MySQL",
        icon: SkillIcons.MySQL,
        color: { dark: "#00758f", light: "#00758f" },
      },
    ],
  },
  {
    title: "Todo Basic App",
    project_type: "Side Project",
    git_link: "https://github.com/mskerz/react-todoListBootstrap",
    descriptions:
      "A simple Todo App . Learned the basics of State Management with Hooks and Props.",

    tools: [
      {
        label: "React",
        icon: SkillIcons.React,
        color: { dark: "#61dafb", light: "#61dafb" },
      },
      {
        label: "Bootstrap",
        icon: SkillIcons.Bootstrap,
        color: { dark: "#7952b3", light: "#6f42c1" },
      },
    ],
  },
];
