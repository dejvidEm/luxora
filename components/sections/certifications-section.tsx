"use client"

import { Shield, Award, CheckCircle, Sparkles } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface CertificationsSectionProps {
  language: Language
}

const certificationIcons = [Shield, Award, CheckCircle, Sparkles]

export function CertificationsSection({ language }: CertificationsSectionProps) {
  const certifications = translations[language].certifications

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {certifications.map((cert, index) => {
            const IconComponent = certificationIcons[index]
            return (
              <div
                key={index}
                className="text-center scroll-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 bg-yellow-50 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-yellow-100 transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-600">{cert.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
