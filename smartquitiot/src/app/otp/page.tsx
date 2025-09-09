"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  PinInput,
  PinInputField,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react"
import NextLink from "next/link"

export default function OtpPage() {
  const params = useSearchParams()
  const email = params.get("email") ?? ""
  const router = useRouter()
  const toast = useToast()

  const [code, setCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const isComplete = code.length === 6

  const handleVerify = () => {
    if (!isComplete) return
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      toast({
        title: "Verified",
        description: "OTP verified successfully. Welcome!",
        status: "success",
        duration: 2000,
        isClosable: true,
      })
      router.push(`/reset-password?email=${encodeURIComponent(email)}`)
    }, 1000)
  }

  const handleResend = () => {
    setIsResending(true)
    setTimeout(() => {
      setIsResending(false)
      toast({
        title: "OTP resent",
        description: `A new 6-digit code has been sent to ${email || "your email"}.`,
        status: "info",
        duration: 2000,
        isClosable: true,
      })
    }, 800)
  }

  return (
    <Box minH="100vh" bg="green.50">
      <Container maxW="lg" px={6} py={16}>
        <VStack spacing={8} bg="white" rounded="2xl" shadow="xl" p={{ base: 6, md: 10 }} borderWidth="1px" borderColor="green.100">
          <VStack spacing={1} textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">Verify OTP</Text>
            <Text color="gray.600">Enter the 6-digit code sent to {email ? <strong>{email}</strong> : "your email"}.</Text>
          </VStack>

          <FormControl>
            <FormLabel color="gray.700" textAlign="center">One-Time Password</FormLabel>
            <HStack justify="center">
              <PinInput value={code} onChange={setCode} otp autoFocus>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </FormControl>

          <VStack w="full" spacing={3}>
            <Button size="lg" w="full" bg="#7AC555" backgroundColor="#7AC555" color="white" _hover={{ bg: "#6BB04B" }}
              onClick={handleVerify} isDisabled={!isComplete} isLoading={isVerifying} loadingText="Verifying...">
              Verify & Continue
            </Button>
            <Button variant="outline" borderColor="#7AC555" color="#7AC555" _hover={{ bg: "#E8F7EC" }}
              onClick={handleResend} isLoading={isResending} loadingText="Resending...">Resend code</Button>
          </VStack>

          <NextLink href="/login">
            <Button variant="link" color="#7AC555">Back to login</Button>
          </NextLink>
        </VStack>
      </Container>
    </Box>
  )
}
