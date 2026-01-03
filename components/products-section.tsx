"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ShoppingCart } from "lucide-react"
import { useState, useEffect } from "react"
import { CustomizeModal } from "@/components/customize-modal"
import { useCart } from "@/hooks/use-cart"

interface Product {
  id: string
  name: string
  category: string
  description: string
  price: number
  originalPrice?: number
  badge?: string
  image: string
}

const products: Product[] = [
  {
    id: "playera-1",
    name: "Playera DTF Ambos lados",
    category: "playeras",
    description: "100% poliéster, ideal para sublimación. Colores vibrantes que duran.",
    price: 230,
    originalPrice: 325,
    badge: "Descuento",
    image: "/P-BB16_700x700.webp",
  },
  {
    id: "playera-2",
    name: "Playera Unisex",
    category: "playeras",
    description: "Estilo clásico, 100% poliéster. Perfecta para diseños complejos.",
    price: 150,
    originalPrice: 170,
    badge: "Nuevo",
    image: "/playera-sublimada-colores.jpg",
  },
  {
    id: "playera-3",
    name: "Playera Unisex",
    category: "playeras",
    description: "Comodidad y estilo en todas las temporadas.",
    price: 195,
    image: "/playera-ambos-lados-dise-o.jpg",
  },
  {
    id: "playera-4",
    name: "Playera Cuello Redondo Manga larga",
    category: "playeras",
    description: "Comodidad y estilo en todas las temporadas.",
    price: 200,
    originalPrice: 230,
    image: "/playera-manga-larga.jpg",
  },
  {
    id: "playera-5",
    name: "Playera Cuello Redondo (DTF)",
    category: "playeras",
    description: "Algodón o poliéster, alta calidad de impresión.",
    price: 190,
    originalPrice: 215,
    badge: "Popular",
    image: "/playera-dtf-impresion.jpg",
  },
  {
    id: "playera-6",
    name: "Playera Cuello Redondo (DTF)",
    category: "playeras",
    description: "Algodón o poliéster, gran durabilidad.",
    price: 210,
    originalPrice: 230,
    image: "/playera-dtf-personalizada.jpg",
  },
  {
    id: "taza-1",
    name: "eojnfewòcbwùrbTaza de Cerámica Tradicional 11 Oz",
    category: "tazas",
    description: "Cerámica de alta calidad, resistente al microondas y lavavajillas.",
    price: 85,
    originalPrice: 100,
    badge: "Popular",
    image: "/taza-blanca-personalizada.jpg",
  },
  {
    id: "taza-2",
    name: "Taza de Cerámica bicolor 11 Oz",
    category: "tazas",
    description: "Sorprende a tus clientes!",
    price: 95,
    image: "/taza-bicolor-personalizada.jpg",
  },
  {
    id: "termo-1",
    name: "Termo sublimado",
    category: "termos",
    description: "Ideal para café o té.",
    price: 130,
    image: "/termo-sublimado-personalizado.jpg",
  },
  {
    id: "termo-2",
    name: "Termo con grabado laser",
    category: "termos",
    description: "Perfecto para viajes.",
    price: 300,
    badge: "Nuevo",
    image: "/termo-laser-metalico.jpg",
  },
]

const categories = [
  { id: "todas", label: "Todas" },
  { id: "playeras", label: "Playeras" },
  { id: "tazas", label: "Tazas" },
  { id: "termos", label: "Termos" },
]

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("todas")
  const { addItem } = useCart()

  const filteredProducts =
    selectedCategory === "todas" ? products : products.filter((p) => p.category === selectedCategory)

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
      { threshold: 0.1 },
    )

    document.querySelectorAll(".product-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [selectedCategory])

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <>
      <section id="productos" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute inset-0 gradient-mesh opacity-20" />

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              Nuestro{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Catálogo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Productos personalizables de la más alta calidad
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setVisibleCards([])
                }}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 h-12 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30"
                    : "hover:border-primary hover:bg-primary/5"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => {
              const isVisible = visibleCards.includes(index)

              return (
                <Card
                  key={product.id}
                  data-index={index}
                  className={`product-card group overflow-hidden border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-3 hover:border-primary/50 bg-card/50 backdrop-blur-sm ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index % 4) * 80}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden aspect-square bg-secondary/30">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {product.badge && (
                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg shadow-primary/30 animate-pulse border-0">
                          {product.badge}
                        </Badge>
                      )}

                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        <Button
                          size="icon"
                          className="h-12 w-12 rounded-full shadow-2xl bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3 text-balance group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group/btn transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 h-12 text-base font-semibold rounded-xl"
                    >
                      <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 group-hover/btn:rotate-12" />
                      Personalizar
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CustomizeModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct?.name || ""}
        category={selectedProduct?.category || ""}
      />
    </>
  )
}
