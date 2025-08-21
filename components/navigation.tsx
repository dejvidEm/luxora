"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Globe, Menu, X } from "lucide-react"
import { translations, type Language } from "@/lib/translations"
import { useState } from "react"

interface NavigationProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const t = translations[language]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-600 rounded-2xl animate-pulse-glow shadow-lg">
              <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-xl md:text-2xl text-gray-900">Luxora Clean</span>
              <div className="text-xs text-yellow-600 font-semibold tracking-wide hidden sm:block">
                {translations[language].common.licensedInsured}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium">
              {t.nav.services}
            </a>
            <a href="#process" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium">
              {t.nav.process}
            </a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium">
              {t.nav.contact}
            </a>
            <div className="relative">
              <button
                onClick={() => onLanguageChange(language === "en" ? "sk" : "en")}
                className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium cursor-pointer"
              >
                <Globe className="h-4 w-4" />
                <span>{language === "en" ? "EN" : "SK"}</span>
              </button>
            </div>
            <Button className="bg-yellow-600 text-white hover:bg-yellow-700 hover:shadow-lg transition-all duration-300 rounded-2xl px-6 cursor-pointer">
              {t.nav.getQuote}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === "en" ? "sk" : "en")}
              className="flex items-center space-x-1 text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium cursor-pointer"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm">{language === "en" ? "EN" : "SK"}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                {t.nav.services}
              </a>
              <a
                href="#process"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                {t.nav.process}
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                {t.nav.contact}
              </a>
              <div className="px-3 py-2">
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-yellow-600 text-white hover:bg-yellow-700 transition-all duration-300 rounded-2xl cursor-pointer"
                >
                  {t.nav.getQuote}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
