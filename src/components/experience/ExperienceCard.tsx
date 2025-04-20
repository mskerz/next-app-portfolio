"use client";

import { Experience } from "@/constant/info";
import { List, Text, Timeline } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import { LuShip } from "react-icons/lu";
import { useColorModeValue } from "../ui/color-mode";
import { MdOutlineWorkHistory } from "react-icons/md";
export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const borderColor = useColorModeValue("gray.500", "gray.700");
  const bgColor = useColorModeValue("white", "gray.800");
  const outlineColor = useColorModeValue("blue.500", "teal.400");
  const { role, company, period, description } = experience;
  return (
    <Timeline.Item>
      <Timeline.Connector mt={0.5}>
        <Timeline.Separator borderColor={borderColor} />
        <Timeline.Indicator outlineColor={outlineColor} outlineWidth={2.5}>
          <MdOutlineWorkHistory />
        </Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content bg={bgColor} rounded={"md"} p={4}>
        <Timeline.Title>{role}</Timeline.Title>
        <Timeline.Description gap={2} display={"flex"} flexDir={"column"}>
          
          <Text>{company}</Text>
          <Text>{period}</Text>
        </Timeline.Description>

        <List.Root gap="2" variant="plain" align="start">
          {description?.map((desc: string, index: number) => (
            <List.Item
              key={index}
              className="flex items-start space-x-2 text-xs"
            >
              <List.Indicator asChild >
                <GoDotFill />
              </List.Indicator>
              <p>{desc}</p>
            </List.Item>
          ))}
        </List.Root>
      </Timeline.Content>
    </Timeline.Item>
  );
}
