"use client"

import { Icon, IconButton } from "@chakra-ui/react"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <IconButton
      aria-label="toggle color mode"
      onClick={toggleColorMode}
      variant="ghost"
      size="sm"
      cursor="pointer"
    >
      <Icon asChild boxSize="6" display={{ _light: "none" }}>
        <LuSun />
      </Icon>
      <Icon asChild boxSize="6" display={{ _dark: "none" }}>
        <LuMoon />
      </Icon>
    </IconButton>
  )
}
