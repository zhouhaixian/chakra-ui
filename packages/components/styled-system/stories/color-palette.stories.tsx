import * as React from "react"
import { chakra } from "../../system"

export default {
  title: "System / css",
}

export const ColorPalette = () => {
  return (
    <>
      <chakra.div colorPalette="red" background="colorPalette.500">
        red color palette
      </chakra.div>
      <chakra.div colorPalette="green" background="colorPalette.500">
        green color palette
      </chakra.div>
      <chakra.div colorPalette="blue" background="colorPalette.500">
        blue color palette
      </chakra.div>
      <chakra.div
        colorPalette="pink"
        background="colorPalette.500"
        sx={{ '[data-theme="dark"] &': { colorPalette: "yellow" } }}
      >
        pink color palette in light mode and yellow in dark mode
      </chakra.div>
    </>
  )
}
