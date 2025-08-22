"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Hammer, Bed, Calendar, Truck, Building, CheckCircle } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface ServicesSectionProps {
  language: Language
}

const serviceIcons = [Home, Hammer, Bed, Calendar, Truck, Building]

export function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language]

  return (
    <section
      id="services"
      className="py-32 relative"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #ffffff 50%,rgba(222, 187, 104, 0.26) 20%,rgba(222, 187, 104, 0.17) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 scroll-animate">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t.services.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIcons[index]
            return (
              <Card
                key={index}
                className="scroll-animate bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-500 group rounded-3xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-10 relative">
                  <div className="flex items-center mb-8">
                    <div className="p-4 bg-[#deba68]/100 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-10 leading-relaxed">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
                        <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
