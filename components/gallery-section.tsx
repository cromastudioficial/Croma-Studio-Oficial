"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryItems = [
  { title: "Playeras Corporativas", image: "/playeras-personalizadas-variedad.jpg", category: "Corporativo" },
  { title: "Tazas Personalizadas", image: "/tazas-personalizadas-dise-os.jpg", category: "Regalo" },
  { title: "Termos Premium", image: "/termos-personalizados-sublimados.jpg", category: "Premium" },
  { title: "Playeras Infantiles", image: "/playeras-ni-os-personalizadas.jpg", category: "Infantil" },
  { title: "Gorras Bordadas", image: "/gorras-personalizadas-bordadas.jpg", category: "Accesorios" },
  { title: "Uniformes Deportivos", image: "/uniformes-deportivos-personalizados.jpg", category: "Deportivo" },
]

export function GallerySection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll(".gallery-item").forEach((item) => {
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length)
    }
  }

  return (
    <section
      id="galeria"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-secondary/20"
    >
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            Galería de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Trabajos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Algunos de nuestros proyectos más destacados
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
          {galleryItems.map((item, index) => {
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`gallery-item group relative overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 shadow-lg transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer ${
                  index === 0 || index === 3 ? "row-span-2" : ""
                } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 text-center w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm mb-2 border border-primary/30">
                      <span className="text-xs font-semibold text-white">{item.category}</span>
                    </div>
                    <p className="text-white font-bold text-lg mb-2">{item.title}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 h-9"
                    >
                      <Maximize2 className="w-4 h-4 mr-1.5" />
                      Ver completo
                    </Button>
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 border border-primary/30">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[selectedImage].image || "/placeholder.svg"}
              alt={galleryItems[selectedImage].title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm mb-2 border border-primary/30">
                <span className="text-sm font-semibold text-white">{galleryItems[selectedImage].category}</span>
              </div>
              <p className="text-white text-2xl font-bold">{galleryItems[selectedImage].title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
