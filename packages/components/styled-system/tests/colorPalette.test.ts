import { createColorPalettesCssVars } from "../src"

describe("colorPalette", () => {
  it("should do something", () => {
    const semanticColorPaletteTokens = createColorPalettesCssVars({
      colors: {
        red: {
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
    })

    expect(semanticColorPaletteTokens).toMatchInlineSnapshot(`
      Object {
        "colorPalette": Object {
          "200": "var(--colorPalette-200)",
          "300": "var(--colorPalette-300)",
          "400": "var(--colorPalette-400)",
          "500": "var(--colorPalette-500)",
        },
      }
    `)
  })
})
