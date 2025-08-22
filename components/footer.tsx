import { translations, type Language } from "@/lib/translations"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

interface FooterProps {
  language: Language
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Luxora Clean</h3>
              <p className="text-gray-300 leading-relaxed">
                {language === "sk"
                  ? "Prémiové upratovacie služby pre náročných klientov, ktorí si vážia svoj čas a kvalitu."
                  : "Premium cleaning services for discerning clients who value their time and quality."}
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-600">
              {language === "sk" ? "Naše služby" : "Our Services"}
            </h4>
            <ul className="space-y-3">
              {t.services.items.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-600">{language === "sk" ? "Kontakt" : "Contact"}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {language === "sk"
                    ? "Hlavná 123, 811 01 Bratislava, Slovensko"
                    : "Main Street 123, 811 01 Bratislava, Slovakia"}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <span className="text-gray-300">+421 900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <span className="text-gray-300">info@luxoraclean.sk</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>{language === "sk" ? "Po-Pi: 8:00 - 18:00" : "Mon-Fri: 8:00 - 18:00"}</div>
                  <div>{language === "sk" ? "So-Ne: 9:00 - 16:00" : "Sat-Sun: 9:00 - 16:00"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-600">
              {language === "sk" ? "Certifikácie" : "Certifications"}
            </h4>
            <div className="space-y-3">
              <div className="text-gray-300">{language === "sk" ? "ISO 9001:2015" : "ISO 9001:2015"}</div>
              <div className="text-gray-300">{language === "sk" ? "Ekologické čistenie" : "Eco-Friendly Cleaning"}</div>
              <div className="text-gray-300">
                {language === "sk" ? "Licencia č. SK-2024-001" : "License No. SK-2024-001"}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Luxora Clean. {language === "sk" ? "Všetky práva vyhradené." : "All rights reserved."}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === "sk" ? "Ochrana súkromia" : "Privacy Policy"}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === "sk" ? "Podmienky použitia" : "Terms of Service"}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === "sk" ? "Cookies" : "Cookies"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
