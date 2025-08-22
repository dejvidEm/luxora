"use client"

import { Users, Target, Zap, Award } from "lucide-react"
import { translations, type Language } from "@/lib/translations"
import { NumberTicker } from "@/components/magicui/number-ticker"

interface StatsSectionProps {
  language: Language
}

const statIcons = [Users, Target, Zap, Award]

export function StatsSection({ language }: StatsSectionProps) {
  const t = translations[language]

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {t.stats.items.map((stat, index) => {
            const IconComponent = statIcons[index]
            return (
              <div
                key={index}
                className="text-center scroll-animate group hover:scale-105 transition-transform duration-300 ease-out"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 bg-[#deba68]/10 rounded-3xl w-fit mx-auto mb-6 group-hover:scale-110 group-hover:bg-yellow-100 group-hover:shadow-lg transition-all duration-300 ease-out">
                  <IconComponent className="h-8 w-8 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  <NumberTicker 
                    value={parseInt(stat.number)} 
                    startValue={0}
                    delay={index * 0.2}
                    className="text-4xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300"
                  />
                  {stat.number.includes('+') && '+'}
                  {stat.number.includes('K') && 'K'}
                  {stat.number.includes('M') && 'M'}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
