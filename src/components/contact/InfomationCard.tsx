"use client";

import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useColorModeValue } from "../ui/color-mode";

export default function InfomationCard() {
  const bgCard = useColorModeValue("bg-gray-100/50", "bg-white/15");
  return (
    //flex flex-col bg-white/15 p-6 rounded-xl backdrop-blur-3xl
    <div
      className={`${bgCard} w-full md:w-fit flex flex-col p-6 px-20 h-full rounded-xl backdrop-blur-3xl`}
    >
      <h1 className="text-3xl font-medium mb-3 border-b-2">Infomation</h1>

      {/* เพิ่ม div ครอบไว้ให้ text ชิดซ้าย */}
      <div className=" text-left">
        <div className="flex flex-col gap-3 items-start">
          <Flex align={"center"} gap={2}>
            <MdEmail size={30} />
            <p className="text-lg font-normal">wichasin.s@gmail.com</p>
          </Flex>
          <Flex align={"center"} gap={2}>
            <LiaLinkedinIn size={30} />
            <Link
              className="text-lg font-normal text-decoration-none"
              target="_blank"
              href="https://www.linkedin.com/in/wichasin-s"
            >
              Wichasin Sutthiarj
            </Link>
          </Flex>
          <Flex align={"center"} gap={2}>
            <FaGithub size={30} />
            <Link
              className="text-lg font-normal text-decoration-none"
              target="_blank"
              href="https://github.com/mskerz"
            >
              Mskerz
            </Link>
          </Flex>
          <Flex align={"center"} gap={2}>
            <MdLocationOn size={30} />
            <p className="text-lg font-normal">Samut Sakhon, Thailand</p>
          </Flex>
        </div>
      </div>
    </div>
  );
}
