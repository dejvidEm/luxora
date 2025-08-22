"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { translations, type Language } from "@/lib/translations"

interface ContactSectionProps {
  language: Language
}

export function ContactSection({ language }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 scroll-animate">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t.contact.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <Card className="scroll-animate bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          <CardContent className="p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-3">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-3">
                    {t.contact.form.service}
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {t.contact.form.serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="propertySize" className="block text-sm font-bold text-gray-900 mb-3">
                  {t.contact.form.propertySize}
                </label>
                <select
                  id="propertySize"
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select property size</option>
                  {t.contact.form.propertySizeOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-bold text-gray-900 mb-3">
                  {t.contact.form.details}
                </label>
                <textarea
                  id="details"
                  rows={4}
                  placeholder={t.contact.form.detailsPlaceholder}
                  className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-600 text-white hover:bg-yellow-700 hover:shadow-lg transition-all duration-300 text-lg px-12 py-6 rounded-2xl disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
