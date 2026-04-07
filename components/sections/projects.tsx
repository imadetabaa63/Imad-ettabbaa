"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe, Zap } from "lucide-react"
import { projects } from "@/data/projects"

const categoryLabel: Record<string, { label: string; color: string }> = {
  web:        { label: "Web App",      color: "rgba(59,130,246,0.15)"  },
  automation: { label: "Automatisation", color: "rgba(130,69,236,0.15)" },
  ai:         { label: "IA & Data",    color: "rgba(168,85,247,0.15)"  },
}

const categoryIcon: Record<string, JSX.Element> = {
  web:        <Globe className="h-3 w-3" />,
  automation: <Zap className="h-3 w-3" />,
  ai:         <Zap className="h-3 w-3" />,
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.05 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0"}`}>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projets en Vedette</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des problèmes concrets, des solutions réelles — du Web au no-code automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const cat = categoryLabel[project.category]
              return (
                <div
                  key={index}
                  className="group hover-lift overflow-hidden flex flex-col rounded-xl"
                  style={{
                    background: "rgba(130,69,236,0.04)",
                    border: "1px solid rgba(130,69,236,0.18)",
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Category badge on image */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: cat.color,
                          border: "1px solid rgba(130,69,236,0.35)",
                          color: "#a78bfa",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {categoryIcon[project.category]}
                        {cat.label}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                      style={{ background: "rgba(5,4,20,0.75)", backdropFilter: "blur(4px)" }}
                    >
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
                          style={{ background: "#8245ec", color: "#fff" }}
                        >
                          <ExternalLink className="h-4 w-4" /> Démo Live
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
                          style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#fff", background: "transparent" }}
                        >
                          <Github className="h-4 w-4" /> Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col gap-3">
                    <h3 className="text-base font-semibold text-foreground leading-snug">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            background: "rgba(130,69,236,0.1)",
                            border: "1px solid rgba(130,69,236,0.25)",
                            color: "#c4b5fd",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom links */}
                    <div className="flex gap-3 pt-2 border-t" style={{ borderColor: "rgba(130,69,236,0.15)" }}>
                      {project.githubUrl !== "#" && (
                        <Button variant="ghost" size="sm" className="text-xs gap-1.5 px-0 h-auto" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
                            <Github className="h-3.5 w-3.5" /> Code source
                          </a>
                        </Button>
                      )}
                      {project.liveUrl !== "#" && (
                        <Button variant="ghost" size="sm" className="text-xs gap-1.5 px-0 h-auto" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
                            <ExternalLink className="h-3.5 w-3.5" /> Démo live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
