"use client";

import { Text, Theme } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
export default function BioContent() {
    const textHighlightClass  =  useColorModeValue( "text-blue-600" , "text-blue-300" )
 
  return (
    <div className="text-base leading-relaxed  break-words">
      

      <Text className="mb-4 text-justify" >
        Hi, You can call me <strong className={`${textHighlightClass} font-semibold`}>"Mak"</strong>, I recently graduated with
        a degree in Computer Science, and I’m deeply passionate about software
        development. I specialize in web technologies, particularly React,
        Redux, TailwindCSS, and Express.js, and I’m currently diving into
        Next.js. I love learning new tools and frameworks, and I enjoy building
        real-world applications that solve problems and improve experiences.
      </Text>
       
       
 
    </div>
  );
}
