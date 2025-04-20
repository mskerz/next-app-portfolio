"use client";
import { ProjectCard } from "@/components/project";
import { projects } from "@/constant/icon";
export default function ProjectPage() {
  return (
    <div className="flex flex-col ">
      <h1 className="text-4xl font-semibold mb-4 md:text-center  text-start">
        Projects
      </h1>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-4">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
