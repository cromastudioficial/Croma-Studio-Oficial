"use client"

import { MessageCircle, Instagram, Facebook, Mail, MapPin, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t-2 border-primary/30 bg-gradient-to-b from-secondary/30 via-background to-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-500/10" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-xl font-bold text-primary-foreground">C</span>
                </div>
                <div className="absolute inset-0 bg-primary rounded-2xl blur-lg opacity-30" />
              </div>
              <span className="text-xl font-bold text-foreground">Croma Studio</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especialistas en sublimación y personalización de productos. Transformamos tus ideas en realidad.
            </p>
            <div className="flex gap-2">
              {[
                { icon: MessageCircle, href: "https://wa.me/5542424621" },
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <button
                    key={index}
                    onClick={() => social.href !== "#" && window.open(social.href, "_blank")}
                    className="w-11 h-11 rounded-xl bg-primary/10 hover:bg-gradient-to-br hover:from-primary hover:to-blue-600 hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 border border-primary/20"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base text-foreground mb-5 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-blue-500 rounded-full" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5">
              {["Inicio", "Productos", "Servicios", "Lealtad", "Galería", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base text-foreground mb-5 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-blue-500 rounded-full" />
              Contacto
            </h3>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: "Tepic, Nayarit, México" },
                { icon: Phone, text: "554 242 4621" },
                { icon: Mail, text: "info@cromastudio.com" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground group">
                    <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="group-hover:text-foreground transition-colors">{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base text-foreground mb-5 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-blue-500 rounded-full" />
              Horario
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground mb-5">
              <p className="flex justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                <span className="font-semibold">Lun - Vie</span>
                <span>9:00 AM - 7:00 PM</span>
              </p>
              <p className="flex justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                <span className="font-semibold">Sábado</span>
                <span>10:00 AM - 2:00 PM</span>
              </p>
              <p className="flex justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                <span className="font-semibold">Domingo</span>
                <span>Cerrado</span>
              </p>
            </div>
            <Button
              onClick={() => window.open("https://wa.me/5542424621", "_blank")}
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 rounded-xl h-11"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Cotizar Ahora
            </Button>
          </div>
        </div>

        <div className="border-t-2 border-primary/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Croma Studio. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Términos
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
