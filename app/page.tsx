"use client"

import { useState } from "react"
import {
  Book, Sparkles, Lock, Users, TrendingUp, ArrowRight, Mail, ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselSlides = [
    {
      title: "Crea tu cuenta en Booki",
      image: "/registrar.svg",
    },
    {
      title: "Explora nuestra biblioteca digital",
      image: "/Pagina Principal.svg",
    },
    {
      title: "Consulta cada detalle del libro",
      image: "/Detalle Libro.svg",
    },
    {
      title: "Ordena y gestiona tus lecturas",
      image: "/OrdenarLibro.svg",
    },
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 flex items-center justify-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="/Logo.svg"
                  alt="Booki Logo"
                  className="h-10 w-auto"
                  width={40}
                  height={40}
                />
              </Link>

            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground/70 hover:text-primary transition-colors font-medium text-lg hover:-translate-y-0.5">
              Inicio
            </a>
            <a href="#caracteristicas" className="text-foreground/70 hover:text-primary transition-colors font-medium text-lg hover:-translate-y-0.5">
              Características
            </a>
            <a href="#plataforma" className="text-foreground/70 hover:text-primary transition-colors font-medium text-lg ">
              Plataforma
            </a>
            <a href="#planes" className="text-foreground/70 hover:text-primary transition-colors font-medium text-lg hover:-translate-y-0.5">
              Planes
            </a>
            <a href="#contacto" className="text-foreground/70 hover:text-primary transition-colors font-medium text-lg ">
              Contactanos
            </a>
          </div>


        </div>

      </nav>

      {/* seccion principal */}
      <section
        id="inicio"
        className="relative flex items-center justify-center min-h-[85vh] px-4 bg-gradient-to-b from-[#f0f4f8] to-[#ffffff] overflow-hidden"
      >
        {/* Fondos difuminados */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-accent/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "0.5s" }}></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Izquierda: texto */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <span className="inline-block text-sm font-semibold text-primary uppercase px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                Lectura Digital Inteligente
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Tu biblioteca completa, en un solo lugar
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                Descubre, organiza y disfruta tus libros favoritos desde cualquier dispositivo, con la mejor experiencia de lectura digital.
              </p>

              <div className="pt-3">
                <Button
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/2PCUjQ1jZLOzCP0fdW7RGn/Untitled?node-id=1-2&p=f&t=gstmS5eXAUcq6ol8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
                      "_blank"
                    )
                  }
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Comienza Ahora
                </Button>
              </div>
            </div>


            <div className="flex justify-center md:justify-end">
              <img
                src="/principal.svg"
                alt="Plataforma Booki"
                className="w-full max-w-xl md:max-w-2xl rounded-xl" // aumenté el tamaño y quité el shadow
              />
            </div>

          </div>
        </div>
      </section>





      {/* Seccion Caracteristicas */}
      <section id="caracteristicas" className="py-24 px-4 bg-background border-t border-border" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Descubre todo lo que puedes hacer con Booki</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Conoce las funciones que hacen de Booki tu espacio digital ideal para buscar, reservar y disfrutar materiales de lectura sin complicaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Book,
                title: "Catálogo digital",
                description:
                  "Encuentra miles de libros y recursos en un solo lugar, listos para explorar.",
              },
              {
                icon: Lock,
                title: "Pagos seguros",
                description:
                  "Transacciones protegidas con cifrado y métodos verificados.",
              },
              {
                icon: Users,
                title: "Reseñas de la comunidad",
                description:
                  "Lee opiniones reales y comparte tus experiencias con otros lectores.",
              },
              {
                icon: TrendingUp,
                title: "Recomendaciones inteligentes",
                description:
                  "Descubre lecturas nuevas basadas en tus gustos e intereses.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/10 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Seccion Plataforma */}
      <section id="plataforma" className="py-24 px-4 bg-[#597A8C] border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Lado Izquierdo - Texto */}
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Descubre Booki, la plataforma para lectores, autores y editores
              </h2>
              <p className="text-gray-200 text-lg">
                Explora la interfaz intuitiva, encuentra tus libros favoritos y gestiona tu lectura de forma sencilla.
              </p>
              <a
                href="https://www.figma.com/proto/2PCUjQ1jZLOzCP0fdW7RGn/Untitled?node-id=1-2&p=f&t=gstmS5eXAUcq6ol8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                  Comienza Ahora
                </button>
              </a>

            </div>

            {/* Lado Derecho - Carrusel */}
            <div className="relative">
              <div className="relative bg-background rounded-xl overflow-hidden border border-border shadow-lg">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-border shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={carouselSlides[currentSlide].image || "/placeholder.svg"}
                      alt={carouselSlides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Botones de navegacion */}
              <button
                onClick={prevSlide}
                className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* Seccion precios */}
      <section id="planes" className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Elige el plan perfecto para ti</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Desde un acceso gratuito hasta funciones avanzadas, Booki tiene la opción ideal para cada tipo de lector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Gratis",
                description: "Perfecto para comenzar tu experiencia en Booki",
                features: ["Explora el catálogo básico", "Lee fragmentos y libros gratuitos", "Crea tu lista de favoritos", "Accede a reseñas de la comunidad"],
              },
              {
                name: "Premium",
                price: "S/ 19.90",
                period: "/mes",
                popular: true,
                description: "Ideal para lectores que buscan acceso completo",
                features: [
                  "Acceso ilimitado al catálogo digital",
                  "Descarga y lectura sin conexión",
                  "Recomendaciones inteligentes",
                  "Experiencia sin anuncios",
                ],
              },
              {
                name: "Enterprise",
                price: "S/ 49.90",
                period: "/mes",
                description: "Pensado para instituciones y bibliotecas académicas",
                features: [
                  "Cuentas múltiples y panel administrativo",
                  "Estadísticas de uso y préstamos",
                  "Integración con sistemas externos",
                  "Soporte técnico prioritario"
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-lg p-8 transition-all duration-300 border ${plan.popular
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 md:scale-105"
                  : "bg-card border-border hover:border-primary/50"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-foreground text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white">
                      Mas Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "" : "text-foreground"}`}>{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-foreground/60"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? "" : "text-foreground"}`}>{plan.price}</span>
                    {plan.period && (
                      <span className={plan.popular ? "text-primary-foreground/80" : "text-foreground/60"}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-lg font-semibold py-2 transition-all ${plan.popular
                    ? "bg-foreground hover:bg-foreground/90 text-white"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                >
                  Obtener Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seccion contactanos */}
      <section id="contacto" className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Contáctanos</h2>
            <p className="text-lg text-foreground/60">
              ¿Tienes preguntas? Nuestro equipo está aquí para ayudarte. Contáctanos en cualquier momento.
            </p>
          </div>

          <form className="space-y-6 bg-card p-8 rounded-lg border border-border">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Nombre Completo</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Correo Electrónico</label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Mensaje</label>
              <textarea
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground placeholder:text-foreground/40 resize-none"
              />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold py-3 transition-all">
              <Mail className="w-4 h-4 mr-2" />
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>


      {/* seccion Footer */}
      <footer className="bg-foreground text-primary-foreground border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">

          {/* Logo y descripción */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <Image
                  src="/Logo.svg"
                  alt="Booki Logo"
                  className="h-10 w-auto"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <p className="max-w-xs text-sm text-primary-foreground/70">
              Tu biblioteca digital completa para descubrir, organizar y disfrutar tus libros favoritos.
            </p>
          </div>


          {/* Derechos y redes sociales */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <p>&copy; 2025 BookÎ. Todos los derechos reservados.</p>
            
          </div>

        </div>
      </footer>

    </div>
  )
}
