"use client"

import { Phone } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface CtaSectionProps {
  language: Language
}

export function CtaSection({ language }: CtaSectionProps) {
  const t = translations[language]

  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
        <div className="flex items-center justify-center mb-8">
          <div className="p-2 bg-white/20 rounded-xl mr-3">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <span className="text-blue-100 font-bold text-sm tracking-wide uppercase">{t.cta.badge}</span>
        </div>
        <h2 className="font-heading text-5xl md:text-6xl font-bold mb-10">{t.cta.title}</h2>
        <p className="text-xl text-blue-100 mb-16 leading-relaxed max-w-2xl mx-auto">{t.cta.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Phone className="h-8 w-8 text-white mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-3">{t.cta.callNow}</h4>
            <p className="text-blue-100 text-sm mb-4">{t.cta.speakTeam}</p>
            <p className="font-bold text-xl">(555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  )
}
