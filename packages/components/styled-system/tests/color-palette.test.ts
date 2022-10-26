import { createColorPalettesCssVars } from "../src/create-theme-vars/create-palette-vars"
import { css, toCSSVar } from "../src"

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
  sizes: {
    lg: "20rem",
  },
}

describe("colorPalette", () => {
  it("should create css vars", () => {
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

  it("should create a map for all color palettes", () => {
    const result = toCSSVar(tokens)
    expect(result).toMatchInlineSnapshot(
      {
        __breakpoints: expect.any(Object),
        __cssVars: expect.any(Object),
        __cssMap: expect.any(Object),
        colors: expect.any(Object),
        sizes: expect.any(Object),
      },
      `
      Object {
        "__breakpoints": Any<Object>,
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
        "__cssMap": Any<Object>,
        "__cssVars": Any<Object>,
        "colors": Any<Object>,
        "sizes": Any<Object>,
      }
    `,
    )
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
