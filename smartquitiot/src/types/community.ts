export type User = {
  id: string
  name: string
  avatarUrl?: string
}

export type Comment = {
  id: string
  author: User
  content: string
  createdAt: string
  likes: number
  replies?: Comment[]
}

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  tags: string[]
  likes: number
  comments: Comment[]
  author: User
  createdAt: string
}
