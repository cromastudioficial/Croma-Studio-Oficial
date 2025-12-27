"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Send } from "lucide-react"

interface CustomizeModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  category: string
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
const colors = [
  { name: "Blanco", value: "#FFFFFF" },
  { name: "Negro", value: "#000000" },
  { name: "Azul", value: "#3B82F6" },
  { name: "Rojo", value: "#EF4444" },
  { name: "Verde", value: "#10B981" },
  { name: "Amarillo", value: "#FBBF24" },
]

export function CustomizeModal({ isOpen, onClose, productName, category }: CustomizeModalProps) {
  const [formData, setFormData] = useState({
    size: "",
    color: "",
    quantity: "1",
    description: "",
    file: null as File | null,
  })

  const isClothing = category === "playeras"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let message = `Hola, quiero personalizar: ${productName}\n\nDetalles:\n`

    if (isClothing) {
      message += `- Talla: ${formData.size}\n- Color: ${formData.color}\n`
    }

    message += `- Cantidad: ${formData.quantity} pieza(s)\n- Descripción: ${formData.description}`

    window.open(`https://wa.me/5542424621?text=${encodeURIComponent(message)}`, "_blank")
    onClose()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-scaleIn">
        <DialogHeader>
          <DialogTitle className="text-2xl">Personaliza tu {productName}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {isClothing && (
            <div className="space-y-2">
              <Label htmlFor="size">Talla</Label>
              <Select value={formData.size} onValueChange={(value) => setFormData({ ...formData, size: value })}>
                <SelectTrigger className="transition-all hover:border-primary">
                  <SelectValue placeholder="Selecciona una talla" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size} className="cursor-pointer">
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {isClothing && (
            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <div className="grid grid-cols-6 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setFormData({ ...formData, color: color.name })}
                    className={`w-full aspect-square rounded-lg border-2 transition-all hover:scale-110 ${
                      formData.color === color.name ? "border-primary ring-2 ring-primary/20" : "border-border"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {formData.color ? `Color seleccionado: ${formData.color}` : "Selecciona un color"}
              </p>
            </div>
          )}

          {/* Quantity */}
          <div className="space-y-2">
            <Label htmlFor="quantity">{isClothing ? "Cantidad" : "Número de piezas"}</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="transition-all focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Describe tu idea</Label>
            <Textarea
              id="description"
              placeholder="Cuéntanos qué diseño te gustaría, texto, imágenes, etc."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="transition-all focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="file">Adjuntar archivo (opcional)</Label>
            <div className="relative">
              <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 transition-all"
                accept="image/*,.pdf"
              />
              <Upload className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            {formData.file && (
              <p className="text-sm text-primary animate-fadeInUp">✓ Archivo seleccionado: {formData.file.name}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full group hover:shadow-lg hover:shadow-primary/20 transition-all"
            disabled={isClothing && (!formData.size || !formData.color)}
          >
            <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
            Enviar por WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
