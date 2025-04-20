"use client";

import type { IconButtonProps, SpanProps } from "@chakra-ui/react";
import {
  ClientOnly,
  IconButton,
  Skeleton,
  Span,
  defaultConfig,
  createSystem,
  Theme,
} from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { motion } from "framer-motion";
export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
  isDark: boolean;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  const isDark = resolvedTheme === "dark";
  return {
    colorMode: resolvedTheme as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
    isDark,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return (
    <motion.span
      key={colorMode}
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 90, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {colorMode === "dark" ? <LuMoon /> : <LuSun />}
    </motion.span>
  );
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="outline"
        
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          bg: "transparent !important",
          border: "none !important",
          _hover: {
            bg: "transparent !important",
          },
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
});

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    );
  }
);

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    );
  }
);

export const CustomSystem = createSystem(defaultConfig, {
  preflight: false,
});


 
export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { colorMode  } = useColorMode();

  React.useEffect(() => {
    console.log("Current colorMode:", colorMode);

  },[colorMode])
  return (
    <Theme  appearance={colorMode} hasBackground={false}>
    {children}
  </Theme>
  )
 
}