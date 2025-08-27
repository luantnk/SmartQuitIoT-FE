"use client"

import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { StatsSection } from "@/components/home/stats-section"

export function Homepage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
    </div>
  )
}


