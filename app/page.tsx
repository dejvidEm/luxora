"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { AboutSection } from "@/components/sections/about-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { StatsSection } from "@/components/sections/stats-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { ContactSection } from "@/components/sections/contact-section"
import type { Language } from "@/lib/translations"

export default function CleaningCompanyPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [language, setLanguage] = useState<Language>("sk")

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => {
      const element = el as HTMLElement
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    })

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    setTimeout(() => {
      elements.forEach((el) => observerRef.current?.observe(el))
    }, 100)

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <StatsSection language={language} />
      <ServicesSection language={language} />
      <ProcessSection language={language} />
      <AboutSection language={language} />
      <TestimonialsSection language={language} />
      <FaqSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  )
}
