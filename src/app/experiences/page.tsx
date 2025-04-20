import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/constant/info";
import { Separator, HStack, Stack, Timeline } from "@chakra-ui/react";
export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-6 py-5  ">
      <div className="flex flex-col justify-center md:items-center items-start ">
        <h1 className="text-3xl font-semibold text-center mb-12">
          Experiences
        </h1>
        
 
 

        <Timeline.Root className="lg:max-w-xl">
          {/* Experience 1 */}
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </Timeline.Root>
      </div>
    </div>
  );
}
