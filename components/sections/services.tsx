"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Globe, Zap, Bot, BarChart3 } from "lucide-react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Développement Full-Stack",
      description:
        "Applications web complètes avec la stack MERN (MongoDB, Express.js, React, Node.js). De la base de données à l'interface, sans silos.",
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "Développement Frontend",
      description:
        "Interfaces modernes, responsives et performantes avec React.js, Redux et Tailwind CSS. Animations GSAP et Framer Motion incluses.",
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "Backend & APIs REST",
      description:
        "Serveurs robustes avec Node.js / Express.js ou Python / FastAPI, authentification JWT, et intégration de bases de données SQL / NoSQL.",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Automatisation n8n",
      description:
        "Workflows métier automatisés avec n8n : CRM, emailing B2B, relances, synchronisation de données entre Gmail, Sheets, Webhooks et bases de données.",
    },
    {
      icon: <Bot className="h-7 w-7" />,
      title: "Intégration IA & LLM",
      description:
        "Intégration de modèles de langage (LLM) dans vos applications, chatbots intelligents, génération de contenu et Prompt Engineering sur mesure.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Data & Visualisation",
      description:
        "Analyse de données, dashboards Power BI et Excel avancé. Mise en place de pipelines de données pour piloter vos décisions métier.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 section-gradient-top relative">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Du développement web à l&apos;automatisation IA — des solutions techniques à fort impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="hover-lift rounded-xl p-6 text-center transition-all duration-300 group"
                style={{
                  background: "rgba(130,69,236,0.04)",
                  border: "1px solid rgba(130,69,236,0.15)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(130,69,236,0.4)"
                  ;(e.currentTarget as HTMLDivElement).style.background = "rgba(130,69,236,0.08)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(130,69,236,0.15)"
                  ;(e.currentTarget as HTMLDivElement).style.background = "rgba(130,69,236,0.04)"
                }}
              >
                <div
                  className="mx-auto mb-4 p-3 rounded-full w-fit transition-all duration-300"
                  style={{ background: "rgba(130,69,236,0.12)", color: "#8245ec" }}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
