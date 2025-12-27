"use client"

import { MessageCircle, Palette, CheckCircle, Cog, Truck } from "lucide-react"
import { useState, useEffect } from "react"

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Consulta",
    description: "Platicamos sobre tu proyecto y necesidades",
  },
  {
    number: "2",
    icon: Palette,
    title: "Diseño",
    description: "Creamos propuestas personalizadas",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Aprobación",
    description: "Revisamos y ajustamos según tus comentarios",
  },
  {
    number: "4",
    icon: Cog,
    title: "Producción",
    description: "Fabricamos tus productos con la más alta calidad",
  },
  {
    number: "5",
    icon: Truck,
    title: "Entrega",
    description: "Recibes tus productos listos para usar",
  },
]

export function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [activeLine, setActiveLine] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleSteps((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    document.querySelectorAll(".process-step").forEach((step) => {
      observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-10" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            Nuestro{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Proceso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un proceso simple y transparente para llevar tu idea a la realidad
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-border/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 transition-all duration-1000 ease-in-out rounded-full"
              style={{ width: `${(activeLine + 1) * 20}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isVisible = visibleSteps.includes(index)
              const isActive = index <= activeLine

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`process-step relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div
                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${
                          isActive ? "from-primary/30 to-primary/10" : "from-primary/10 to-primary/5"
                        } border-4 border-background flex items-center justify-center relative z-10 transition-all duration-500 hover:scale-110 ${
                          isActive ? "animate-pulse-glow" : ""
                        }`}
                      >
                        <Icon
                          className={`w-10 h-10 transition-all duration-500 ${
                            isActive ? "text-primary scale-110" : "text-primary/60"
                          }`}
                        />
                      </div>
                      <div
                        className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500 ${
                          isActive ? "bg-primary/30 opacity-100" : "bg-primary/10 opacity-0"
                        }`}
                      />
                    </div>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 text-lg transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30 scale-110"
                          : "bg-primary/10 text-primary/60"
                      }`}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 transition-colors duration-300 hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
