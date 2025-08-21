"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface TestimonialsSectionProps {
  language: Language
}

export function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const t = translations[language]

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 scroll-animate">
          <div className="flex items-center justify-center mb-8">
            <div className="p-2 bg-yellow-100 rounded-xl mr-3">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <span className="text-yellow-600 font-bold text-sm tracking-wide uppercase">{t.testimonials.badge}</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-10">{t.testimonials.title}</h2>
          <p className="text-xl text-gray-600 mb-16 leading-relaxed">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.testimonials.items.map((testimonial, index) => (
            <Card
              key={index}
              className="scroll-animate bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 rounded-3xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-blue-600">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
