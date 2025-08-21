"use client"

import { translations, type Language } from "@/lib/translations"

interface ProcessSectionProps {
  language: Language
}

export function ProcessSection({ language }: ProcessSectionProps) {
  const t = translations[language]

  return (
    <section id="process" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 scroll-animate">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t.process.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{t.process.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {t.process.steps.map((step, index) => (
            <div key={index} className="scroll-animate text-center group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative mb-10">
                <div className="w-20 h-20 bg-yellow-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-yellow-700 transition-all duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                {index < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-yellow-200 -translate-x-10" />
                )}
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
