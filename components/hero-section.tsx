"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(34,197,94,0.1),transparent_40%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full blur-[80px] animate-pulse-slow opacity-60"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="absolute top-[40%] right-[15%] w-80 h-80 rounded-full blur-[90px] animate-pulse-slow opacity-60"
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
            transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute bottom-[20%] left-[20%] w-64 h-64 rounded-full blur-[70px] animate-pulse-slow opacity-60"
          style={{
            background: "linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)",
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-[60%] left-[50%] w-96 h-96 rounded-full blur-[100px] animate-pulse-slow opacity-50"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
            transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * 3}px)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            animationDelay: "4.5s",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-[20%] left-[5%] w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl animate-float-shapes rotate-12" />
        <div className="absolute top-[50%] right-[8%] w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-float-shapes-delayed" />
        <div
          className="absolute bottom-[25%] right-[15%] w-28 h-28 bg-gradient-to-br from-purple-400 to-indigo-500 animate-float-shapes-delayed-2"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <div className="absolute top-[35%] left-[12%] w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl animate-float-shapes-delayed-3 -rotate-12" />
        <div className="absolute bottom-[40%] left-[45%] w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full animate-float-shapes" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[20%] w-3 h-3 bg-cyan-400 rounded-full animate-particle-float" />
        <div className="absolute top-[45%] left-[35%] w-2 h-2 bg-pink-400 rounded-full animate-particle-float-delayed" />
        <div className="absolute top-[70%] right-[25%] w-4 h-4 bg-purple-400 rounded-full animate-particle-float-delayed-2" />
        <div className="absolute top-[25%] right-[40%] w-3 h-3 bg-emerald-400 rounded-full animate-particle-float-delayed-3" />
        <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-orange-400 rounded-full animate-particle-float" />
        <div className="absolute top-[55%] right-[15%] w-3 h-3 bg-blue-400 rounded-full animate-particle-float-delayed" />
        <div className="absolute bottom-[45%] right-[35%] w-2 h-2 bg-rose-400 rounded-full animate-particle-float-delayed-2" />
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,150 Q250,100 500,150 T1000,150 L1000,0 L0,0 Z"
          fill="url(#waveGradient1)"
          opacity="0.3"
          className="animate-wave"
        />
        <path
          d="M0,200 Q250,250 500,200 T1000,200 L1000,0 L0,0 Z"
          fill="url(#waveGradient2)"
          opacity="0.3"
          className="animate-wave-delayed"
        />
        <path
          d="M0,250 Q250,300 500,250 T1000,250 L1000,0 L0,0 Z"
          fill="url(#waveGradient3)"
          opacity="0.3"
          className="animate-wave-delayed-2"
        />
      </svg>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-8 transition-all duration-1000 hover:scale-105 cursor-default group border border-primary/30 shadow-lg shadow-primary/20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 animate-pulse" />
            </div>
            <span className="text-sm font-bold text-foreground tracking-wide">Sublimación Premium desde 2025</span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance mb-6 leading-tight transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-foreground mb-2">Transforma tus</span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 animate-gradient-shift-colorful">
                ideas en arte
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 via-pink-500/30 to-orange-500/30 blur-3xl animate-pulse-glow" />
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Especialistas en sublimación y personalización de productos con la más alta calidad y creatividad
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5215542424621", "_blank")}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/50 px-8 h-14 text-lg font-bold transition-all duration-500 hover:scale-105 rounded-xl border-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                Contáctanos Ahora
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary/50 hover:border-primary px-8 h-14 text-lg font-bold hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-500 hover:scale-105 rounded-xl group backdrop-blur-md"
            >
              Ver catálogo
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          <div
            className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "100+", label: "Clientes Satisfechos" },
              { value: "500+", label: "Productos Creados" },
              { value: "24h", label: "Tiempo de Respuesta" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group cursor-default p-6 rounded-2xl bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-all duration-500 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="text-4xl font-black text-primary mb-2 transition-all duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex items-start justify-center p-2 group-hover:border-primary transition-all duration-300 bg-primary/5 backdrop-blur-sm">
          <div className="w-2 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-bounce-subtle" />
        </div>
      </div>
    </section>
  )
}
