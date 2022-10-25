import { cssVar } from "./css-var"

/**
 * Convert a token name to a css variable
 *
 * @example
 * tokenToCssVar('colors.red.500', 'chakra')
 * => {
 *   variable: '--chakra-colors-red-500',
 *   reference: 'var(--chakra-colors-red-500)'
 * }
 */
export function tokenToCssVar(token: string | number, prefix?: string) {
  return cssVar(String(token).replace(/\./g, "-"), undefined, prefix)
}
