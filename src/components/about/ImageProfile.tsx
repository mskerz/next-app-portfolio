"use client";
import { Avatar, HStack, defineStyle } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

const ringCss = (color: string) =>
  defineStyle({
    outlineWidth: "5.5px",
    outlineColor: color,
    outlineOffset: "-1px",
    outlineStyle: "solid",
    width: "200px",
    height: "200px",
    boxShadow: "md",
    borderRadius: "full",
  });

const url = "/image/profile_image.jpg";
function ImageProfile() {
  const color = useColorModeValue("blue.600", "blue.400");

  return (
    <HStack gap="4">
      <Avatar.Root css={ringCss(color)} variant="outline">
        <Avatar.Fallback name="Wichasin Sutthiarj" />
        <Avatar.Image
          userSelect={"none"}
          draggable={false} // ป้องกันการ drag รูป
         onContextMenu={(e) => e.preventDefault()} // ป้องกันการคลิกขวา
          src={url}
        />
      </Avatar.Root>
    </HStack>
  );
}
export default ImageProfile;
