"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe, Zap, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { projects } from "@/data/projects"

const categoryLabel: Record<string, { label: string }> = {
  web:        { label: "Web App" },
  automation: { label: "Automatisation" },
  ai:         { label: "IA & Data" },
}

const categoryIcon: Record<string, JSX.Element> = {
  web:        <Globe className="h-3 w-3" />,
  automation: <Zap className="h-3 w-3" />,
  ai:         <Zap className="h-3 w-3" />,
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const gallery = project.images ?? [project.image]
  const [imgIdx, setImgIdx] = useState(0)
  const cat = categoryLabel[project.category]

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setImgIdx((i) => (i - 1 + gallery.length) % gallery.length)
  }
  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setImgIdx((i) => (i + 1) % gallery.length)
  }

  return (
    <div
      className="group hover-lift overflow-hidden flex flex-col rounded-xl"
      style={{ background: "rgba(130,69,236,0.04)", border: "1px solid rgba(130,69,236,0.18)" }}
    >
      {/* Image gallery */}
      <div className="relative overflow-hidden h-52">
        <Image
          src={gallery[imgIdx] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(130,69,236,0.65)",
              border: "1px solid rgba(130,69,236,0.5)",
              color: "#e9d5ff",
              backdropFilter: "blur(8px)",
            }}
          >
            {categoryIcon[project.category]}
            {cat.label}
          </span>
        </div>

        {/* Gallery navigation */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
              style={{ background: "rgba(5,4,20,0.7)", color: "#e9d5ff" }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
              style={{ background: "rgba(5,4,20,0.7)", color: "#e9d5ff" }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImgIdx(i) }}
                  className="rounded-full transition-all"
                  style={{
                    width: i === imgIdx ? "16px" : "6px",
                    height: "6px",
                    background: i === imgIdx ? "#8245ec" : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
          style={{ background: "rgba(5,4,20,0.75)", backdropFilter: "blur(4px)" }}
        >
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
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
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
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
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Features list */}
        {project.features && (
          <ul className="space-y-1.5 mt-1">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: "#8245ec" }} />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
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
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
