"use client"

import { Award, Palette, Heart, Clock, Users, Target } from "lucide-react"
import { useState, useEffect } from "react"

const values = [
  {
    icon: Award,
    title: "Calidad",
    description: "Materiales premium y procesos cuidadosos",
  },
  {
    icon: Palette,
    title: "Creatividad",
    description: "Diseños originales y personalizados",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y se nota",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Entregas a tiempo siempre",
  },
]

export function AboutSection() {
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

    document.querySelectorAll(".value-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 mx-auto max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              Sobre{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Nosotros
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Croma Studio nació en 2025 con la pasión por transformar ideas en productos únicos. Somos especialistas en
              sublimación y personalización, comprometidos con la calidad y la satisfacción de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/50">
                <img
                  src="/modern-printing-workspace-with-sublimation-equipme.jpg"
                  alt="Croma Studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary/80 p-8 rounded-3xl shadow-2xl shadow-primary/30 border-4 border-background">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm text-white/90 font-medium">Proyectos Completados</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Nuestra Misión
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transformar cada idea en productos únicos que superen las expectativas de nuestros clientes,
                    brindando calidad excepcional y servicio personalizado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Nuestro Equipo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contamos con profesionales apasionados y experimentados dedicados a ofrecer los mejores resultados
                    en cada proyecto de personalización.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              const isVisible = visibleCards.includes(index)

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`value-card text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-2 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/10">
                    <Icon className="w-10 h-10 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
