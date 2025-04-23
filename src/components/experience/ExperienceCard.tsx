"use client";

import { Experience } from "@/constant/info";
import { List, Text, Timeline } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import { useColorModeValue } from "../ui/color-mode";
import { MdOutlineWorkHistory } from "react-icons/md";
export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const bgColor =  useColorModeValue("bg-gray-100/40", "bg-white/20");
  const connector = {
    separator: {
      borderColor: useColorModeValue("gray.500", "gray.700"),
    },
    indicator: {
      outline: {
        color: useColorModeValue("blue.500", "teal.400"),
      },
      icon: {
        color: useColorModeValue("black", "white"),
      },
      bg: useColorModeValue("white/50", "black/50"),
    },
  };

  const { role, company, period, description } = experience;
  return (
    <Timeline.Item>
      <Timeline.Connector mt={0.5}>
        <Timeline.Separator borderColor={connector.separator.borderColor} />
        <Timeline.Indicator
          outlineColor={connector.indicator.outline.color}
          bg={connector.indicator.bg}
          outlineWidth={2.5}
        >
          <MdOutlineWorkHistory color={connector.indicator.icon.color} />
        </Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content
         
        rounded={"md"}
        p={4}
        className={`${bgColor} backdrop-blur-sm`}
      >
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
              <List.Indicator asChild>
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
