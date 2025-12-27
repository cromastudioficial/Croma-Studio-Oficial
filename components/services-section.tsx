"use client"

import { Palette, Coffee, Printer, Globe, Megaphone, Briefcase, Sparkles, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Palette,
    title: "Sublimación Textil",
    description: "Personalización de playeras con tecnología de sublimación para colores vibrantes y duraderos.",
  },
  {
    icon: Coffee,
    title: "Personalización de Tazas",
    description: "Transformamos tazas en piezas únicas con diseños resistentes al lavado.",
  },
  {
    icon: Printer,
    title: "Impresiones DTF",
    description: "Tecnología DTF de última generación para impresiones de alta calidad en cualquier tela.",
  },
  {
    icon: Globe,
    title: "Creación de Sitios Web",
    description: "Desarrollamos sitios web profesionales y tiendas en línea para impulsar tu negocio.",
  },
  {
    icon: Megaphone,
    title: "Publicidad & Marketing",
    description: "Estrategias de marketing digital y campañas publicitarias para aumentar tu alcance.",
  },
  {
    icon: Briefcase,
    title: "Branding Corporativo",
    description: "Diseñamos identidad visual completa para tu marca, desde logo hasta material promocional.",
  },
  {
    icon: Sparkles,
    title: "Diseño Gráfico",
    description: "Nuestros creativos desarrollan ideas únicas adaptadas a tus necesidades y visión.",
  },
  {
    icon: ShoppingBag,
    title: "Productos Promocionales",
    description: "Amplia gama de productos personalizados: termos, llaveros, bolsas y más para tu marca.",
  },
]

export function ServicesSection() {
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

    document.querySelectorAll(".service-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="servicios"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
            Nuestros{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              Servicios
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales de personalización, diseño y marketing digital para tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`service-card group relative overflow-hidden border-border/40 hover:border-primary/60 bg-card/60 backdrop-blur-xl transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${(index % 4) * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />

                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-primary/20">
                    <Icon className="w-10 h-10 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>

                  <div className="mt-6 pt-6 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="text-sm text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Más información
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
