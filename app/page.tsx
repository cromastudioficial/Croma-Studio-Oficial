import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { BusinessSection } from "@/components/business-section"
import { ServicesSection } from "@/components/services-section"
import { LoyaltySection } from "@/components/loyalty-section"
import { ProcessSection } from "@/components/process-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProductsSection />
        <BusinessSection />
        <ServicesSection />
        <LoyaltySection />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <FloatingWhatsApp />
      </main>
      <Footer />
    </>
  )
}
