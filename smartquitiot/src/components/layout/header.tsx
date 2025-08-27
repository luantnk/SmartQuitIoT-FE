"use client"

import { useState } from "react"
import Link from "next/link"
import { Box, Container, Flex, HStack, IconButton, Button, Text } from "@chakra-ui/react"
import { FiMenu, FiBell } from "react-icons/fi"

export function Header() {
  const [isLoggedIn] = useState(false)
  const bg = "whiteAlpha.800"
  const border = "gray.200"

  return (
    <Box as="header" position="sticky" top={0} zIndex={50} bg={bg} backdropFilter="saturate(180%) blur(6px)" borderBottomWidth="1px" borderColor={border}>
      <Container maxW="7xl" px={6}>
        <Flex h={16} align="center" justify="space-between">
          <HStack gap={3}>
            <Link href="/" className="flex items-center space-x-2">
              <Flex w={10} h={10} bg="green.500" rounded="full" align="center" justify="center">
                <Text color="white" fontWeight="bold" fontSize="xl">S</Text>
              </Flex>
              <Text as="span" fontSize="xl" fontWeight="bold" color="green.600">SmartQuit</Text>
            </Link>
          </HStack>

          <HStack gap={6} display={{ base: "none", md: "flex" }}>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/community">Community</Link>
            <Link href="/about">About</Link>
          </HStack>

          <HStack gap={3}>
            {isLoggedIn ? (
              <HStack>
                <IconButton aria-label="Notifications" variant="ghost">
                  <FiBell />
                </IconButton>
                <Box w={8} h={8} rounded="full" bg="green.200" />
              </HStack>
            ) : (
              <HStack>
                <Link href="/login"><Button variant="ghost">Login</Button></Link>
                <Link href="/register"><Button colorScheme="green" size="lg">Get Started</Button></Link>
              </HStack>
            )}
            <IconButton aria-label="Menu" display={{ base: "inline-flex", md: "none" }} variant="ghost">
              <FiMenu />
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
