"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    tools: ["Git", "REST APIs", "Authentication", "Deployment"],
    languages: ["Anglais (Intermédiaire)", "Français (Intermédiaire)", "Arabe (Courante)"],
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">À Propos de Moi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez mon parcours, mes compétences et ma passion pour le développement web
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Mon Parcours</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Développeur full-stack junior avec des compétences en JavaScript, Node.js, React, Python, PostgreSQL
                    et MongoDB. Passionné par le développement web complet, je suis motivé à rejoindre une équipe
                    innovante pour concevoir des applications performantes et évolutives.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Formation & Expérience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground">Formation Bootcamp - Développement Web Full Stack</h4>
                      <p className="text-sm text-muted-foreground">Geeks Institute - Casablanca, Maroc</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        J'ai développé plusieurs projets full-stack avec React.js, Node.js et MongoDB. J'ai relevé de
                        nombreux défis de développement concrets en équipe.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        LUS en Ingénierie Logicielle et Systèmes d'information
                      </h4>
                      <p className="text-sm text-muted-foreground">Université Ibn Tofail - ENSA Kenitra (2022-2023)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Technicien Spécialisé En Développement Informatique
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Institut Allal Ben Abdellah Kénitra - IPIAB (2020-2022)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Compétences Frontend</h3>
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
                  <h3 className="text-xl font-semibold text-primary mb-4">Outils & Langues</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-sm">
                        Anglais (Intermédiaire)
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Français (Intermédiaire)
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Arabe (Courante)
                      </Badge>
                    </div>
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
