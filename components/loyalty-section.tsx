"use client"

import { Check, Sparkles, Crown, Gem } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

const tiers = [
  {
    name: "Plata",
    icon: Sparkles,
    color: "silver",
    bgGradient: "from-slate-200 via-slate-300 to-slate-400",
    cardBg: "from-slate-100/50 to-slate-200/50",
    benefits: [
      "5% de descuento en todos los productos",
      "Acceso a ofertas exclusivas",
      "Soporte prioritario por WhatsApp",
      "Envío gratis en compras mayores a $500",
    ],
    requirement: "Al alcanzar 5 compras",
  },
  {
    name: "Oro",
    icon: Crown,
    color: "gold",
    bgGradient: "from-amber-200 via-yellow-300 to-amber-400",
    cardBg: "from-amber-100/50 to-yellow-200/50",
    benefits: [
      "10% de descuento en todos los productos",
      "Diseños personalizados sin costo extra",
      "Envío gratis en todas tus compras",
      "Prioridad en producción y entrega",
      "Muestras digitales antes de producción",
    ],
    requirement: "Al alcanzar 10 compras",
    popular: true,
  },
  {
    name: "Diamante",
    icon: Gem,
    color: "diamond",
    bgGradient: "from-blue-300 via-cyan-300 to-blue-400",
    cardBg: "from-blue-100/50 to-cyan-200/50",
    benefits: [
      "15% de descuento en todos los productos",
      "Diseñador personal asignado",
      "Envío express gratuito",
      "Acceso anticipado a nuevos productos",
      "Asesoría de marca personalizada",
      "Descuentos especiales en pedidos grandes",
    ],
    requirement: "Al alcanzar 15 compras",
  },
]

export function LoyaltySection() {
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

    document.querySelectorAll(".loyalty-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="lealtad"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-5xl sm:text-6xl font-bold text-balance">
            Programa de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Lealtad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gana beneficios exclusivos con cada compra. Las tarjetas se obtienen automáticamente según tu historial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={tier.name}
                data-index={index}
                className={`loyalty-card relative overflow-hidden border-2 border-primary/20 bg-card/90 backdrop-blur-sm shadow-xl transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl" />

                <div className="p-6 space-y-5 relative z-10">
                  <div
                    className={`relative h-44 rounded-2xl bg-gradient-to-br ${tier.bgGradient} p-6 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500`}
                  >
                    <div className="absolute inset-0 shimmer-bg animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 h-full flex flex-col justify-between text-white">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs opacity-90 font-bold tracking-wider mb-1">CROMA STUDIO</p>
                          <h3 className="text-2xl font-black">{tier.name}</h3>
                        </div>
                        <Icon className="w-9 h-9 drop-shadow-lg" />
                      </div>

                      <div>
                        <div className="flex gap-1.5 mb-3">
                          <div className="w-14 h-9 bg-white/30 backdrop-blur-md rounded-lg shadow-lg" />
                          <div className="w-14 h-9 bg-white/30 backdrop-blur-md rounded-lg shadow-lg" />
                          <div className="w-14 h-9 bg-white/30 backdrop-blur-md rounded-lg shadow-lg" />
                        </div>
                        <p className="text-xs opacity-90 font-semibold tracking-wide">Tarjeta de Lealtad</p>
                      </div>
                    </div>

                    <div className="absolute -right-14 -bottom-14 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -left-14 -top-14 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-base text-foreground">Beneficios:</h4>
                    <ul className="space-y-2.5">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-primary/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground font-bold">Se obtiene:</strong> {tier.requirement}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
