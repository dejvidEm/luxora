"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { translations, type Language } from "@/lib/translations"
import { AuroraText } from "@/components/magicui/aurora-text";

interface HeroSectionProps {
  language: Language
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-38 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              {t.hero.title.split(" ").slice(0, 1).join(" ")}
              <span className="block text-yellow-600 animate-gradient">
                <AuroraText>{t.hero.title.split(" ").slice(1, 2).join(" ")}</AuroraText>
              </span>
              <span className="block text-gray-900">{t.hero.title.split(" ").slice(2).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-yellow-600 text-white hover:bg-yellow-700 hover:shadow-lg transition-all duration-300 text-lg px-10 py-6 rounded-2xl group cursor-pointer"
              >
                {t.hero.bookNow}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 rounded-2xl border-2 border-gray-300 hover:text-gray-900 hover:border-yellow-600 hover:bg-white transition-all duration-300 bg-transparent text-gray-700 cursor-pointer"
              >
                {t.hero.learnMore}
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-xl opacity-50" />
              <img
                src="/minimalist-home-interior.png"
                alt="Clean modern interior"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 border-6 border-gray-900 p-16 rounded-xl shadow-xl animate-float">
              </div>
              <div className="absolute -top-8 -z-1 -right-8 border-6 border-gray-900 p-20 rounded-xl shadow-xl animate-float">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-200 rounded-full animate-float blur-xl opacity-60" />
      <div
        className="absolute bottom-32 right-16 w-48 h-48 bg-yellow-50 rounded-full animate-float blur-xl opacity-70"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-20 w-24 h-24 bg-yellow-200 rounded-full animate-float blur-xl opacity-50"
        style={{ animationDelay: "2s" }}
      />
    </section>
  )
}
