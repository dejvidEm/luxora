"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Minus } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface FaqSectionProps {
  language: Language
}

export function FaqSection({ language }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = translations[language]

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 scroll-animate">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t.faq.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-6">
          {t.faq.items.map((faq, index) => (
            <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="bg-white border cursor-pointer border-gray-200 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-8 text-left flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <h3 className="font-bold text-lg text-gray-900 pr-6">{faq.question}</h3>
                    <div className="transform transition-transform duration-300 ease-in-out">
                      {openFaq === index ? (
                        <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-8">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
