"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack, useToast } from "@chakra-ui/react"

export default function ResetPasswordPage() {
  const params = useSearchParams()
  const email = params.get("email") ?? ""
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ password?: string; confirm?: string }>({})
  const toast = useToast()
  const router = useRouter()

  const validate = () => {
    const e: { password?: string; confirm?: string } = {}
    if (!password || password.length < 6) e.password = "Password must be at least 6 characters"
    if (confirm !== password) e.confirm = "Passwords do not match"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({ title: "Password updated", description: "Your password has been reset.", status: "success", duration: 2000, isClosable: true })
      router.push("/login")
    }, 1000)
  }

  return (
    <Box minH="100vh" bg="green.50">
      <Container maxW="md" py={16}>
        <VStack bg="white" rounded="2xl" shadow="xl" p={8} spacing={6} borderWidth="1px" borderColor="green.100">
          <Text fontSize="2xl" fontWeight="bold">Set a New Password</Text>
          <Text color="gray.600">{email ? `For ${email}` : "Enter your new password below."}</Text>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={5}>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>New Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} bg="gray.50" />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.confirm}>
                <FormLabel>Confirm New Password</FormLabel>
                <Input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} bg="gray.50" />
                <FormErrorMessage>{errors.confirm}</FormErrorMessage>
              </FormControl>

              <Button type="submit" w="full" size="lg" bg="#7AC555" backgroundColor="#7AC555" color="white" _hover={{ bg: "#6BB04B" }} isLoading={isLoading} loadingText="Saving...">
                Save Password
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  )
}
