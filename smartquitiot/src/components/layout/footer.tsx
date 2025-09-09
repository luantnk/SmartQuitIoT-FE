"use client"

import Link from "next/link"
import Image from "next/image"
import { Box, Container, SimpleGrid, Stack, Text, HStack, Icon, Input, Button } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md"
import logoImg from "@/assets/logo/logo.png"

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
    <Box as="footer" bg="green.50" color="gray.800" borderTopWidth="1px" borderColor="green.100">
      <Container maxW="7xl" px={6} py={16}>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={12}>
          <Stack gap={6}>
            <HStack gap={3}>
              <Box w={20} h={20} position="relative">
                <Image src={logoImg} alt="SmartQuit logo" fill style={{ objectFit: "contain" }} />
              </Box>
              <Text fontSize="2xl" fontWeight="bold" color="green.700">SmartQuit</Text>
            </HStack>
            <Text color="gray.600">
              Empowering millions of people to quit smoking and live healthier lives. Join our community and start your smoke-free journey today.
            </Text>
            <Stack gap={2} color="gray.600">
              <HStack gap={2}><Icon as={MdMail} color="#7AC555" /><Text>support@smartquit.com</Text></HStack>
              <HStack gap={2}><Icon as={MdPhone} color="#7AC555" /><Text>+1 (555) 123-4567</Text></HStack>
              <HStack gap={2}><Icon as={MdLocationOn} color="#7AC555" /><Text>123 Health Street, Wellness City, WC 12345</Text></HStack>
            </Stack>
          </Stack>
          <Stack gap={3}>
            <Text fontWeight="bold" color="green.700">Product</Text>
            {footerLinks.product.map(link => (
              <Link key={link.name} href={link.href}>
                <Text color="gray.600" _hover={{ color: "green.600" }} transition="color 0.2s">
                  {link.name}
                </Text>
              </Link>
            ))}
          </Stack>
          <Stack gap={3}>
            <Text fontWeight="bold" color="green.700">Support</Text>
            {footerLinks.support.map(link => (
              <Link key={link.name} href={link.href}>
                <Text color="gray.600" _hover={{ color: "green.600" }} transition="color 0.2s">
                  {link.name}
                </Text>
              </Link>
            ))}
          </Stack>
          <Stack gap={3}>
            <Text fontWeight="bold" color="green.700">Company</Text>
            {footerLinks.company.map(link => (
              <Link key={link.name} href={link.href}>
                <Text color="gray.600" _hover={{ color: "green.600" }} transition="color 0.2s">
                  {link.name}
                </Text>
              </Link>
            ))}
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth="1px" borderColor="green.200" my={12} />

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="center">
          <Text color="gray.500">© 2024 SmartQuit. All rights reserved. Made with ❤️ for a healthier world.</Text>
          <HStack gap={6} justify={{ base: "flex-start", md: "flex-end" }} color="#7AC555">
            <Link href="#" aria-label="Facebook">
              <Icon as={FaFacebook} boxSize={5} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Icon as={FaInstagram} boxSize={5} />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Icon as={FaYoutube} boxSize={5} />
            </Link>
          </HStack>
        </SimpleGrid>

        <Box mt={16} bg="white" rounded="lg" p={8} textAlign="center" boxShadow="sm" borderWidth="1px" borderColor="green.100">
          <Text fontSize="2xl" fontWeight="bold" mb={4} color="green.700">Stay Updated</Text>
          <Text color="gray.600" mb={6}>Get the latest tips, success stories, and updates from our community.</Text>
          <HStack maxW="md" mx="auto" gap={4} flexDir={{ base: "column", sm: "row" }}>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              bg="gray.50" 
              borderColor="green.200" 
              _placeholder={{ color: "gray.400" }}
              _focus={{ borderColor: "green.400", boxShadow: "0 0 0 1px var(--chakra-colors-green-400)" }}
            />
            <Button colorScheme="green" size="sm">Subscribe</Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}
