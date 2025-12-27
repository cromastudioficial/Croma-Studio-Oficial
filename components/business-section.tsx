"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Palette, Users, TrendingUp, Package, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

const services = [
  {
    icon: Building2,
    title: "Branding Corporativo",
    description: "Diseñamos la identidad visual completa de tu empresa con productos personalizados de alta calidad.",
    features: ["Logo en productos", "Colores corporativos", "Diseño profesional"],
  },
  {
    icon: Package,
    title: "Merchandising",
    description: "Productos promocionales que refuerzan tu marca y conectan con tus clientes.",
    features: ["Playeras empresariales", "Tazas corporativas", "Termos personalizados"],
  },
  {
    icon: Users,
    title: "Uniformes",
    description: "Uniformes personalizados que representan profesionalismo y unidad en tu equipo.",
    features: ["Diseños exclusivos", "Alta durabilidad", "Pedidos por volumen"],
  },
  {
    icon: TrendingUp,
    title: "Eventos Corporativos",
    description: "Productos personalizados para eventos, conferencias y ferias comerciales.",
    features: ["Entrega garantizada", "Diseño incluido", "Soporte dedicado"],
  },
]

export function BusinessSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll(".business-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="empresas" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 mb-4">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Soluciones Empresariales</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            Productos para{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">tu Marca</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Impulsa tu negocio con productos personalizados que reflejan la esencia de tu marca. Calidad premium para
            empresas que buscan destacar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`business-card group relative overflow-hidden border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/10 flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-3xl border border-primary/20">
            <Palette className="w-12 h-12 text-primary animate-pulse" />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">¿Listo para impulsar tu marca?</h3>
              <p className="text-muted-foreground mb-4">Contáctanos para una cotización personalizada sin compromiso</p>
            </div>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/5542424621?text=Hola, me interesa información sobre productos para empresas",
                  "_blank",
                )
              }
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-lg font-semibold shadow-xl shadow-primary/30 transition-all duration-500 hover:shadow-primary/50 hover:scale-105 rounded-xl flex-shrink-0"
            >
              <span className="relative z-10 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Cotizar ahora
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
