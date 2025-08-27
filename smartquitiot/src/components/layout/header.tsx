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
            <Link href="/">
              <HStack gap={2} align="center">
                <Flex w={10} h={10} bg="green.500" rounded="full" align="center" justify="center">
                  <Text color="white" fontWeight="bold" fontSize="xl">S</Text>
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="green.600">SmartQuit</Text>
              </HStack>
            </Link>
          </HStack>

          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            <Link href="/">
              <Text fontWeight="medium" color="gray.700" _hover={{ color: "green.600", cursor: "pointer" }} transition="color 0.2s">
                Home
              </Text>
            </Link>
            <Link href="/dashboard">
              <Text fontWeight="medium" color="gray.700" _hover={{ color: "green.600", cursor: "pointer" }} transition="color 0.2s">
                Dashboard
              </Text>
            </Link>
            <Link href="/resources">
              <Text fontWeight="medium" color="gray.700" _hover={{ color: "green.600", cursor: "pointer" }} transition="color 0.2s">
                Resources
              </Text>
            </Link>
            <Link href="/community">
              <Text fontWeight="medium" color="gray.700" _hover={{ color: "green.600", cursor: "pointer" }} transition="color 0.2s">
                Community
              </Text>
            </Link>
            <Link href="/about">
              <Text fontWeight="medium" color="gray.700" _hover={{ color: "green.600", cursor: "pointer" }} transition="color 0.2s">
                About
              </Text>
            </Link>
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
