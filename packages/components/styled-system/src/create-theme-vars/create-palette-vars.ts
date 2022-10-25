import { tokenToCssVar } from "./token-to-css-var"
import { walkObject } from "../utils/walk-object"
import { flatten } from "./flatten-tokens"

export function createColorPalettesCssVars(
  tokens: Record<string, any>,
  cssVarPrefix?: string,
) {
  const keys = new Set<string>()

  walkObject(tokens.colors, (_value, path) => {
    if (path.length <= 1) {
      return
    }
    const prev = path[path.length - 1]
    keys.add(prev)
  })

  const colorPalette = [...keys].reduce((previousValue, currentValue) => {
    previousValue[currentValue] = tokenToCssVar(
      `colors.colorPalette.${currentValue}`,
      cssVarPrefix,
    ).reference
    return previousValue
  }, {} as Record<string, string>)

  return flatten({ colorPalette }, 1)
}
