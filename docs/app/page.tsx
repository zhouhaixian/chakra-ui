import {
  Avatar,
  Button,
  Flex,
  Icon,
  IconButton,
  Link,
  Span,
  Stack,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { BsDiscord, BsGithub, BsLightningCharge } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { AdBanner } from "../components/chakra-pro/ad-banner"
import { ColorModeToggle } from "../components/color-mode-toggle"
import { CommunityGFX } from "../components/community-gfx"
import { Logo, LogoIcon } from "../components/logo"
import { StatsGFX } from "../components/stats-gfx"
import { getStats } from "../utils/get-stats"
import { splitNumUnit } from "../utils/number-formatter"

export default async function Page() {
  const stats = await getStats()

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
      {/* Stats */}
      <Flex
        align="center"
        maxW="8xl"
        mx="auto"
        px="12"
        pos="relative"
        direction="column"
      >
        <Stack px="8" py="32" gap="16" justify="center" flex="1">
          <Stack gap="4">
            <Stack gap="2">
              <Span color="#12A594" fontWeight="semibold" fontSize="sm">
                Stats
              </Span>
              <Span fontWeight="bold" fontSize="4xl">
                Chakra is growing quickly
              </Span>
            </Stack>
            <Span color="#646464" fontWeight="medium" fontSize="lg">
              We're dedicated to improving the experience and performance of
              Chakra UI.
            </Span>
          </Stack>
          <Flex gap="32">
            {[
              {
                description: "Downloads per month",
                icon: HiDownload,
                count: stats.npmDownloads,
              },
              {
                description: "Github Stars",
                icon: BsGithub,
                count: stats.githubStars,
              },
              {
                description: "Core contributors",
                icon: BsLightningCharge,
                count: stats.members.length.toString(),
              },
              {
                description: "Discord members",
                icon: BsDiscord,
                count: stats.discordMembers,
              },
            ].map((stat) => {
              console.log(stat.count)

              const count = splitNumUnit(stat.count)
              return (
                <Stack gap="1" key={stat.description}>
                  <Flex fontSize="7xl" align="center" fontWeight="bold">
                    {count?.[0]}
                    <Span textTransform="uppercase" fontSize="6xl">
                      {count?.[1]}
                    </Span>
                  </Flex>
                  <Flex gap="2" align="center">
                    <Icon asChild boxSize="6">
                      <stat.icon />
                    </Icon>
                    <Span fontWeight="medium" color="#646464">
                      {stat.description}
                    </Span>
                  </Flex>
                </Stack>
              )
            })}
          </Flex>
          <Stack gap="8">
            <Span fontWeight="bold" fontSize="xl">
              Our Heroes
            </Span>
            <Avatar.Group size="xl">
              {stats.members.map((mem: any, i: number) => (
                <Avatar.Root key={i}>
                  <Avatar.Image src={mem.avatar_url} />
                  <Avatar.Fallback name={mem.name} />
                </Avatar.Root>
              ))}
            </Avatar.Group>
          </Stack>
        </Stack>
        <StatsGFX />
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
