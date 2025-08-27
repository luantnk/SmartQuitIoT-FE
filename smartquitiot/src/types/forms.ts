import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  quitDate: z.date().optional(),
  smokingHabits: z.object({
    brand: z.string().optional(),
    price: z.number().min(0).optional(),
    packSize: z.number().min(1).optional(),
    frequency: z.enum(["daily", "weekly", "occasionally"]).optional(),
  }).optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const smokingHabitSchema = z.object({
  brand: z.string().min(1, "Brand is required"),
  price: z.number().min(0, "Price must be positive"),
  packSize: z.number().min(1, "Pack size must be at least 1"),
  nicotineConcentration: z.number().min(0, "Nicotine concentration must be positive"),
  quantitySmoked: z.number().min(0, "Quantity must be positive"),
  frequency: z.enum(["daily", "weekly", "occasionally"]),
})

export const smokingDiarySchema = z.object({
  date: z.date(),
  cigarettesSmoked: z.number().min(0),
  cravings: z.number().min(0).max(10),
  mood: z.enum(["great", "good", "okay", "bad", "terrible"]),
  sleep: z.enum(["excellent", "good", "fair", "poor"]),
  breath: z.enum(["fresh", "normal", "bad"]),
  exercise: z.boolean(),
  exerciseMinutes: z.number().min(0).optional(),
  notes: z.string().optional(),
  isRelapse: z.boolean(),
})

export const quitPlanSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  startDate: z.date(),
  targetDate: z.date(),
  milestones: z.array(z.object({
    title: z.string().min(1, "Milestone title is required"),
    description: z.string().min(5, "Milestone description is required"),
    targetDate: z.date(),
    type: z.enum(["health", "financial", "social", "personal"]),
  })).optional(),
})

export const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(100, "Content must be at least 100 characters"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  category: z.enum(["story", "tips", "science", "motivation"]),
  featuredImage: z.string().optional(),
})

export const commentSchema = z.object({
  content: z.string().min(1, "Comment cannot be empty").max(500, "Comment too long"),
  parentId: z.string().optional(),
})

export type LoginForm = z.infer<typeof loginSchema>
export type RegisterForm = z.infer<typeof registerSchema>
export type SmokingHabitForm = z.infer<typeof smokingHabitSchema>
export type SmokingDiaryForm = z.infer<typeof smokingDiarySchema>
export type QuitPlanForm = z.infer<typeof quitPlanSchema>
export type BlogPostForm = z.infer<typeof blogPostSchema>
export type CommentForm = z.infer<typeof commentSchema>
