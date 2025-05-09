"use client"

import { ChakraProvider, } from "@chakra-ui/react"

import {
  ColorModeProvider,
  CustomSystem,
  type ColorModeProviderProps,
} from "./color-mode"

 
 

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider     value={CustomSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
