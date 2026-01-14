"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { CartSheet } from "@/components/cart-sheet"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { items } = useCart()
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Empresas", href: "#empresas" },
    { label: "Lealtad", href: "#lealtad" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-background/98 via-background/95 to-background/98 backdrop-blur-2xl shadow-xl border-b-2 border-primary/30"
            : "bg-gradient-to-r from-background/90 via-background/85 to-background/90 backdrop-blur-xl border-b border-border/50"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary animate-gradient-shift" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <Link href="#inicio" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-primary/30 overflow-hidden bg-white">
                  <Image 
                    src="/CromaStudioLogo.jpeg" 
                    alt="Croma Studio Logo" 
                    width={48} 
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight">Croma Studio</span>
                <span className="text-xs text-muted-foreground -mt-1">Personalización Premium</span>
              </div>
            </Link>

            
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 group rounded-xl hover:bg-primary/10"
                >
                  {item.label}
                  <span className="absolute inset-x-5 bottom-2 h-0.5 bg-gradient-to-r from-primary to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative group border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 rounded-xl"
              >
                <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground animate-pulse border-2 border-background">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-primary/10 transition-colors rounded-xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 animate-fadeInUp backdrop-blur-2xl bg-background/98">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
