"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Send } from "lucide-react"
import { useState, useEffect } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("contacto")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5542424621", "_blank")
  }

  return (
    <section
      id="contacto"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
            Hablemos de tu{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              Proyecto
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos listos para hacer realidad tus ideas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information Cards */}
          <div
            className={`lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Location Card */}
            <Card className="border-border/40 bg-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Ubicación</h3>
                <p className="text-muted-foreground leading-relaxed">Ciudad de México, México</p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-border/40 bg-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Teléfono</h3>
                <p className="text-muted-foreground leading-relaxed">55 4242 4621</p>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border-border/40 bg-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
                <p className="text-muted-foreground leading-relaxed">cromastudiof@gmail.com</p>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="border-border/40 bg-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Horario</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Lun - Vie: 9am - 7pm</p>
                  <p>Sábado: 10am - 2pm</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <Card className="border-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 shadow-2xl shadow-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/15 rounded-full blur-2xl" />

              <CardContent className="p-10 relative z-10 flex flex-col h-full justify-center">
                <div className="text-center mb-10 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                    <MessageCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">¿Listo para empezar?</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Contáctanos por WhatsApp y cuéntanos sobre tu proyecto
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 rounded-2xl group mb-8"
                >
                  <Send className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:translate-x-1" />
                  Enviar mensaje
                </Button>

                <div className="border-t border-border/30 pt-8">
                  <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
                    Síguenos en redes sociales
                  </p>
                  <div className="flex justify-center gap-4">
                    {[
                      { Icon: Facebook, label: "Facebook" },
                      { Icon: Instagram, label: "Instagram" },
                    ].map(({ Icon, label }) => (
                      <button
                        key={label}
                        className="w-14 h-14 rounded-2xl bg-card/60 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-primary/20 border border-border/30"
                        aria-label={label}
                      >
                        <Icon className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
