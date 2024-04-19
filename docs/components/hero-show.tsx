"use client"

import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  IconButton,
  Progress,
  Span,
  Stack,
  Switch,
  Text,
  chakra,
} from "@chakra-ui/react"
import Image from "next/image"
import { FaCheck } from "react-icons/fa"
import { IoPauseOutline } from "react-icons/io5"
import { LiaStepBackwardSolid, LiaStepForwardSolid } from "react-icons/lia"
import { LuShuffle } from "react-icons/lu"
import { TbRepeat } from "react-icons/tb"

export const HeroShow = () => (
  <Flex flex="1" hideBelow="md" mt="12">
    <Box display="flex" flexDir="column">
      {/* Cards */}
      <Stack gap="4">
        <Flex gap="4" align="end" mr="-44px">
          {/* Settings Card */}
          <Stack
            p="6"
            gap="6"
            rounded="2xl"
            shadow="xl"
            bg={{ base: "white", _dark: "#191919" }}
            maxW="400px"
          >
            <Stack gap="1">
              <Text textStyle="xl" fontWeight="bold">
                Cookie Settings
              </Text>
              <Text textStyle="sm" color="fg.muted">
                Manage your cookie settings here.
              </Text>
            </Stack>
            <Flex align="center" gap="4">
              <Stack gap="1">
                <Text textStyle="xl" fontWeight="bold">
                  Strictly Necessary
                </Text>
                <Text textStyle="sm" color="fg.muted">
                  These cookies are essential in order to use the website and
                  use its features.
                </Text>
              </Stack>
              <CardSwitch defaultChecked />
            </Flex>

            <Flex align="center" gap="4">
              <Stack gap="1">
                <Text textStyle="xl" fontWeight="bold">
                  Functional Cookies
                </Text>
                <Text textStyle="sm" color="fg.muted">
                  These cookies allow the website to provide personalized
                  functionality.
                </Text>
              </Stack>
              <CardSwitch />
            </Flex>

            <Flex align="center" gap="4">
              <Stack gap="1">
                <Text textStyle="xl" fontWeight="bold">
                  Performance Cookies
                </Text>
                <Text textStyle="sm" color="fg.muted">
                  These cookies help to improve the performance of the website.
                </Text>
              </Stack>
              <CardSwitch />
            </Flex>
            <Button variant="subtle" colorPalette="gray" size="lg">
              Save preferences
            </Button>
          </Stack>
          {/* Stat Card */}
          <Stack
            p="12"
            gap="12"
            rounded="2xl"
            shadow="xl"
            bg={{ base: "white", _dark: "#191919" }}
            w="full"
            maxW="500px"
          >
            <Text textStyle="2xl" fontWeight="bold" color="teal.600">
              Label
            </Text>
            <Stack gap="2">
              <Text textStyle="6xl" fontWeight="bold">
                $29,995
              </Text>
              <Flex align="center" gap="2">
                <Flex align="center" gap="2.5">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2085 6L13.2085 6M18.2085 6L18.2097 11M18.2085 6L6.21143 18"
                      stroke="#30A46C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <Text textStyle="sm" fontWeight="semibold" color="#30A46C">
                    32%
                  </Text>
                </Flex>
                <Text textStyle="sm" fontWeight="semibold" color="fg.muted">
                  from last week
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
        <Flex
          className="dark"
          bg="teal.600"
          color="white"
          rounded="2xl"
          gap="16"
          mr="-24"
        >
          {/* Card */}
          <Stack flex="1" gap="8" p="16">
            <Stack gap="2" maxW="365px">
              <Text fontWeight="semibold" fontSize="sm">
                Grow with confidence
              </Text>
              <Text fontWeight="bold" fontSize="4xl" lineHeight="44px">
                Explore how we can help scale your business
              </Text>
            </Stack>
            <Flex gap="4">
              <Button
                size="lg"
                fontWeight="semibold"
                rounded="sm"
                _dark={{
                  color: "teal.600",
                }}
              >
                Solid Button
              </Button>
              <Button
                size="lg"
                fontWeight="semibold"
                rounded="sm"
                _dark={{
                  bg: { base: "transparent", _hover: "whiteAlpha.400" },
                  color: "white",
                  border: "solid 1px currentColor",
                }}
              >
                Secondary Button
              </Button>
            </Flex>
          </Stack>
          {/* Phone */}
          <Flex flex="1" mt="-40" pr="16">
            <Flex pos="relative" flex="1">
              <MobilePhone />
              <Stack
                pos="absolute"
                bottom="0"
                left="10"
                right="10"
                w="280px"
                className="dark"
                bg="teal.600"
                color="white"
                rounded="2xl"
                gap="6"
                p="6"
                pb="10"
              >
                <Stack gap="4">
                  <Text textStyle="sm" fontWeight="semibold">
                    Now Playing
                  </Text>
                  <Stack gap="1">
                    <Text textStyle="2xl" fontWeight="bold">
                      Secrets of the City Lights
                    </Text>
                    <Text textStyle="xs" fontWeight="medium">
                      Chakra UI
                    </Text>
                  </Stack>
                </Stack>
                <Flex color="teal.600" gap="2" align="center">
                  <IconButton
                    aria-label="Shuffle"
                    p="2"
                    variant="ghost"
                    rounded="full"
                  >
                    <Icon asChild boxSize="6">
                      <LuShuffle />
                    </Icon>
                  </IconButton>
                  <IconButton
                    aria-label="Backward"
                    p="2"
                    variant="ghost"
                    rounded="full"
                  >
                    <Icon asChild boxSize="6">
                      <LiaStepBackwardSolid />
                    </Icon>
                  </IconButton>
                  <IconButton
                    aria-label="Pause/Play"
                    variant="solid"
                    boxSize="10"
                    rounded="full"
                  >
                    <Icon asChild boxSize="6">
                      <IoPauseOutline />
                    </Icon>
                  </IconButton>
                  <IconButton
                    aria-label="Forward"
                    p="2"
                    variant="ghost"
                    rounded="full"
                  >
                    <Icon asChild boxSize="6">
                      <LiaStepForwardSolid />
                    </Icon>
                  </IconButton>
                  <IconButton
                    aria-label="Repeat"
                    p="2"
                    variant="ghost"
                    rounded="full"
                  >
                    <Icon asChild boxSize="6">
                      <TbRepeat />
                    </Icon>
                  </IconButton>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
      {/* Media Player */}
      <Flex
        zIndex="2"
        ml="-174px"
        mt="-6"
        p="6"
        rounded="2xl"
        shadow="xl"
        bg={{ base: "white", _dark: "#191919" }}
        gap="12"
      >
        <Flex color="teal.600" gap="2" align="center">
          <IconButton
            aria-label="Shuffle"
            p="2"
            variant="ghost"
            rounded="full"
            colorPalette="teal"
          >
            <Icon asChild boxSize="6">
              <LuShuffle />
            </Icon>
          </IconButton>
          <IconButton
            aria-label="Backward"
            p="2"
            variant="ghost"
            rounded="full"
            colorPalette="teal"
          >
            <Icon asChild boxSize="6">
              <LiaStepBackwardSolid />
            </Icon>
          </IconButton>
          <IconButton
            colorPalette="teal"
            aria-label="Pause/Play"
            variant="solid"
            boxSize="10"
            rounded="full"
          >
            <Icon asChild boxSize="6">
              <IoPauseOutline />
            </Icon>
          </IconButton>
          <IconButton
            aria-label="Forward"
            p="2"
            variant="ghost"
            rounded="full"
            colorPalette="teal"
          >
            <Icon asChild boxSize="6">
              <LiaStepForwardSolid />
            </Icon>
          </IconButton>
          <IconButton
            aria-label="Repeat"
            p="2"
            variant="ghost"
            rounded="full"
            colorPalette="teal"
          >
            <Icon asChild boxSize="6">
              <TbRepeat />
            </Icon>
          </IconButton>
        </Flex>
        <Flex gap="4" align="center">
          <Span
            display="inline-flex"
            alignItems="center"
            flexShrink="0"
            width="78px"
            height="78px"
            position="relative"
            rounded="lg"
            overflow="clip"
          >
            <Image src="/album.jpeg" alt="Album Image" fill loading="lazy" />
          </Span>
          <Stack gap="2" justify="center">
            <Text
              fontWeight="bold"
              textStyle="3xl"
              whiteSpace="nowrap"
              color="teal.600"
              lineHeight="1"
            >
              Secrets of the City Lights
            </Text>
            <Span fontWeight="medium" fontSize="xs">
              Chakra UI
            </Span>
            <Progress.Root value={30} colorPalette="teal" w="624px">
              <Progress.Track>
                <Progress.FilledTrack />
              </Progress.Track>
            </Progress.Root>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  </Flex>
)
const CardSwitch = (props: Switch.RootProps) => {
  return (
    <Switch.Root {...props} colorPalette="teal">
      <Switch.Track>
        <Switch.Thumb
          _checked={{
            bg: "bg",
          }}
          asChild
        >
          <Center>
            <Icon
              display="none"
              css={{
                "[data-checked] &": { display: "initial" },
              }}
              asChild
              boxSize="3"
              color="colorPalette.600"
            >
              <FaCheck />
            </Icon>
          </Center>
        </Switch.Thumb>
      </Switch.Track>
      <Switch.Label>Label</Switch.Label>
    </Switch.Root>
  )
}

