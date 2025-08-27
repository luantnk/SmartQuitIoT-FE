"use client"

import { Box, Heading, Text, Image, HStack, Tag, Stack, IconButton, Tooltip, Avatar } from "@chakra-ui/react"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import type { Post } from "@/types/community"

type Props = {
  post: Post
}

export function PostCard({ post }: Props) {
  return (
    <Box
      as={Link}
      href={`/community/${post.slug}`}
      borderWidth="1px"
      rounded="md"
      overflow="hidden"
      bg="white"
      _hover={{ shadow: "md", transform: "translateY(-2px)" }}
      transition="all 0.2s ease"
    >
      <Image src={post.coverImage} alt={post.title} h={48} w="full" objectFit="cover" />
      <Stack p={4} gap={2}>
        <HStack justify="space-between" align="start">
          <Heading size="md" color="gray.800">{post.title}</Heading>
          <Tooltip label={`${post.likes} likes`}>
            <HStack color="red.400" minW="60px" justify="end">
              <FaHeart />
              <Text fontSize="sm">{post.likes}</Text>
            </HStack>
          </Tooltip>
        </HStack>
        <Text color="gray.600" noOfLines={2}>{post.excerpt}</Text>
        <HStack wrap="wrap" gap={2}>
          {post.tags.map((tag) => (
            <Tag key={tag} size="sm" colorScheme="green" variant="subtle">{tag}</Tag>
          ))}
        </HStack>
        <HStack pt={2} spacing={3} color="gray.500">
          <Avatar size="xs" name={post.author.name} src={post.author.avatarUrl} />
          <Text fontSize="xs">By {post.author.name}</Text>
          <Text fontSize="xs">· {new Date(post.createdAt).toLocaleDateString()}</Text>
        </HStack>
      </Stack>
    </Box>
  )
}
