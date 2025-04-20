'use client'
import { Avatar, HStack, defineStyle } from "@chakra-ui/react"
import { useColorModeValue } from "../ui/color-mode"


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
  })

const url = 'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.15752-9/480469677_622899590447932_6717161625139851109_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG84ELbVVyvwTcgVhSWMXm_7v2a0IF6xkzu_ZrQgXrGTD11yHBko6e95iNATql32l-g0a1MG3k2P61dmvDL9JB7&_nc_ohc=FnlObfHQihgQ7kNvwH5Gpcv&_nc_oc=AdnXjRZN876OkM5T7cu7ThtmeiXn4awvV7wBKhgUVVIjFYhXxRBJqSVJ0Z1vZrdxs0I&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&oh=03_Q7cD2AHoJveBsVZ8Wla-r0j57yyDAByqbYyZzEQHuioDhPT0Wg&oe=68292BAF'
function ImageProfile() {
  const color = useColorModeValue("blue.600", "blue.400")
  
  return (
    <HStack gap="4">
      <Avatar.Root css={ringCss(color)}     variant="outline">
        <Avatar.Fallback name="Random" />
        <Avatar.Image src={url} />
      </Avatar.Root>
    </HStack>
  )
}
export default ImageProfile