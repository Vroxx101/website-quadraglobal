import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { PartnersSection } from "@/components/partners-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PT. QUADRA GLOBAL NUSANTARA",
  description: "PT. QUADRA GLOBAL NUSANTARA menyediakan jasa pengaspalan jalan, betonisasi, dan pemasangan paving block di wilayah Bogor, Bandung, dan Jawa Barat.",
  keywords: ["jasa aspal hotmix bogor", "jasa paving block bandung", "kontraktor jalan jawa barat"],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
