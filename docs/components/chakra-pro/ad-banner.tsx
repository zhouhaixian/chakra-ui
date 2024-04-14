import { Center, Flex, Link, Text } from "@chakra-ui/react"
import { getUrl } from "./get-url"

export const AdBanner = () => {
  return (
    <Center
      py="2"
      px="3"
      bgGradient="to-r"
      gradientFrom="cyan.700"
      gradientTo="purple.500"
      color="white"
      textAlign="center"
    >
      <Flex align="center" fontSize="sm">
        <Text fontWeight="medium" maxW={{ base: "32ch", md: "unset" }}>
          Build faster with <b>Premium Chakra</b> UI Components 💎
        </Text>
        <Link
          unstyled
          flexShrink={0}
          href={getUrl("ad-banner")}
          ms="6"
          bg="blackAlpha.300"
          color="whiteAlpha.900"
          fontWeight="semibold"
          px="3"
          py="1"
          rounded="sm"
        >
          Learn more
        </Link>
      </Flex>
    </Center>
  )
}
