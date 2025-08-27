import { Container, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react"
import { posts } from "@/data/community"
import { PostCard } from "@/components/community/PostCard"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Container maxW="6xl" py={{ base: 6, md: 10 }}>
          <VStack align="start" spacing={2} mb={6}>
            <Heading size={{ base: "lg", md: "xl" }} color="gray.800">Community</Heading>
            <Text color="gray.600">Stories, tips, and motivation from SmartQuit coaches and members.</Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </SimpleGrid>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
