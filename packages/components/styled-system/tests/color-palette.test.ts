import { createColorPalettesCssVars } from "../src/create-theme-vars/create-palette-vars"
import { toCSSVar } from "../src/create-theme-vars/to-css-var"
import { css } from "../src/css"

const tokens = {
  colors: {
    red: {
      50: "#fff5f5",
      200: "#ff0000",
      300: "#ff0000",
      400: "#ff0000",
      500: "#ff0000",
    },
    green: {
      200: "#00ff00",
      300: "#00ff00",
      400: "#00ff00",
      500: "#00ff00",
    },
    gray: {
      blue: {
        200: "#f0f0f0",
        300: "#f0f0f0",
        400: "#f0f0f0",
        500: "#f0f0f0",
      },
      light: {
        200: "#f0f0f0",
        300: "#f0f0f0",
        400: "#f0f0f0",
        500: "#f0f0f0",
      },
    },
    primary: "tomato",
    secondary: "cyan",
  },
}

describe("colorPalette", () => {
  it("should do something", () => {
    const semanticColorPaletteTokens = createColorPalettesCssVars(tokens)
    expect(semanticColorPaletteTokens).toMatchInlineSnapshot(`
      Object {
        "colorPalette.200": "var(--colors-colorPalette-200)",
        "colorPalette.300": "var(--colors-colorPalette-300)",
        "colorPalette.400": "var(--colors-colorPalette-400)",
        "colorPalette.50": "var(--colors-colorPalette-50)",
        "colorPalette.500": "var(--colors-colorPalette-500)",
      }
    `)
  })

  it("should do something - 2", () => {
    const result = toCSSVar(tokens)
    expect(result).toMatchInlineSnapshot(`
      Object {
        "__breakpoints": null,
        "__colorPalettes": Object {
          "gray.blue": Object {
            "--colors-colorPalette-200": "var(--colors-gray-blue-200)",
            "--colors-colorPalette-300": "var(--colors-gray-blue-300)",
            "--colors-colorPalette-400": "var(--colors-gray-blue-400)",
            "--colors-colorPalette-500": "var(--colors-gray-blue-500)",
          },
          "gray.light": Object {
            "--colors-colorPalette-200": "var(--colors-gray-light-200)",
            "--colors-colorPalette-300": "var(--colors-gray-light-300)",
            "--colors-colorPalette-400": "var(--colors-gray-light-400)",
            "--colors-colorPalette-500": "var(--colors-gray-light-500)",
          },
          "green": Object {
            "--colors-colorPalette-200": "var(--colors-green-200)",
            "--colors-colorPalette-300": "var(--colors-green-300)",
            "--colors-colorPalette-400": "var(--colors-green-400)",
            "--colors-colorPalette-500": "var(--colors-green-500)",
          },
          "red": Object {
            "--colors-colorPalette-200": "var(--colors-red-200)",
            "--colors-colorPalette-300": "var(--colors-red-300)",
            "--colors-colorPalette-400": "var(--colors-red-400)",
            "--colors-colorPalette-50": "var(--colors-red-50)",
            "--colors-colorPalette-500": "var(--colors-red-500)",
          },
        },
        "__cssMap": Object {
          "colors.colorPalette.200": Object {
            "palette": "",
            "path": Array [
              "colors",
              "colorPalette",
              "200",
            ],
            "value": "var(--colors-colorPalette-200)",
            "var": "--colors-colorPalette-200",
            "varRef": "var(--colors-colorPalette-200)",
          },
          "colors.colorPalette.300": Object {
            "palette": "",
            "path": Array [
              "colors",
              "colorPalette",
              "300",
            ],
            "value": "var(--colors-colorPalette-300)",
            "var": "--colors-colorPalette-300",
            "varRef": "var(--colors-colorPalette-300)",
          },
          "colors.colorPalette.400": Object {
            "palette": "",
            "path": Array [
              "colors",
              "colorPalette",
              "400",
            ],
            "value": "var(--colors-colorPalette-400)",
            "var": "--colors-colorPalette-400",
            "varRef": "var(--colors-colorPalette-400)",
          },
          "colors.colorPalette.50": Object {
            "palette": "",
            "path": Array [
              "colors",
              "colorPalette",
              "50",
            ],
            "value": "var(--colors-colorPalette-50)",
            "var": "--colors-colorPalette-50",
            "varRef": "var(--colors-colorPalette-50)",
          },
          "colors.colorPalette.500": Object {
            "palette": "",
            "path": Array [
              "colors",
              "colorPalette",
              "500",
            ],
            "value": "var(--colors-colorPalette-500)",
            "var": "--colors-colorPalette-500",
            "varRef": "var(--colors-colorPalette-500)",
          },
          "colors.gray.blue.200": Object {
            "palette": "gray.blue",
            "path": Array [
              "colors",
              "gray",
              "blue",
              "200",
            ],
            "value": "#f0f0f0",
            "var": "--colors-gray-blue-200",
            "varRef": "var(--colors-gray-blue-200)",
          },
          "colors.gray.blue.300": Object {
            "palette": "gray.blue",
            "path": Array [
              "colors",
              "gray",
              "blue",
              "300",
            ],
            "value": "#f0f0f0",
            "var": "--colors-gray-blue-300",
            "varRef": "var(--colors-gray-blue-300)",
          },
          "colors.gray.blue.400": Object {
            "palette": "gray.blue",
            "path": Array [
              "colors",
              "gray",
              "blue",
              "400",
            ],
            "value": "#f0f0f0",
            "var": "--colors-gray-blue-400",
            "varRef": "var(--colors-gray-blue-400)",
          },
          "colors.gray.blue.500": Object {
            "palette": "gray.blue",
            "path": Array [
              "colors",
              "gray",
              "blue",
              "500",
            ],
            "value": "#f0f0f0",
            "var": "--colors-gray-blue-500",
            "varRef": "var(--colors-gray-blue-500)",
          },
          "colors.gray.light.200": Object {
            "palette": "gray.light",
            "path": Array [
              "colors",
              "gray",
              "light",
              "200",
            ],
            "value": "#f0f0f0",
            "var": "--colors-gray-light-200",
            "varRef": "var(--colors-gray-light-200)",
          },
          "colors.gray.light.300": Object {
            "palette": "gray.light",
            "path": Array [
              "colors",
              "gray",
              "light",
              "300",
            ],
            "value": "#f0f0f0",
            "var": "--colors-gray-light-300",
            "varRef": "var(--colors-gray-light-300)",
          },
          "colors.gray.light.400": Object {
            "palette": "gray.light",
            "path": Array [
              "colors",
              "gray",
              "light",
              "400",
            ],
            "value": "#f0f0f0",
            "var": "--colors-gray-light-400",
            "varRef": "var(--colors-gray-light-400)",
          },
          "colors.gray.light.500": Object {
            "palette": "gray.light",
            "path": Array [
              "colors",
              "gray",
              "light",
              "500",
            ],
            "value": "#f0f0f0",
            "var": "--colors-gray-light-500",
            "varRef": "var(--colors-gray-light-500)",
          },
          "colors.green.200": Object {
            "palette": "green",
            "path": Array [
              "colors",
              "green",
              "200",
            ],
            "value": "#00ff00",
            "var": "--colors-green-200",
            "varRef": "var(--colors-green-200)",
          },
          "colors.green.300": Object {
            "palette": "green",
            "path": Array [
              "colors",
              "green",
              "300",
            ],
            "value": "#00ff00",
            "var": "--colors-green-300",
            "varRef": "var(--colors-green-300)",
          },
          "colors.green.400": Object {
            "palette": "green",
            "path": Array [
              "colors",
              "green",
              "400",
            ],
            "value": "#00ff00",
            "var": "--colors-green-400",
            "varRef": "var(--colors-green-400)",
          },
          "colors.green.500": Object {
            "palette": "green",
            "path": Array [
              "colors",
              "green",
              "500",
            ],
            "value": "#00ff00",
            "var": "--colors-green-500",
            "varRef": "var(--colors-green-500)",
          },
          "colors.primary": Object {
            "palette": "",
            "path": Array [
              "colors",
              "primary",
            ],
            "value": "tomato",
            "var": "--colors-primary",
            "varRef": "var(--colors-primary)",
          },
          "colors.red.200": Object {
            "palette": "red",
            "path": Array [
              "colors",
              "red",
              "200",
            ],
            "value": "#ff0000",
            "var": "--colors-red-200",
            "varRef": "var(--colors-red-200)",
          },
          "colors.red.300": Object {
            "palette": "red",
            "path": Array [
              "colors",
              "red",
              "300",
            ],
            "value": "#ff0000",
            "var": "--colors-red-300",
            "varRef": "var(--colors-red-300)",
          },
          "colors.red.400": Object {
            "palette": "red",
            "path": Array [
              "colors",
              "red",
              "400",
            ],
            "value": "#ff0000",
            "var": "--colors-red-400",
            "varRef": "var(--colors-red-400)",
          },
          "colors.red.50": Object {
            "palette": "red",
            "path": Array [
              "colors",
              "red",
              "50",
            ],
            "value": "#fff5f5",
            "var": "--colors-red-50",
            "varRef": "var(--colors-red-50)",
          },
          "colors.red.500": Object {
            "palette": "red",
            "path": Array [
              "colors",
              "red",
              "500",
            ],
            "value": "#ff0000",
            "var": "--colors-red-500",
            "varRef": "var(--colors-red-500)",
          },
          "colors.secondary": Object {
            "palette": "",
            "path": Array [
              "colors",
              "secondary",
            ],
            "value": "cyan",
            "var": "--colors-secondary",
            "varRef": "var(--colors-secondary)",
          },
        },
        "__cssVars": Object {
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
          "--colors-colorPalette-200": "var(--colors-colorPalette-200)",
          "--colors-colorPalette-300": "var(--colors-colorPalette-300)",
          "--colors-colorPalette-400": "var(--colors-colorPalette-400)",
          "--colors-colorPalette-50": "var(--colors-colorPalette-50)",
          "--colors-colorPalette-500": "var(--colors-colorPalette-500)",
          "--colors-gray-blue-200": "#f0f0f0",
          "--colors-gray-blue-300": "#f0f0f0",
          "--colors-gray-blue-400": "#f0f0f0",
          "--colors-gray-blue-500": "#f0f0f0",
          "--colors-gray-light-200": "#f0f0f0",
          "--colors-gray-light-300": "#f0f0f0",
          "--colors-gray-light-400": "#f0f0f0",
          "--colors-gray-light-500": "#f0f0f0",
          "--colors-green-200": "#00ff00",
          "--colors-green-300": "#00ff00",
          "--colors-green-400": "#00ff00",
          "--colors-green-500": "#00ff00",
          "--colors-primary": "tomato",
          "--colors-red-200": "#ff0000",
          "--colors-red-300": "#ff0000",
          "--colors-red-400": "#ff0000",
          "--colors-red-50": "#fff5f5",
          "--colors-red-500": "#ff0000",
          "--colors-secondary": "cyan",
        },
        "colors": Object {
          "gray": Object {
            "blue": Object {
              "200": "#f0f0f0",
              "300": "#f0f0f0",
              "400": "#f0f0f0",
              "500": "#f0f0f0",
            },
            "light": Object {
              "200": "#f0f0f0",
              "300": "#f0f0f0",
              "400": "#f0f0f0",
              "500": "#f0f0f0",
            },
          },
          "green": Object {
            "200": "#00ff00",
            "300": "#00ff00",
            "400": "#00ff00",
            "500": "#00ff00",
          },
          "primary": "tomato",
          "red": Object {
            "200": "#ff0000",
            "300": "#ff0000",
            "400": "#ff0000",
            "50": "#fff5f5",
            "500": "#ff0000",
          },
          "secondary": "cyan",
        },
      }
    `)
  })

  it("should work - 3", () => {
    const theme = toCSSVar(tokens)
    expect(
      css({
        colorPalette: "green",
        "--button-bg": "colors.colorPalette.400",
        _dark: {
          "--button-bg": "colors.colorPalette.500",
        },
      })(theme),
    ).toMatchInlineSnapshot(`
      Object {
        "--button-bg": "var(--colors-colorPalette-400)",
        "--colors-colorPalette-200": "var(--colors-green-200)",
        "--colors-colorPalette-300": "var(--colors-green-300)",
        "--colors-colorPalette-400": "var(--colors-green-400)",
        "--colors-colorPalette-500": "var(--colors-green-500)",
        ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]": Object {
          "--button-bg": "var(--colors-colorPalette-500)",
        },
      }
    `)
  })
})
