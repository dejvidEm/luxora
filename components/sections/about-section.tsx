"use client"

import { Shield, Sparkles, Clock, Award, CheckCircle } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface AboutSectionProps {
  language: Language
}

const featureIcons = [Shield, Sparkles, Clock, Award]

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language]

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="scroll-animate">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-yellow-600 rounded-xl mr-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <span className="text-yellow-600 font-bold text-sm tracking-wide uppercase">{t.about.badge}</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-10">{t.about.title}</h2>
            <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-2xl mx-auto">{t.about.subtitle}</p>

            <div className="space-y-10">
              {t.about.features.map((item, index) => {
                const IconComponent = featureIcons[index]
                return (
                  <div key={index} className="flex items-start group">
                    <div className="p-3 bg-yellow-100 rounded-2xl mr-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <IconComponent className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h4 className="font-bold text-lg text-gray-900 mr-3">{item.title}</h4>
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-bold">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="scroll-animate">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-100 rounded-3xl blur-xl opacity-50" />
              <img
                src="/professional-cleaning-team.png"
                alt="Professional cleaning team"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-yellow-600 p-8 rounded-3xl shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">5+</div>
                  <div className="text-sm text-yellow-100 font-medium">{translations[language].common.yearsLicensed}</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-bold text-gray-900">{translations[language].common.verifiedPro}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
