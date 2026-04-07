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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Blob backgrounds */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Gradient overlays like reference */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(38.73deg, rgba(204,0,187,0.10) 0%, rgba(201,32,184,0) 50%),
            linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.10) 100%)
          `,
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "fade-in" : "opacity-0"}`}>

          {/* Availability badge */}
          <div className="flex justify-center mb-8">
            <Badge
              className="px-4 py-1.5 text-sm font-medium gap-2 rounded-full"
              style={{
                background: "rgba(130,69,236,0.12)",
                border: "1px solid rgba(130,69,236,0.35)",
                color: "#a78bfa",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
              </span>
              Disponible — Ouvert aux opportunités
            </Badge>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">
            IMAD{" "}
            <span className="glow-text">ET-TABBAA</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance max-w-3xl mx-auto font-medium">
            <span style={{ color: "#8245ec" }}>Développeur Full-Stack</span>
            {" "}|{" "}
            <span style={{ color: "#a855f7" }}>IA & Automatisation</span>
          </p>

          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Passionné par la création d&apos;applications web performantes et l&apos;intégration de l&apos;Intelligence Artificielle
            dans des solutions concrètes. React.js, Node.js, Python, n8n — de l&apos;idée au déploiement.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { href: "https://github.com/imadetabaa63", icon: <Github className="h-5 w-5" />, label: "GitHub" },
              { href: "https://linkedin.com/in/imad-et-tabbaa-78ib", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              { href: "mailto:ettabbaaimad@gmail.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(130,69,236,0.08)",
                  borderColor: "rgba(130,69,236,0.25)",
                  color: "#a78bfa",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8245ec"
                  ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 16px rgba(130,69,236,0.4)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(130,69,236,0.25)"
                  ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-base font-semibold rounded-full hover-lift"
              style={{
                background: "linear-gradient(135deg, #8245ec, #a855f7)",
                color: "#fff",
                border: "none",
              }}
            >
              Voir Mes Projets
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-base font-semibold rounded-full hover-lift"
              style={{
                borderColor: "rgba(130,69,236,0.4)",
                color: "#a78bfa",
                background: "rgba(130,69,236,0.06)",
              }}
            >
              Me Contacter
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6" style={{ color: "#8245ec" }} />
        </div>
      </div>
    </section>
  )
}
