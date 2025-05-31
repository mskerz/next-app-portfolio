"use client";

import { ReactTyped } from "react-typed";
import { RESUME_URL, words } from "@/constant/info";
import { PageLayout } from "@/components/layout";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import { CiFileOn } from "react-icons/ci";

const imageUrl = "/image/hi_emoji.gif";
export default function page() {
  const dark = {
    h1Color: "text-white",
    h2Color: "text-gray-300",
    hightlightColor: "text-cyan-400",
  };

  const light = {
    h1Color: "text-black",
    h2Color: "text-gray-600",
    hightlightColor: "text-blue-600",
  };

  const colorMode = useColorModeValue(light, dark);
  const ShadeColor = useColorModeValue("text-indigo-600", "text-sky-400");
  return (
    <PageLayout>
      <div className="flex flex-col items-start justify-center   p-24 ">
        <div className={`font-bold flex ${colorMode.h1Color}`}>
          <Box display={"flex"} flexDirection={"column"} gap={3}>
            <Box display={"flex"} alignItems={"center"}>
              <p className="text-3xl">Hi&nbsp;,</p>
              <Image width={30} src={imageUrl} alt="hi" />
              <p className="text-3xl ms-2">I'm</p>
            </Box>

            <Box display={"flex"}>
              <p className={`text-2xl lg:text-4xl ${ShadeColor}`}>
                Wichasin Sutthiarj
              </p>
            </Box>
          </Box>
        </div>
        <h2 className={`text-2xl mt-4 ${colorMode.h2Color}`}>
          <p>I'm looking a position </p>
          <span className={`font-semibold ${colorMode.hightlightColor}`}>
            <ReactTyped strings={words} typeSpeed={100} backSpeed={50} loop />
          </span>
        </h2>
        <div className="mt-4 flex">
          <Button rounded={"3xl"}>
            <Link href={"/about"} >
               <p className="font-medium text-sm">About me</p>
            </Link>
          </Button>
          <Button className="ms-4" rounded={"3xl"} variant={"surface"}>
            <Link
              href={
                RESUME_URL
              }
              target="_blank"
              className="flex items-center gap-2"
            >
              <CiFileOn />
              <p className="font-medium text-sm">My Resume</p>
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
