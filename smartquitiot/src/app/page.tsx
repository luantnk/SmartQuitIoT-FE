import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { StatsSection } from "@/components/home/stats-section"
import { LeaderboardSection } from "@/components/home/leaderboard-section"
import { BlogSection } from "@/components/home/blog-section"
import { ResourcesSection } from "@/components/home/resources-section"
import { MembershipSection } from "@/components/home/membership-section"
import { Footer } from "@/components/layout/footer"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <LeaderboardSection />
        <BlogSection />
        <ResourcesSection />
        <MembershipSection />
      </main>
      
      <Footer />
    </div>
  )
}
