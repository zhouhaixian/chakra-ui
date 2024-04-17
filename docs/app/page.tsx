import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Circle,
  Flex,
  Icon,
  IconButton,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Span,
  Stack,
  Tabs,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import { BsDiscord, BsGithub, BsLightningCharge } from "react-icons/bs"
import { HiDownload, HiOutlineArrowNarrowRight } from "react-icons/hi"
import { AdBanner } from "../components/chakra-pro/ad-banner"
import { ChargedIcon } from "../components/charged-icon"
import { ColorModeToggle } from "../components/color-mode-toggle"
import { CommunityGFX } from "../components/community-gfx"
import {
  Accessible,
  Composable,
  LightAndDark,
  Themeable,
} from "../components/icons"
import { Logo, LogoIcon } from "../components/logo"
import { StatsGFX } from "../components/stats-gfx"
import json from "../configs/showcase.json"
import tweets from "../configs/tweets.json"
import { getStats } from "../utils/get-stats"
import { splitNumUnit } from "../utils/number-formatter"

const websites = json.data.slice(0, 8)

export default async function Page() {
  const stats = await getStats()

  return (
    <Box pos="relative">
      <AdBanner />

      {/* NavBar */}
      <Flex align="center" py="6" maxW="8xl" mx="auto">
        <Flex
          align="center"
          px="8"
          flex="1"
          mdDown={{
            flexWrap: "wrap",
            gap: "6",
          }}
        >
          <Flex flex="1">
            <NextLink href="/">
              <Logo />
            </NextLink>
          </Flex>
          <Flex
            flex="1"
            justify="center"
            align="center"
            gap="6"
            mdDown={{
              order: "2",
              flexBasis: "full",
              justifyContent: "space-between",
            }}
          >
            {["Docs", "Components", "Documents", "Resources", "Projects"].map(
              (l, i) => (
                <Link
                  data-selected={i == 0 ? "" : undefined}
                  key={i}
                  fontWeight={{ base: "medium", _selected: "bold" }}
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

      {/* Features */}
      <Stack px="8" py="16" gap="16" flex="1" maxW="8xl" mx="auto">
        <Stack gap="16">
          <Stack gap="4">
            <Stack gap="2">
              <Span color="fg.accent" fontWeight="semibold" fontSize="sm">
                Features
              </Span>
              <Span fontWeight="bold" fontSize="4xl">
                Chakra packs a bunch of cool features
              </Span>
            </Stack>
            <Span color="fg.muted" fontWeight="medium" fontSize="lg">
              Spend less time writing UI code and more time building a great
              experience for your customers.
            </Span>
          </Stack>

          <Stack>
            <Tabs.Root
              defaultValue={FEATURES[0].label}
              colorPalette="teal"
              mt="3"
              minW="300px"
              display="flex"
              flexDir="column"
              gap="8"
            >
              <Tabs.List borderColor="transparent">
                {FEATURES.map((f) => (
                  <Tabs.Trigger
                    value={f.label}
                    key={f.label}
                    px={{ base: "4", md: "10" }}
                    py={{ base: "2", md: "4" }}
                    fontWeight="semibold"
                    cursor="pointer"
                    asChild
                  >
                    <Stack gap="2">
                      <Icon asChild boxSize="8">
                        {f.icon}
                      </Icon>
                      {f.label}
                    </Stack>
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <Tabs.ContentGroup>
                {FEATURES.map((f) => (
                  <Tabs.Content value={f.label} padding="2" key={f.label}>
                    <Text fontSize="sm">{f.label}</Text>
                  </Tabs.Content>
                ))}
              </Tabs.ContentGroup>
            </Tabs.Root>
          </Stack>
        </Stack>
      </Stack>

      {/* Case studies */}
      <Stack
        gap="16"
        flex="1"
        maxW="8xl"
        mx="auto"
        px="8"
        pt={{ base: "12", lg: "32" }}
      >
        <Stack gap="4">
          <Stack gap="2">
            <Span color="fg.accent" fontWeight="semibold" fontSize="sm">
              Case Studies
            </Span>
            <Span fontWeight="bold" fontSize="4xl">
              Built with Chakra
            </Span>
          </Stack>
          <Span color="fg.muted" fontWeight="medium" fontSize="lg">
            Your project can look as good as these! Check them out
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
          <Link href="/showcase" external unstyled>
            <span>View Showcases</span>
            <Icon asChild>
              <HiOutlineArrowNarrowRight />
            </Icon>
          </Link>
        </Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="8" w="full">
          {websites.map(({ name, image, url }) => (
            <LinkBox
              cursor="pointer"
              pos="relative"
              key={url}
              shadow={{ base: "xs", _hover: "lg" }}
              transition="all 0.2s ease"
              rounded="lg"
              overflow="clip"
            >
              <AspectRatio ratio={16 / 9} w="full">
                <Image
                  height={200}
                  width={300}
                  alt={name}
                  style={{ objectFit: "cover" }}
                  src={
                    image
                      ? /^(https|http)/.test(image)
                        ? image
                        : `/${image}`
                      : "/og-image.png"
                  }
                />
              </AspectRatio>
              <LinkOverlay href={url} external>
                <Text
                  fontWeight="semibold"
                  textAlign="start"
                  fontSize={{ base: "sm", md: "md" }}
                  pos="absolute"
                  bottom="4"
                  right="4"
                  shadow="md"
                  rounded="full"
                  display="flex"
                  gap="3"
                  alignItems="center"
                  px="2"
                  py="1.5"
                  bg="bg"
                >
                  {name}
                  <Icon asChild boxSize="6">
                    <HiOutlineArrowNarrowRight />
                  </Icon>
                </Text>
              </LinkOverlay>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Stack>

      {/* Stats */}
      <Flex
        maxW="8xl"
        mx="auto"
        pt={{ base: "16", lg: "32" }}
        direction="column"
      >
        <Stack px="8" py="32" gap="16" justify="center" flex="1">
          <Stack gap="4">
            <Stack gap="2">
              <Span color="fg.accent" fontWeight="semibold" fontSize="sm">
                Stats
              </Span>
              <Span fontWeight="bold" fontSize="4xl">
                Chakra is growing quickly
              </Span>
            </Stack>
            <Span color="fg.muted" fontWeight="medium" fontSize="lg">
              We're dedicated to improving the experience and performance of
              Chakra UI.
            </Span>
          </Stack>
          <SimpleGrid
            gap={{ base: "8", lg: "32" }}
            columns={{ base: 2, lg: 4 }}
          >
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
                    <Span fontWeight="medium" color="fg.muted">
                      {stat.description}
                    </Span>
                  </Flex>
                </Stack>
              )
            })}
          </SimpleGrid>
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

      {/* Pro */}
      <Stack
        gap="16"
        align="center"
        textAlign="center"
        px="8"
        pt={{ base: "12", lg: "24" }}
        pb="16"
        flex="1"
        maxW="8xl"
        mx="auto"
      >
        <Stack gap="4">
          <Stack gap="2">
            <Span color="fg.accent" fontWeight="semibold" fontSize="sm">
              Premium
            </Span>
            <Span fontWeight="bold" fontSize="4xl">
              Go faster. Go Pro.
            </Span>
          </Stack>
          <Span color="fg.muted" fontWeight="medium" fontSize="lg">
            Beautiful and responsive React components to build your application
            or marketing pages quicker.
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
            <span>Learn more</span>
            <Icon asChild>
              <HiOutlineArrowNarrowRight />
            </Icon>
          </Link>
        </Button>
        <Image
          src="/chakra-ui-ad.png"
          alt="Chakra UI Pro Image"
          layout="responsive"
          width="1200"
          height="320"
        />
      </Stack>

      {/* Praise */}
      <Stack px="8" gap="16" flex="1" maxW="8xl" mx="auto" py="24">
        <Stack gap="16" align="center" textAlign="center">
          <Stack gap="4">
            <Stack gap="2">
              <Span color="fg.accent" fontWeight="semibold" fontSize="sm">
                Praise
              </Span>
              <Span fontWeight="bold" fontSize="4xl">
                Loved by product people like you
              </Span>
            </Stack>
            <Span color="fg.muted" fontWeight="medium" fontSize="lg">
              The proof is in the praise.
            </Span>
          </Stack>
          <SimpleGrid
            gap="2"
            minH="1180px"
            w="full"
            columns={{ base: 1, lg: 3 }}
          >
            {/* Masonry grid */}
            {chunk(tweets.tweets, 3).map((list, i1) => {
              const span = [
                [62, 22, 16],
                [26, 31, 43],
                [45, 32, 23],
              ]
              return (
                <Stack gap="2" key={i1}>
                  {list.map(({ name, handle, content, url }, i) => (
                    <Flex
                      key={i}
                      borderRadius="8px"
                      gap="4"
                      h={{ base: "auto", lg: span[i1][i] + "%" }}
                      border="solid 1px"
                      borderColor={{ base: "gray.200", _dark: "gray.800" }}
                      direction="column"
                      justify="space-between"
                      align="start"
                      p="8"
                      data-c1={i1 == 0 && i == 0 ? "" : undefined}
                      data-c2={i1 == 1 && i == 2 ? "" : undefined}
                      data-c3={i1 == 2 && i == 0 ? "" : undefined}
                      lg={{
                        "&:not([data-c1], [data-c2], [data-c3]) .charged": {
                          display: "none",
                        },
                        "&:not([data-c1], [data-c2], [data-c3]) .content": {
                          fontSize: "sm",
                        },

                        "&:is([data-c1], [data-c2], [data-c3]) .content": {
                          fontWeight: "semibold",
                        },

                        "&[data-c1]": {
                          borderColor: "teal.500",
                          bg: "teal.500",
                          "& *": {
                            color: "white",
                          },
                        },
                        "&:is([data-c2], [data-c3])": {
                          borderColor: "teal.500",
                          bg: { _dark: "#191919" },
                          "& .content, & .name": {
                            color: "fg",
                          },
                          "& .charged": {
                            color: "fg.accent",
                          },
                        },
                      }}
                      lgDown={{
                        "& .charged": {
                          display: "none",
                        },
                      }}
                      asChild
                    >
                      <a href={url} target="_blank" rel="noreferrer">
                        <Flex direction="column" gap="16">
                          <ChargedIcon />
                          <Box
                            as="p"
                            mt="2"
                            textAlign="start"
                            color="fg.muted"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: content.replace(/--/g, "<br /><br />"),
                            }}
                          />
                        </Flex>
                        <Flex gap="4" align="center">
                          <Span
                            display="inline-flex"
                            alignItems="center"
                            flexShrink="0"
                            width="12"
                            height="12"
                            position="relative"
                            rounded="full"
                            overflow="clip"
                          >
                            <Image
                              alt={name}
                              fill
                              src={`/avatars/${handle}.jpg`}
                              loading="lazy"
                            />
                          </Span>
                          <Stack align="start" gap="1">
                            <Span fontWeight="semibold" className="name">
                              {name}
                            </Span>
                            <Span className="handle" color="fg.muted">
                              {handle}
                            </Span>
                          </Stack>
                        </Flex>
                      </a>
                    </Flex>
                  ))}
                </Stack>
              )
            })}
          </SimpleGrid>
        </Stack>
      </Stack>

      {/* Sponsor */}
      <Stack
        px="8"
        py={{ base: "16", lg: "32" }}
        gap="16"
        justify="center"
        flex="1"
        maxW="8xl"
        mx="auto"
      >
        <Stack gap="4">
          <Stack gap="2">
            <Span color="fg.accent" fontWeight="semibold" fontSize="sm">
              Support
            </Span>
            <Span fontWeight="bold" fontSize="4xl">
              Buy us a coffee
            </Span>
          </Stack>
          <Span color="fg.muted" fontWeight="medium" fontSize="lg">
            Our maintainers devote their time, effort, and heart to ensure
            Chakra UI keeps getting better. <br />
            Support us by donating to our collective 🙏
          </Span>
        </Stack>
        <Stack gap={{ base: "16", lg: "32" }}>
          {METAL_TIERS.map((t, i) => (
            <Stack gap="4" key={t}>
              <Span
                fontSize="xl"
                fontWeight="bold"
                color={i !== 0 ? "fg.accent" : "inherit"}
              >
                {t}
              </Span>
              <SponsorGroup
                sponsors={stats.sponsors.companies.filter((c) =>
                  i == 3 ? !METAL_TIERS.includes(c.tier) : c.tier === t,
                )}
              />
            </Stack>
          ))}
        </Stack>

        <Stack gap="8">
          <Span fontWeight="bold" fontSize="xl">
            Individual Sponsors
          </Span>
          <Wrap>
            {stats.sponsors.individuals.map((i: any) => (
              <WrapItem key={i.MemberId}>
                <Circle
                  size="10"
                  bg="bg.panel"
                  shadow="sm"
                  {...(i.profile && {
                    as: "a",
                    href: i.profile,
                    target: "_blank",
                    rel: "noopener",
                  })}
                >
                  <Box
                    asChild
                    rounded="full"
                    cursor={i.profile ? "pointer" : "auto"}
                    h="10"
                    objectFit="contain"
                  >
                    <Image
                      width={40}
                      height={40}
                      alt={i.name}
                      title={i.name}
                      key={i.MemberId}
                      src={i.image}
                      loading="lazy"
                    />
                  </Box>
                </Circle>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Stack>

      {/* Community */}
      <Flex align="center" maxW="8xl" mx="auto" justify="space-between">
        <Stack px="8" gap="16">
          <Stack gap="4">
            <Stack gap="2">
              <Span color="fg.accent" fontWeight="semibold" fontSize="sm">
                Connect
              </Span>
              <Span fontWeight="bold" fontSize="4xl">
                Meet the people
              </Span>
            </Stack>
            <Span color="fg.muted" fontWeight="medium" fontSize="lg">
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
        <Flex hideBelow="md">
          <CommunityGFX />
        </Flex>
      </Flex>

      {/* Footer */}
      <Flex
        align="center"
        px="8"
        gap="8"
        flex="1"
        pt="20"
        pb="6"
        maxW="8xl"
        mx="auto"
        mdDown={{ flexDir: "column" }}
      >
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
        <Flex
          flex="1"
          justify="end"
          align="center"
          gap="8"
          mdDown={{ flexDir: "column" }}
        >
          <Flex align="center" gap="8">
            {["Terms", "Privacy", "Cookies", "Contact"].map((l, i) => (
              <Link key={i} fontWeight="semibold">
                {l}
              </Link>
            ))}
          </Flex>
          <Span color="fg.muted">© 2024 Chakra UI. All rights reserved.</Span>
        </Flex>
      </Flex>
    </Box>
  )
}

function chunk<T>(array: T[], size: number): T[][] {
  return array.reduce((rows: T[][], currentValue: T, index: number) => {
    if (index % size === 0) {
      rows.push([currentValue])
    } else {
      rows[rows.length - 1].push(currentValue)
    }
    return rows
  }, [] as T[][])
}

function SponsorGroup({ sponsors }: any) {
  return (
    <Wrap align="center" gap="4">
      {sponsors.map((i: any) => (
        <WrapItem key={i.MemberId}>
          <Circle
            size="20"
            bg="bg.panel"
            shadow="lg"
            {...(i.website && {
              as: "a",
              href: i.website,
              target: "_blank",
              rel: "noopener",
            })}
          >
            <Box
              asChild
              rounded="full"
              cursor={i.website ? "pointer" : "auto"}
              h="56px"
              objectFit="contain"
            >
              <Image
                width={56}
                height={56}
                alt={i.name}
                title={i.name}
                key={i.MemberId}
                src={i.image}
                loading="lazy"
              />
            </Box>
          </Circle>
        </WrapItem>
      ))}
    </Wrap>
  )
}

const METAL_TIERS = [
  "Gold Sponsor  🥇",
  "Silver Sponsor 🥈",
  "Bronze Sponsor 🥉",
  "Backers 💚",
]

const FEATURES = [
  {
    label: "Accessible",
    icon: <Accessible />,
  },
  {
    label: "Themeable",
    icon: <Themeable />,
  },
  {
    label: "Composable",
    icon: <Composable />,
  },
  {
    label: "Light & Dark Mode",
    icon: <LightAndDark />,
  },
]
