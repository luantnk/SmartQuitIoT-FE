export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface User extends BaseEntity {
  email: string
  name: string
  avatar?: string
  role: 'member' | 'coach' | 'admin'
  membershipTier: 'free' | 'premium' | 'premium-plus'
  quitDate?: Date
  currentStreak: number
  totalDaysQuit: number
  totalMoneySaved: number
  totalCigarettesAvoided: number
}

export interface SmokingHabit extends BaseEntity {
  userId: string
  brand: string
  price: number
  packSize: number
  nicotineConcentration: number
  quantitySmoked: number
  frequency: 'daily' | 'weekly' | 'occasionally'
  lastSmoked?: Date
}

export interface SmokingDiary extends BaseEntity {
  userId: string
  date: Date
  cigarettesSmoked: number
  cravings: number
  mood: 'great' | 'good' | 'okay' | 'bad' | 'terrible'
  sleep: 'excellent' | 'good' | 'fair' | 'poor'
  breath: 'fresh' | 'normal' | 'bad'
  exercise: boolean
  exerciseMinutes?: number
  notes?: string
  isRelapse: boolean
}

export interface QuitPlan extends BaseEntity {
  userId: string
  title: string
  description: string
  startDate: Date
  targetDate: Date
  milestones: QuitMilestone[]
  status: 'active' | 'completed' | 'paused'
  progress: number
}

export interface QuitMilestone extends BaseEntity {
  quitPlanId: string
  title: string
  description: string
  targetDate: Date
  completedDate?: Date
  status: 'pending' | 'completed' | 'overdue'
  type: 'health' | 'financial' | 'social' | 'personal'
}

export interface Achievement extends BaseEntity {
  userId: string
  title: string
  description: string
  icon: string
  category: 'streak' | 'milestone' | 'community' | 'health' | 'financial'
  unlockedAt: Date
  points: number
}

export interface BlogPost extends BaseEntity {
  authorId: string
  title: string
  content: string
  excerpt: string
  tags: string[]
  category: 'story' | 'tips' | 'science' | 'motivation'
  featuredImage?: string
  likes: number
  comments: number
  views: number
  isPublished: boolean
}

export interface Comment extends BaseEntity {
  postId: string
  userId: string
  content: string
  likes: number
  parentId?: string
}

export interface Resource extends BaseEntity {
  title: string
  description: string
  type: 'article' | 'video' | 'document' | 'infographic'
  url: string
  thumbnail?: string
  tags: string[]
  category: 'beginner' | 'intermediate' | 'advanced'
  views: number
}

export interface MembershipPackage extends BaseEntity {
  name: string
  description: string
  price: number
  currency: string
  duration: number
  features: string[]
  isPopular?: boolean
  isActive: boolean
}

export interface Payment extends BaseEntity {
  userId: string
  packageId: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  paymentMethod: string
  transactionId: string
  gateway: 'payos' | 'stripe' | 'paypal'
}

export interface LeaderboardEntry extends BaseEntity {
  userId: string
  period: 'daily' | 'weekly' | 'monthly'
  periodStart: Date
  periodEnd: Date
  points: number
  rank: number
  achievements: number
  streak: number
  moneySaved: number
}

export interface ChatMessage extends BaseEntity {
  userId: string
  coachId?: string
  content: string
  type: 'user' | 'coach' | 'ai'
  isRead: boolean
  sessionId: string
}

export interface Notification extends BaseEntity {
  userId: string
  title: string
  message: string
  type: 'motivation' | 'reminder' | 'achievement' | 'milestone' | 'system'
  isRead: boolean
  actionUrl?: string
  scheduledAt?: Date
}
