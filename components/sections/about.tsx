"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"

/* ── Devicon CDN helper ── */
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

interface Skill {
  name: string
  icon: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "React.js",   icon: devicon("react") },
      { name: "Redux",      icon: devicon("redux", "original") },
      { name: "Tailwind",   icon: devicon("tailwindcss", "original") },
      { name: "SASS",       icon: devicon("sass", "original") },
      { name: "HTML5",      icon: devicon("html5") },
      { name: "CSS3",       icon: devicon("css3") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js",    icon: devicon("nodejs", "original") },
      { name: "Express.js", icon: devicon("express", "original") },
      { name: "Python",     icon: devicon("python") },
      { name: "FastAPI",    icon: devicon("fastapi", "original") },
      { name: "REST API",   icon: devicon("postman", "original") },
      { name: "JWT Auth",   icon: devicon("nodejs", "plain") },
    ],
  },
  {
    title: "Bases de Données",
    skills: [
      { name: "MongoDB",    icon: devicon("mongodb") },
      { name: "PostgreSQL", icon: devicon("postgresql") },
      { name: "MySQL",      icon: devicon("mysql", "original") },
    ],
  },
  {
    title: "Outils & DevOps",
    skills: [
      { name: "Git",        icon: devicon("git") },
      { name: "GitHub",     icon: devicon("github", "original") },
      { name: "n8n",        icon: "https://avatars.githubusercontent.com/u/45487711?s=48&v=4" },
      { name: "Power BI",   icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Linux",      icon: devicon("linux", "original") },
      { name: "VS Code",    icon: devicon("vscode", "original") },
    ],
  },
  {
    title: "IA & Data",
    skills: [
      { name: "Machine Learning",   icon: devicon("python") },
      { name: "Deep Learning",      icon: devicon("tensorflow", "original") },
      { name: "LLM",                icon: devicon("python", "plain") },
      { name: "Prompt Engineering", icon: devicon("jupyter", "original") },
    ],
  },
  {
    title: "Langues",
    skills: [
      { name: "Arabe — Natif",          icon: "https://flagcdn.com/ma.svg" },
      { name: "Français — Interm.",     icon: "https://flagcdn.com/fr.svg" },
      { name: "Anglais — Interm.",      icon: "https://flagcdn.com/gb.svg" },
    ],
  },
]

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-2 bg-muted/60 hover:bg-secondary/10 border border-border hover:border-secondary/40 transition-all duration-200 rounded-full px-3 py-1.5 cursor-default">
      <img
        src={skill.icon}
        alt={skill.name}
        width={18}
        height={18}
        className="object-contain flex-shrink-0"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
      />
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{skill.name}</span>
    </div>
  )
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="rounded-xl border border-border bg-card hover:border-secondary/50 transition-all duration-300 p-6 hover-lift">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-5 w-1 rounded-full bg-secondary" />
        <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export function About() {
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

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">À Propos de Moi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Parcours, compétences et ce qui me motive à coder chaque jour
            </p>
          </div>

          {/* Bio + Formation */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
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

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
