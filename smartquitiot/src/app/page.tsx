import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Homepage } from "@/components/home/homepage"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  )
}
