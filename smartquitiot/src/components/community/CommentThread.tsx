"use client"

import { Box, HStack, VStack, Text, Avatar, Icon, Stack } from "@chakra-ui/react"
import { FaHeart } from "react-icons/fa"
import type { Comment } from "@/types/community"

type Props = {
  comments: Comment[]
}

export function CommentThread({ comments }: Props) {
  return (
    <VStack align="stretch" spacing={4}>
      {comments.map((c) => (
        <Box key={c.id}>
          <HStack align="start" spacing={3}>
            <Avatar size="sm" name={c.author.name} src={c.author.avatarUrl} />
            <Box flex={1}>
              <HStack spacing={2}>
                <Text fontWeight="semibold" color="gray.700">{c.author.name}</Text>
                <Text fontSize="xs" color="gray.500">{new Date(c.createdAt).toLocaleString()}</Text>
              </HStack>
              <Text mt={1} color="gray.700">{c.content}</Text>
              <HStack mt={2} color="gray.500" spacing={2} fontSize="sm">
                <Icon as={FaHeart} color="red.400" />
                <Text>{c.likes}</Text>
              </HStack>
              {c.replies && c.replies.length > 0 && (
                <Box pl={6} mt={3} borderLeftWidth="1px" borderColor="gray.100">
                  <CommentThread comments={c.replies} />
                </Box>
              )}
            </Box>
          </HStack>
        </Box>
      ))}
    </VStack>
  )
}