function MobilePhone() {
  return (
    <chakra.svg
      width="439"
      height="877"
      viewBox="0 0 429 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g clipPath="url(#clip0_2302_2425)" filter="url(#filter0_dddd_2302_2425)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78 0H361C393.032 0 419.006 25.9675 419.014 58L419.045 183.171C420.21 183.583 421.045 184.694 421.045 186L421.066 269C421.066 270.306 420.231 271.417 419.066 271.829L419.19 778C419.198 810.032 393.237 836 361.204 836H78.2041C46.1716 836 20.1978 810.032 20.1899 778L20.0695 284.829C18.9042 284.417 18.0692 283.306 18.0688 282L18.0571 234C18.0568 232.694 18.8913 231.582 20.0564 231.171L20.052 212.829C18.8867 212.417 18.0516 211.306 18.0513 210L18.0395 162C18.0392 160.694 18.8738 159.583 20.0389 159.171L20.0329 134.829C18.8676 134.417 18.0325 133.306 18.0322 132L18.0261 107C18.0258 105.694 18.8603 104.583 20.0254 104.171L20.0142 58C20.0063 25.9675 45.9675 0 78 0Z"
          fill="black"
        />
        <mask
          id="mask0_2302_2425"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="32"
          y="12"
          width="376"
          height="812"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.0761 55.5812C32.0348 56.3822 32.014 57.1887 32.0142 58L32.1899 778C32.1961 803.405 52.796 824 78.2012 824H361.201C386.606 824 407.196 803.405 407.19 778L407.014 58C407.014 57.9008 407.014 57.8016 407.013 57.7025C406.847 32.4344 386.309 12 361.003 12H303.919C300.473 13.2126 298.004 16.4966 298.005 20.3572C298.008 32.5864 288.097 42.5 275.868 42.5H163.153C150.924 42.5 141.008 32.5864 141.005 20.3572C141.004 16.4966 138.533 13.2126 135.087 12H78.0029C66.5404 12 56.0582 16.1925 48.0057 23.1278C44.9036 25.7994 42.162 28.8781 39.8639 32.281C35.3281 38.9974 32.5197 46.9766 32.0761 55.5812Z"
            fill="#F1F1F1"
          />
        </mask>
        <g mask="url(#mask0_2302_2425)">
          <rect
            width="375"
            height="812"
            transform="matrix(1 0 0.000244133 1 32.0029 12)"
            fill="url(#pattern0_2302_2425)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dddd_2302_2425"
          x="0.130953"
          y="0"
          width="438.942"
          height="876.205"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.76726" />
          <feGaussianBlur stdDeviation="1.1069" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.030926 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2302_2425"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6.6501" />
          <feGaussianBlur stdDeviation="2.66004" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0444282 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2302_2425"
            result="effect2_dropShadow_2302_2425"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12.5216" />
          <feGaussianBlur stdDeviation="5.00862" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.055 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_2302_2425"
            result="effect3_dropShadow_2302_2425"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="22.3363" />
          <feGaussianBlur stdDeviation="8.93452" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0655718 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_2302_2425"
            result="effect4_dropShadow_2302_2425"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_2302_2425"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_2302_2425"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_2302_2425"
            transform="matrix(0.00133333 0 0 0.000615764 -0.58 0)"
          />
        </pattern>
        <clipPath id="clip0_2302_2425">
          <rect
            width="403"
            height="836"
            fill="white"
            transform="matrix(1 0 0.000244133 1 18 0)"
          />
        </clipPath>
        <image
          id="image0_2302_2425"
          width="1620"
          height="1624"
          xlinkHref="/phone-wallpaper.jpeg"
        />
      </defs>
    </chakra.svg>
  )
}
