"use client"

import { MessageCircle, Instagram, Facebook, Mail, MapPin, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Función para cerrar todos los modales
  const closeAllModals = () => {
    setShowPrivacy(false)
    setShowTerms(false)
  }

  return (
    <>
      <footer className="relative border-t-2 border-primary/30 bg-gradient-to-b from-secondary/30 via-background to-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-500/10" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Logo de imagen */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 overflow-hidden bg-white">
                    <Image 
                      src="/CromaStudioLogo.jpeg" 
                      alt="Croma Studio Logo" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary rounded-2xl blur-lg opacity-30" />
                </div>
                <span className="text-xl font-bold text-foreground">Croma Studio</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Especialistas en sublimación y personalización de productos. Transformamos tus ideas en realidad.
              </p>
              <div className="flex gap-2">
                {[
                  { 
                    icon: MessageCircle, 
                    href: "https://wa.me/5542424621",
                    label: "WhatsApp"
                  },
                  { 
                    icon: Instagram, 
                    href: "https://www.instagram.com/cromastudio_oficial?igsh=MTU1bzVwazR5YW54aA==",
                    label: "Instagram"
                  },
                  { 
                    icon: Facebook, 
                    href: "https://www.facebook.com/share/17qbBY8WFd/?mibextid=wwXIfr",
                    label: "Facebook"
                  },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <button
                      key={index}
                      onClick={() => window.open(social.href, "_blank")}
                      className="w-11 h-11 rounded-xl bg-primary/10 hover:bg-gradient-to-br hover:from-primary hover:to-blue-600 hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 border border-primary/20"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base text-foreground mb-5 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-primary to-blue-500 rounded-full" />
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2.5">
                {["Inicio", "Productos", "Servicios", "Lealtad", "Galería", "Contacto"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base text-foreground mb-5 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-primary to-blue-500 rounded-full" />
                Contacto
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: MapPin, text: "EDOMEX - CDMX, México" },
                  { icon: Phone, text: "554 242 4621" },
                  { icon: Mail, text: "cromastudiof@gmail.com" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground group">
                      <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="group-hover:text-foreground transition-colors">{item.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base text-foreground mb-5 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-primary to-blue-500 rounded-full" />
                Horario
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-5">
                <p className="flex justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <span className="font-semibold">Lun - Vie</span>
                  <span>9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <span className="font-semibold">Sábado</span>
                  <span>10:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <span className="font-semibold">Domingo</span>
                  <span>Cerrado</span>
                </p>
              </div>
              <Button
                onClick={() => window.open("https://wa.me/5542424621", "_blank")}
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 rounded-xl h-11"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Cotizar Ahora
              </Button>
            </div>
          </div>

          <div className="border-t-2 border-primary/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Croma Studio. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-5">
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacidad
              </button>
              <button
                onClick={() => setShowTerms(true)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Términos
              </button>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Privacidad */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border-2 border-primary/30">
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border/50 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Image 
                      src="/CromaStudioLogo.jpeg" 
                      alt="Logo" 
                      width={24} 
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Política de Privacidad</h2>
                </div>
                <button
                  onClick={closeAllModals}
                  className="w-8 h-8 rounded-full hover:bg-primary/10 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Última actualización: {new Date().toLocaleDateString('es-MX')}</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">1. Información que Recopilamos</h3>
                <p className="text-muted-foreground">
                  En Croma Studio, recopilamos información personal que nos proporcionas voluntariamente cuando:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Realizas una cotización o pedido</li>
                  <li>Te suscribes a nuestro boletín</li>
                  <li>Contactas a nuestro servicio al cliente</li>
                  <li>Participas en promociones o concursos</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">2. Uso de la Información</h3>
                <p className="text-muted-foreground">
                  Utilizamos tu información personal para:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Procesar y gestionar tus pedidos</li>
                  <li>Proporcionar soporte y servicio al cliente</li>
                  <li>Enviar información sobre productos y promociones</li>
                  <li>Mejorar nuestros productos y servicios</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">3. Protección de Datos</h3>
                <p className="text-muted-foreground">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra accesos no autorizados, alteración, divulgación o destrucción.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">4. Compartir Información</h3>
                <p className="text-muted-foreground">
                  No vendemos, comercializamos ni transferimos tu información personal a terceros, excepto cuando sea necesario para:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Cumplir con la ley o procesos legales</li>
                  <li>Proteger nuestros derechos o propiedad</li>
                  <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">5. Tus Derechos</h3>
                <p className="text-muted-foreground">
                  Tienes derecho a:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Acceder a tu información personal</li>
                  <li>Corregir datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">6. Contacto</h3>
                <p className="text-muted-foreground">
                  Para ejercer tus derechos o hacer preguntas sobre esta política, contáctanos en:
                </p>
                <div className="bg-primary/5 p-4 rounded-xl">
                  <p className="font-medium">Croma Studio</p>
                  <p className="text-sm">Email: cromastudiof@gmail.com</p>
                  <p className="text-sm">Teléfono: 554 242 4621</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Términos y Condiciones */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border-2 border-primary/30">
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border/50 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Image 
                      src="/CromaStudioLogo.jpeg" 
                      alt="Logo" 
                      width={24} 
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Términos y Condiciones</h2>
                </div>
                <button
                  onClick={closeAllModals}
                  className="w-8 h-8 rounded-full hover:bg-primary/10 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Última actualización: {new Date().toLocaleDateString('es-MX')}</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">1. Aceptación de Términos</h3>
                <p className="text-muted-foreground">
                  Al utilizar los servicios de Croma Studio, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo, por favor no utilices nuestros servicios.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">2. Servicios Ofrecidos</h3>
                <p className="text-muted-foreground">
                  Croma Studio ofrece servicios de sublimación y personalización de productos. Los servicios incluyen:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Diseño y personalización de productos</li>
                  <li>Sublimación en diferentes materiales</li>
                  <li>Asesoría en diseño</li>
                  <li>Producción de pedidos personalizados</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">3. Precios y Pagos</h3>
                <p className="text-muted-foreground">
                  Los precios están sujetos a cambios sin previo aviso. Los pagos pueden realizarse mediante:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Transferencia bancaria</li>
                  <li>Pago en efectivo</li>
                  <li>Otras formas acordadas con el cliente</li>
                </ul>
                <p className="text-muted-foreground">
                  Se requiere un anticipo del 50% para iniciar la producción.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">4. Tiempos de Entrega</h3>
                <p className="text-muted-foreground">
                  Los tiempos de entrega varían según:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Complejidad del diseño</li>
                  <li>Cantidad de productos</li>
                  <li>Disponibilidad de materiales</li>
                  <li>Volumen de producción actual</li>
                </ul>
                <p className="text-muted-foreground">
                  Se proporcionará un estimado de entrega al confirmar el pedido.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">5. Garantías y Devoluciones</h3>
                <p className="text-muted-foreground">
                  Ofrecemos garantía por defectos de fabricación. No se aceptan devoluciones por:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Cambios de opinión</li>
                  <li>Errores en diseño proporcionado por el cliente</li>
                  <li>Daños por mal uso</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">6. Propiedad Intelectual</h3>
                <p className="text-muted-foreground">
                  El cliente garantiza que posee los derechos sobre los diseños proporcionados. Croma Studio se reserva el derecho de rechazar trabajos que infrinjan derechos de autor.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">7. Modificaciones</h3>
                <p className="text-muted-foreground">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas al publicarse en nuestro sitio web.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">8. Contacto</h3>
                <div className="bg-primary/5 p-4 rounded-xl">
                  <p className="font-medium">Para consultas sobre estos términos:</p>
                  <p className="text-sm">Email: cromastudiof@gmail.com</p>
                  <p className="text-sm">WhatsApp: 554 242 4621</p>
                  <p className="text-sm">Horario: Lunes a Viernes 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
