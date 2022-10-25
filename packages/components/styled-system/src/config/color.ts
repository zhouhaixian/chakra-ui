import * as CSS from "csstype"
import { t, Token } from "../utils"
import { Config } from "../utils/prop-config"

export const color: Config = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke"),
  colorPalette: {
    transform(value, theme) {
      return theme.__colorPalettes?.[value]
    },
  },
}

export interface ColorProps {
  /**
   * The CSS `color` property
   */
  textColor?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `color` property
   */
  color?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: Token<CSS.Property.Color, "colors">
  /**
   * Create CSS variables for each color value in the specified color palette
   * Follow up with renaming colorSchemes to colorPalettes in the generated CLI typings
   */
  colorPalette?: Token<string, "colorSchemes">
}
