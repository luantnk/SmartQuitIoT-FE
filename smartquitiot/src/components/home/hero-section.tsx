"use client"

import Link from "next/link"
import { Box, Container, SimpleGrid, Heading, Text, Button, HStack, VStack, Icon } from "@chakra-ui/react"
import { FaHeart, FaTrophy, FaDollarSign } from "react-icons/fa"

export function HeroSection() {
  const statBg = "white"
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bgGradient="linear(to-br, green.50, white)">
      <Container maxW="7xl" px={6}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
          <VStack align="start" gap={6}>
            <Text textTransform="uppercase" letterSpacing="widest" color="green.700" fontWeight="semibold">Begin today</Text>
            <Heading as="h1" size="2xl" lineHeight="short" color="gray.900">
              Your Journey to a <Text as="span" color="green.600">Smoke‑Free Life</Text>
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Join thousands who have successfully quit with SmartQuit. Get personalized support, track progress, and achieve your smoke‑free goals.
            </Text>
            <HStack gap={4} flexWrap="wrap">
              <Link href="/register"><Button colorScheme="green" size="lg">Start Your Journey</Button></Link>
              <Link href="/how-it-works"><Button variant="ghost" size="lg">How It Works</Button></Link>
            </HStack>
            <SimpleGrid columns={{ base: 2, sm: 4 }} gap={6} pt={4} w="full">
              <VStack bg={statBg} rounded="lg" p={4} shadow="md" gap={1}>
                <Text fontSize="sm" color="gray.600">Active Users</Text>
                <Text fontSize="2xl" fontWeight="bold" color="green.600">25k+</Text>
              </VStack>
              <VStack bg={statBg} rounded="lg" p={4} shadow="md" gap={1}>
                <Text fontSize="sm" color="gray.600">Success Rate</Text>
                <Text fontSize="2xl" fontWeight="bold" color="green.600">78%</Text>
              </VStack>
              <VStack bg={statBg} rounded="lg" p={4} shadow="md" gap={1}>
                <Text fontSize="sm" color="gray.600">Days Average</Text>
                <Text fontSize="2xl" fontWeight="bold" color="green.600">45</Text>
              </VStack>
              <VStack bg={statBg} rounded="lg" p={4} shadow="md" gap={1}>
                <Text fontSize="sm" color="gray.600">Money Saved</Text>
                <Text fontSize="2xl" fontWeight="bold" color="green.600">$500</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
          <Box bg={statBg} rounded="2xl" shadow="lg" p={8}>
            <VStack gap={6} textAlign="left" align="stretch">
              <Box w={24} h={24} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center" mx="auto">
                <Icon as={FaTrophy} color="green.600" boxSize={8} />
              </Box>
              <Heading as="h3" size="lg">Why Choose SmartQuit?</Heading>
              <VStack align="start" gap={4}>
                <HStack gap={3}><Icon as={FaHeart} color="green.500" /><Text color="gray.600">Personalized quit plans</Text></HStack>
                <HStack gap={3}><Icon as={FaTrophy} color="yellow.500" /><Text color="gray.600">Achievement tracking</Text></HStack>
                <HStack gap={3}><Icon as={FaDollarSign} color="green.600" /><Text color="gray.600">Financial impact monitoring</Text></HStack>
              </VStack>
              <Link href="/features"><Button variant="outline" colorScheme="green" alignSelf="flex-start">Learn More →</Button></Link>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
