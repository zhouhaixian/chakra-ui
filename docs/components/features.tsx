"use client"

import { Box, Flex, chakra } from "@chakra-ui/react"
import * as chakraScope from "@chakra-ui/react"
import { Highlight as BaseHighlight, themes } from "prism-react-renderer"
import React from "react"
import { LivePreview, LiveProvider } from "react-live-runner"

const initialCode = `
export default function Demo() {
  const [count, setCount] = React.useState(0)

  return (
    <Flex
      align="center"
      justify="center"
      w="320px"
      h="400px"
      bg={{ base:"white", _dark: "#191919" }}
      shadow="md"
      rounded="md"
    >
      <Button
        colorPalette="teal"
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </Button>
    </Flex>
  )
}
`.trim()

export const Features = ({ id }: { id: string }) => {
  const showLines = false
  return (
    <Flex align="center" mdDown={{ flexDir: "column" }}>
      <BaseHighlight code={initialCode} language="js" theme={themes.vsDark}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            w="full"
            fontSize="sm"
            overflowX="auto"
            fontFamily="SF Mono, Menlo, monospace"
            data-language="js"
          >
            <chakra.pre
              bgColor="#222 !important"
              rounded="lg"
              py="4"
              className={className}
              style={style}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                return (
                  <chakra.div key={i} px="5" {...lineProps}>
                    {showLines && (
                      <chakra.span opacity={0.3} mr="6" fontSize="xs">
                        {i + 1}
                      </chakra.span>
                    )}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </chakra.div>
                )
              })}
            </chakra.pre>
          </Box>
        )}
      </BaseHighlight>
      <Box ml="-8">
        <LiveProvider code={initialCode} scope={{ ...React, ...chakraScope }}>
          <LivePreview />
        </LiveProvider>
      </Box>
    </Flex>
  )
}
