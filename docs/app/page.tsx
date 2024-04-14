import {
  Button,
  Flex,
  Icon,
  IconButton,
  Link,
  Span,
  Stack,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { BsGithub } from "react-icons/bs"
import { AdBanner } from "../components/chakra-pro/ad-banner"
import { ColorModeToggle } from "../components/color-mode-toggle"
import { CommunityGFX } from "../components/community-gfx"
import { Logo, LogoIcon } from "../components/logo"

export default async function Page() {
  return (
    <>
      <AdBanner />
      {/* NavBar */}
      <Flex align="center" py="6" maxW="8xl" mx="auto">
        <Flex align="center" px="8" flex="1">
          <Flex flex="1">
            <NextLink href="/">
              <Logo />
            </NextLink>
          </Flex>
          <Flex flex="1" justify="center" align="center" gap="6">
            {["Docs", "Components", "Documents", "Resources", "Projects"].map(
              (l, i) => (
                <Link
                  data-selected={i == 0 ? "" : undefined}
                  key={i}
                  fontWeight={{ base: "medium", _selected: "semibold" }}
                >
                  {l}
                </Link>
              ),
            )}
          </Flex>
          <Flex flex="1" justify="end" align="center" gap="8">
            <Button size="sm" colorPalette="teal" fontWeight="semibold">
              Get Started
            </Button>
            <Flex gap="4" align="center">
              <IconButton
                aria-label="Open Github repo"
                variant="ghost"
                size="sm"
                cursor="pointer"
                asChild
              >
                <Link href="https://github.com/chakra-ui/chakra-ui" external>
                  <Icon asChild boxSize="6">
                    <BsGithub />
                  </Icon>
                </Link>
              </IconButton>
              <ColorModeToggle />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* Community */}
      <Flex align="center" maxW="8xl" mx="auto" pl="12" justify="space-between">
        <Stack px="8" gap="16">
          <Stack gap="4">
            <Stack gap="2">
              <Span color="#12A594" fontWeight="semibold" fontSize="sm">
                Connect
              </Span>
              <Span fontWeight="bold" fontSize="4xl">
                Meet the people
              </Span>
            </Stack>
            <Span color="#646464" fontWeight="medium" fontSize="lg">
              Feel free to ask questions, report issues, and meet new people.
            </Span>
          </Stack>
          <Button
            size="lg"
            colorPalette="teal"
            rounded="4px"
            px="7"
            w="fit-content"
            asChild
          >
            <Link href="https://discord.com/invite/chakra-ui" external unstyled>
              Join the discord
            </Link>
          </Button>
        </Stack>
        <Flex>
          <CommunityGFX />
        </Flex>
      </Flex>
      {/* Footer */}
      <Flex align="center" py="6" px="12" maxW="8xl" mx="auto">
        <Flex align="center" px="8" gap="8" flex="1">
          <Flex w="20" justify="center">
            <NextLink href="/">
              <LogoIcon />
            </NextLink>
          </Flex>
          <Flex align="center" gap="6">
            {["Product", "Company", "Resources"].map((l, i) => (
              <Link key={i} fontWeight="semibold">
                {l}
              </Link>
            ))}
          </Flex>
          <Flex flex="1" justify="end" align="center" gap="8">
            {["Terms", "Privacy", "Cookies", "Contact"].map((l, i) => (
              <Link key={i} fontWeight="semibold">
                {l}
              </Link>
            ))}
            <Span color="#838383">© 2024 Chakra UI. All rights reserved.</Span>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
