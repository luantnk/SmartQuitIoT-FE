import type { Post } from "@/types/community"

export const posts: Post[] = [
  {
    id: "1",
    slug: "5-tips-to-beat-cravings",
    title: "5 Tips to Beat Nicotine Cravings",
    excerpt: "Cravings come in waves—here's how to ride them out with confidence.",
    content:
      "Cravings usually peak within 3–5 minutes. Try the 4Ds: Delay, Deep breathe, Drink water, and Distract yourself. Pair these with light exercise and support from a quit buddy or community.",
    coverImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&auto=format&fit=crop&q=60",
    tags: ["cravings", "mindfulness", "wellness"],
    likes: 128,
    comments: [
      {
        id: "c1",
        author: { id: "u1", name: "Alex Kim" },
        content: "The 4Ds really helped me last week. Day 10 smoke-free!",
        createdAt: new Date().toISOString(),
        likes: 5,
        replies: [
          {
            id: "c1r1",
            author: { id: "u2", name: "Maya" },
            content: "Congrats Alex! Keep going—you've got this.",
            createdAt: new Date().toISOString(),
            likes: 2,
          },
        ],
      },
    ],
    author: { id: "a1", name: "SmartQuit Coach" },
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    slug: "why-your-first-week-matters",
    title: "Why Your First Week Matters",
    excerpt: "Your body starts to repair itself within hours. The first 7 days build momentum.",
    content:
      "Within 24 hours, carbon monoxide levels drop and oxygen increases. Use structured routines, healthy snacks, and guided breathing to anchor your first week.",
    coverImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop&q=60",
    tags: ["first-week", "health", "motivation"],
    likes: 92,
    comments: [],
    author: { id: "a1", name: "SmartQuit Coach" },
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    slug: "community-stories-jordan",
    title: "Community Story: Jordan's Journey",
    excerpt: "After 15 years, Jordan found a system that finally worked.",
    content:
      "Jordan combined mindfulness, hydration, and daily walks to reduce cravings. With community support, Jordan reached 60 days smoke-free and counting.",
    coverImage:
      "https://images.unsplash.com/photo-1520975922284-4c3d8a7625f6?w=1200&auto=format&fit=crop&q=60",
    tags: ["stories", "fitness", "community"],
    likes: 211,
    comments: [],
    author: { id: "u3", name: "Jordan" },
    createdAt: new Date().toISOString(),
  },
]

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug)
