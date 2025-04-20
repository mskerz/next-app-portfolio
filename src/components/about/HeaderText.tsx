'use client'
import { Text, Theme } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "../ui/color-mode";


function BioHeader() {
  const { colorMode ,isDark } = useColorMode();

  const textHeaderClass  =  useColorModeValue( "text-blue-600" ,"text-sky-400")
  return (
    <Theme appearance={colorMode} bg={"transparent"}>
      <Text className={`text-3xl font-semibold ${textHeaderClass}`} >About me</Text>
    </Theme>
  )
}
export default BioHeader;
