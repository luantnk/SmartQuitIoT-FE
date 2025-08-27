"use client"

import { Box, Container, SimpleGrid, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react"
import { FaUser, FaTrophy, FaDollarSign, FaHeart } from "react-icons/fa"

const stats = [
  { icon: FaUser, title: "Active Members", value: "25k+", description: "People actively using SmartQuit" },
  { icon: FaTrophy, title: "Success Rate", value: "78%", description: "Of users who stay smoke-free" },
  { icon: FaDollarSign, title: "Money Saved", value: "$2.5M+", description: "Total money saved by our community" },
  { icon: FaHeart, title: "Lives Improved", value: "15k+", description: "People who successfully quit" },
]

export function StatsSection() {
  const cardBg = "white"
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bgGradient="linear(to-br, green.50, white)">
      <Container maxW="7xl" px={6}>
        <VStack gap={2} textAlign="center" mb={12}>
          <Heading as="h2" size="xl">SmartQuit by the Numbers</Heading>
          <Text color="gray.600">Join thousands who have transformed their lives</Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8}>
          {stats.map(s => (
            <VStack key={s.title} gap={4} bg={cardBg} rounded="xl" p={8} shadow="lg">
              <HStack w={20} h={20} bg="white" rounded="full" alignItems="center" justifyContent="center" shadow="md">
                <Icon as={s.icon} color="green.600" boxSize={8} />
              </HStack>
              <VStack>
                <Text fontSize="sm" color="gray.600">{s.title}</Text>
                <Text fontSize="2xl" fontWeight="bold" color="green.700">{s.value}</Text>
              </VStack>
              <Text color="gray.600" fontSize="sm">{s.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
        <VStack gap={4} mt={16}>
          <Heading as="h3" size="lg">Be Part of Our Success Story</Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl" textAlign="center">
            Every day, more people join SmartQuit and take control of their health. Start your journey today.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
