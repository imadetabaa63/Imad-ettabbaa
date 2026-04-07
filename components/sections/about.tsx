"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Briefcase, Calendar } from "lucide-react"

/* ── Devicon CDN helper ── */
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

interface Skill { name: string; icon: string }
interface SkillCategory { title: string; skills: Skill[] }

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "React.js", icon: devicon("react") },
      { name: "Redux", icon: devicon("redux", "original") },
      { name: "Tailwind", icon: devicon("tailwindcss", "original") },
      { name: "SASS", icon: devicon("sass", "original") },
      { name: "HTML5", icon: devicon("html5") },
      { name: "CSS3", icon: devicon("css3") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: devicon("nodejs", "original") },
      { name: "Express.js", icon: devicon("express", "original") },
      { name: "Python", icon: devicon("python") },
      { name: "FastAPI", icon: devicon("fastapi", "original") },
      { name: "REST API", icon: devicon("postman", "original") },
      { name: "JWT Auth", icon: devicon("nodejs", "plain") },
    ],
  },
  {
    title: "Bases de Données",
    skills: [
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "PostgreSQL", icon: devicon("postgresql") },
      { name: "MySQL", icon: devicon("mysql", "original") },
    ],
  },
  {
    title: "Outils & DevOps",
    skills: [
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github", "original") },
      { name: "n8n", icon: "https://avatars.githubusercontent.com/u/45487711?s=48&v=4" },
      { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Linux", icon: devicon("linux", "original") },
      { name: "VS Code", icon: devicon("vscode", "original") },
    ],
  },
  {
    title: "IA & Data",
    skills: [
      { name: "Machine Learning", icon: devicon("python") },
      { name: "Deep Learning", icon: devicon("tensorflow", "original") },
      { name: "LLM", icon: devicon("jupyter", "original") },
      { name: "Prompt Engineering", icon: devicon("jupyter", "plain") },
    ],
  },
  {
    title: "Langues",
    skills: [
      { name: "Arabe — Natif", icon: "https://flagcdn.com/ma.svg" },
      { name: "Français — Interm.", icon: "https://flagcdn.com/fr.svg" },
      { name: "Anglais — Interm.", icon: "https://flagcdn.com/gb.svg" },
    ],
  },
]

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div
      className="flex items-center gap-2 rounded-full px-3 py-1.5 cursor-default transition-all duration-200"
      style={{
        background: "rgba(130,69,236,0.08)",
        border: "1px solid rgba(130,69,236,0.2)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(130,69,236,0.15)"
          ; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(130,69,236,0.45)"
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(130,69,236,0.08)"
          ; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(130,69,236,0.2)"
      }}
    >
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
    <div
      className="rounded-xl p-6 hover-lift transition-all duration-300"
      style={{ background: "rgba(130,69,236,0.05)", border: "1px solid rgba(130,69,236,0.15)" }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="h-5 w-1 rounded-full" style={{ background: "#8245ec" }} />
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

const formation = [
  {
    icon: <Briefcase className="h-4 w-4" />,
    title: "Formation Qualifiante en Intelligence Artificielle",
    school: "Centre des Très Petites Entreprises Solidaires — Casablanca",
    period: "Août 2025 – Présent",
    bullets: [
      "LLM, Machine Learning, Deep Learning et Prompt Engineering",
      "Analyse et visualisation de données avec Excel et Power BI",
    ],
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    title: "Bootcamp Développement Web Full Stack",
    school: "Geeks Institute — Casablanca",
    period: "Mai 2025 – Juillet 2025",
    bullets: [
      "Projets full-stack React.js / Node.js / MongoDB en conditions réelles",
      "API REST, authentification sécurisée et déploiement d'applications",
    ],
  },
  {
    icon: <GraduationCap className="h-4 w-4" />,
    title: "Licence — Ingénierie Logicielle & Systèmes d'Information",
    school: "Université Ibn Tofail — ENSA Kénitra",
    period: "2022 – 2023",
    bullets: null,
  },
  {
    icon: <GraduationCap className="h-4 w-4" />,
    title: "Technicien Spécialisé en Développement Informatique",
    school: "Institut IPIAB — Kénitra",
    period: "2020 – 2022",
    bullets: null,
  },
]

const experiences = [
  {
    title: "Web Developer & Automation Specialist",
    company: "Share'In Startup Studio — Casablanca",
    period: "Octobre 2025 – Présent",
    badge: "7 mois",
    bullets: [
      "Conception de workflows automatisés avec n8n pour des processus CRM et marketing B2B",
      "Développement d'un CRM personnalisé pour le suivi et la gestion de leads",
      "Automatisation de campagnes d'emailing B2B et de relances clients",
      "Intégration d'APIs tierces : Gmail, Google Sheets, Webhooks",
    ],
  },
  {
    title: "Stage Technicien Informatique",
    company: "Société de Transport — Kénitra",
    period: "Juin 2022",
    badge: "1 mois",
    bullets: [
      "Traitement de données avancé sur Microsoft Excel pour la gestion opérationnelle",
      "Conception de présentations professionnelles avec Microsoft PowerPoint",
    ],
  },
]

export function About() {
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
    <section id="about" ref={sectionRef} className="py-20 section-gradient-top relative">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0"}`}>

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">À Propos de Moi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Parcours, compétences et ce qui me motive à coder chaque jour
            </p>
          </div>

          {/* Profil + Expérience */}
          <div className="grid md:grid-cols-2 gap-8 mb-10 items-start">

            {/* Profil */}
            <Card className="hover-lift" style={{ border: "1px solid rgba(130,69,236,0.2)" }}>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#8245ec" }}>Profil Professionnel</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Développeur Full-Stack passionné par la création d&apos;applications web performantes
                  et l&apos;intégration de l&apos;Intelligence Artificielle dans des solutions concrètes.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Maîtrise de JavaScript, React.js, Node.js, Python et MongoDB. Expérience en
                  automatisation de workflows métier avec n8n, intégration d&apos;APIs tierces et
                  développement de CRM.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Motivé à rejoindre une équipe innovante pour relever des défis techniques
                  à fort impact.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                  <MapPin className="h-4 w-4" style={{ color: "#8245ec" }} />
                  <span>Casablanca, Maroc — Remote OK</span>
                </div>
              </CardContent>
            </Card>

            {/* Expérience */}
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <Card key={i} className="hover-lift" style={{ border: "1px solid rgba(130,69,236,0.2)" }}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{exp.title}</h4>
                        <p className="text-xs text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />{exp.period}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: "rgba(130,69,236,0.15)", color: "#a78bfa" }}
                        >
                          {exp.badge}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-1 mt-3">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex gap-2">
                          <span style={{ color: "#8245ec" }} className="mt-0.5 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Formation */}
          <Card className="hover-lift mb-10" style={{ border: "1px solid rgba(130,69,236,0.2)" }}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6" style={{ color: "#8245ec" }}>Formation</h3>
              <div className="grid md:grid-cols-2 gap-5">
                {formation.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div
                      className="mt-0.5 p-1.5 rounded-md h-fit shrink-0"
                      style={{ background: "rgba(130,69,236,0.12)", color: "#8245ec" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.school}</p>
                      <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "#a78bfa" }}>
                        <Calendar className="h-3 w-3" />{item.period}
                      </p>
                      {item.bullets && (
                        <ul className="mt-2 space-y-1">
                          {item.bullets.map((b, j) => (
                            <li key={j} className="text-xs text-muted-foreground flex gap-2">
                              <span style={{ color: "#8245ec" }} className="shrink-0">▸</span>{b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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
