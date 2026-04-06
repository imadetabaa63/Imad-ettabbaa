"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "fade-in" : "opacity-0"}`}>

          {/* Availability badge */}
          <div className="flex justify-center mb-6">
            <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30 px-4 py-1.5 text-sm font-medium gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Disponible — Ouvert aux opportunités
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">
            IMAD ET-TABBAA
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance max-w-3xl mx-auto">
            Je construis des applications web complètes avec React & Node.js —{" "}
            <span className="text-primary font-semibold">de l&apos;idée au déploiement.</span>
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Développeur Full-Stack MERN passionné par la création d&apos;applications performantes et évolutives.
            JavaScript, React, Node.js, MongoDB, PostgreSQL — je couvre l&apos;ensemble de la stack.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="outline" size="icon" className="hover-lift bg-transparent" asChild>
              <a href="https://github.com/imadetabaa63" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover-lift bg-transparent" asChild>
              <a href="https://linkedin.com/in/imad-et-tabbaa-78ib" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover-lift bg-transparent" asChild>
              <a href="mailto:ettabbaaimad@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg hover-lift font-semibold"
            >
              Voir Mes Projets
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-lg hover-lift"
            >
              Me Contacter
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
