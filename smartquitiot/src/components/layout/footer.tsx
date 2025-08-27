"use client"

import Link from "next/link"
import { Box, Container, SimpleGrid, Stack, Text, HStack, Icon, Input, Button } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md"

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Success Stories", href: "/stories" },
    { name: "Resources", href: "/resources" },
    { name: "API", href: "/api" }
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Community", href: "/community" },
    { name: "FAQ", href: "/faq" },
    { name: "Status", href: "/status" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Accessibility", href: "/accessibility" }
  ]
}
export function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="white">
      <Container maxW="7xl" px={6} py={16}>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={12}>
          <Stack gap={6}>
            <HStack gap={3}>
              <Box w={10} h={10} bg="green.500" rounded="full" display="flex" alignItems="center" justifyContent="center">
                <Text fontWeight="bold">S</Text>
              </Box>
              <Text fontSize="2xl" fontWeight="bold">SmartQuit</Text>
            </HStack>
            <Text color="gray.300">
              Empowering millions of people to quit smoking and live healthier lives. Join our community and start your smoke-free journey today.
            </Text>
            <Stack gap={2} color="gray.300">
              <HStack gap={2}><Icon as={MdMail} /><Text>support@smartquit.com</Text></HStack>
              <HStack gap={2}><Icon as={MdPhone} /><Text>+1 (555) 123-4567</Text></HStack>
              <HStack gap={2}><Icon as={MdLocationOn} /><Text>123 Health Street, Wellness City, WC 12345</Text></HStack>
            </Stack>
          </Stack>
          <Stack gap={3}>
            <Text fontWeight="bold">Product</Text>
            {footerLinks.product.map(link => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
            ))}
          </Stack>
          <Stack gap={3}>
            <Text fontWeight="bold">Support</Text>
            {footerLinks.support.map(link => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
            ))}
          </Stack>
          <Stack gap={3}>
            <Text fontWeight="bold">Company</Text>
            {footerLinks.company.map(link => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
            ))}
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth="1px" borderColor="gray.700" my={12} />

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="center">
          <Text color="gray.400">© 2024 SmartQuit. All rights reserved. Made with ❤️ for a healthier world.</Text>
          <HStack gap={6} justify={{ base: "flex-start", md: "flex-end" }} color="gray.400">
            <Link href="#" aria-label="Facebook"><Icon as={FaFacebook} boxSize={5} /></Link>
            <Link href="#" aria-label="Twitter"><Icon as={FaTwitter} boxSize={5} /></Link>
            <Link href="#" aria-label="Instagram"><Icon as={FaInstagram} boxSize={5} /></Link>
            <Link href="#" aria-label="LinkedIn"><Icon as={FaLinkedin} boxSize={5} /></Link>
            <Link href="#" aria-label="YouTube"><Icon as={FaYoutube} boxSize={5} /></Link>
          </HStack>
        </SimpleGrid>

        <Box mt={16} bg="gray.800" rounded="lg" p={8} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Stay Updated</Text>
          <Text color="gray.300" mb={6}>Get the latest tips, success stories, and updates from our community.</Text>
          <HStack maxW="md" mx="auto" gap={4} flexDir={{ base: "column", sm: "row" }}>
            <Input type="email" placeholder="Enter your email" bg="gray.700" borderColor="gray.600" _placeholder={{ color: "gray.400" }} />
            <Button colorScheme="green">Subscribe</Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}
