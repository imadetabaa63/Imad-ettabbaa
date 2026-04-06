"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"

export function About() {
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

  const skills = {
    frontend: ["JavaScript", "React.js", "Redux", "Framer Motion", "GSAP", "Tailwind CSS", "SASS", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Python"],
    tools: ["Git", "REST APIs", "JWT Auth", "Deployment"],
  }

  const formation = [
    {
      icon: <Briefcase className="h-4 w-4" />,
      title: "Bootcamp Full-Stack Web Development",
      school: "Geeks Institute — Casablanca",
      description: "Projets full-stack en équipe, défis concrets React.js / Node.js / MongoDB.",
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      title: "Licence — Ingénierie Logicielle & SI",
      school: "Université Ibn Tofail — ENSA Kénitra (2022–2023)",
      description: null,
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      title: "Technicien Spécialisé en Développement Informatique",
      school: "Institut IPIAB — Kénitra (2020–2022)",
      description: null,
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">À Propos de Moi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Parcours, compétences et ce qui me motive à coder chaque jour
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio + Formation */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Mon Histoire</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    De l&apos;ingénierie logicielle à l&apos;université Ibn Tofail jusqu&apos;au bootcamp Geeks Institute,
                    j&apos;ai suivi un chemin structuré vers le développement web full-stack.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Ce qui me passionne ? Transformer un problème concret en application qui fonctionne —
                    de la base de données à l&apos;interface, sans silos. Je code des apps MERN propres,
                    rapides, et pensées pour évoluer.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Aujourd&apos;hui je cherche à rejoindre une équipe ambitieuse où je peux contribuer
                    rapidement et continuer à monter en compétences.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span>Casablanca, Maroc — Remote OK</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-5">Formation</h3>
                  <div className="space-y-5">
                    {formation.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="mt-0.5 p-1.5 bg-secondary/10 rounded-md text-secondary h-fit">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.school}</p>
                          {item.description && (
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Backend & Base de Données</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Outils</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-3">Langues</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">Arabe — Courant</Badge>
                    <Badge variant="outline" className="text-sm">Français — Intermédiaire</Badge>
                    <Badge variant="outline" className="text-sm">Anglais — Intermédiaire</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
