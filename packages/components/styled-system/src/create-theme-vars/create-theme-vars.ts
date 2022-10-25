import { isObject } from "@chakra-ui/shared-utils"
import { calc, Operand } from "./calc"
import { FlatToken, FlatTokens } from "./flatten-tokens"
import { pseudoSelectors } from "../pseudos"
import mergeWith from "lodash.mergewith"
import { tokenToCssVar } from "./token-to-css-var"

export interface CreateThemeVarsOptions {
  cssVarPrefix?: string
}

function getPaletteName(path: string[]) {
  if (path.includes("colorPalette")) return ""
  const clone = [...path]
  clone.pop()
  clone.shift()
  return clone.join(".")
}

export interface ThemeVars {
  cssVars: Record<string, any>
  cssMap: Record<string, any>
}

export function createThemeVars(
  flatTokens: FlatTokens,
  options: CreateThemeVarsOptions,
) {
  let cssVars: Record<string, any> = {}
  const cssMap: Record<string, any> = {}

  for (const [token, tokenValue] of Object.entries<FlatToken>(flatTokens)) {
    const { isSemantic, value } = tokenValue
    const { variable, reference } = tokenToCssVar(token, options?.cssVarPrefix)

    if (!isSemantic) {
      const keys = token.split(".")
      if (token.startsWith("space")) {
        const [firstKey, ...referenceKeys] = keys
        /** @example space.-4 */
        const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`
        const negativeValue = calc.negate(value as Operand)
        const negatedReference = calc.negate(reference)
        cssMap[negativeLookupKey] = {
          value: negativeValue,
          var: variable,
          varRef: negatedReference,
          path: keys,
          palette: getPaletteName(keys),
        }
      }

      cssVars[variable] = value
      cssMap[token] = {
        value,
        var: variable,
        varRef: reference,
        path: keys,
        palette: getPaletteName(keys),
      }
      continue
    }

    const keys = String(token).split(".")

    const lookupToken = (maybeToken: string) => {
      const scale = keys[0]
      const withScale = [scale, maybeToken].join(".")
      /** @example flatTokens['space.4'] === '16px' */
      const resolvedTokenValue = flatTokens[withScale]
      if (!resolvedTokenValue) return maybeToken
      const { reference } = tokenToCssVar(withScale, options?.cssVarPrefix)
      return reference
    }

    const normalizedValue = isObject(value) ? value : { default: value }

    cssVars = mergeWith(
      cssVars,
      Object.entries(normalizedValue).reduce(
        (acc, [conditionAlias, conditionValue]) => {
          if (!conditionValue) return acc
          const maybeReference = lookupToken(String(conditionValue))
          if (conditionAlias === "default") {
            acc[variable] = maybeReference
            return acc
          }

          /** @example { _dark: "#fff" } => { '.chakra-ui-dark': "#fff" } */
          const conditionSelector =
            (pseudoSelectors as any)?.[conditionAlias] ?? conditionAlias
          acc[conditionSelector] = { [variable]: maybeReference }

          return acc
        },
        {} as any,
      ),
    )

    cssMap[token] = {
      value: reference,
      var: variable,
      varRef: reference,
      path: keys,
      palette: getPaletteName(keys),
    }
  }

  return {
    cssVars,
    cssMap,
  }
}
