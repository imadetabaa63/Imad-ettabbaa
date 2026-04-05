"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone, Zap, Users } from "lucide-react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Développement Full-Stack",
      description:
        "Développement complet d'applications web utilisant la pile MERN (MongoDB, Express.js, React, Node.js) avec les meilleures pratiques modernes.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Développement Frontend",
      description:
        "Interfaces utilisateur responsives et interactives utilisant React.js, Redux, et des frameworks CSS modernes comme Tailwind CSS.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Développement Backend",
      description:
        "Applications côté serveur robustes avec Node.js, Express.js, APIs RESTful, et intégration de base de données.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Design Responsive",
      description:
        "Approche mobile-first garantissant que votre site web soit parfait sur tous les appareils et tailles d'écran.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Optimisation des Performances",
      description:
        "Applications rapides et optimisées avec les meilleures pratiques pour le SEO et l'expérience utilisateur.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultation & Support",
      description:
        "Consultation technique, révision de code, et support continu pour vos projets de développement web.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Services complets de développement web pour donner vie à vos idées
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit text-secondary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
