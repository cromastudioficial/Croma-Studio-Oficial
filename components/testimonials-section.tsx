"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Propietaria de Tienda Online",
    content:
      "Los productos personalizados de Croma Studio superaron mis expectativas. La calidad de impresión y los colores son impecables, además el servicio fue excelente.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Organizador de Eventos",
    content:
      "Contratamos a Croma Studio para personalizar merchandising para un evento corporativo y quedamos muy satisfechos. Entrega puntual y excelente acabado.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "María González",
    role: "Diseñadora Independiente",
    content:
      "Como diseñadora, valoro mucho la calidad de impresión y Croma Studio realmente destaca. He recomendado sus servicios a todos mis clientes.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    role: "Gerente de Marketing",
    content:
      "Excelente servicio para nuestra campaña de branding. Los termos personalizados fueron un éxito total con nuestros clientes y el equipo estuvo muy atento.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Ana Jiménez",
    role: "Emprendedora",
    content:
      "Pedí playeras para mi nuevo emprendimiento y el resultado fue increíble. La atención personalizada y la calidad del producto hacen que vuelva siempre.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "José Luis Torres",
    role: "Director de Recursos Humanos",
    content:
      "Uniformes de alta calidad para todo nuestro equipo. El proceso fue súper fácil y el resultado profesional. Definitivamente volveremos a trabajar con ellos.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
    setIsAutoPlaying(false)
  }

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3)

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            Lo que dicen nuestros{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Historias reales de clientes satisfechos
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className="relative overflow-hidden border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-primary/20" />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{testimonial.content}</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              size="icon"
              variant="outline"
              onClick={prevSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i)
                    setIsAutoPlaying(false)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={nextSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
