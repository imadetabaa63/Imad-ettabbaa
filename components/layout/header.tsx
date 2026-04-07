"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "Accueil",   id: "home" },
  { label: "À Propos",  id: "about" },
  { label: "Projets",   id: "projects" },
  { label: "Services",  id: "services" },
  { label: "Contact",   id: "contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* Track active section */
  useEffect(() => {
    const observers = navLinks.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 },
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        isScrolled
          ? {
              background: "rgba(5, 4, 20, 0.75)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(130, 69, 236, 0.15)",
            }
          : { background: "transparent" }
      }
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="text-xl font-bold transition-colors"
            style={{ color: "#fff" }}
          >
            <span style={{ color: "#8245ec" }}>IMAD</span>
            {" "}ET-TABBAA
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium transition-all duration-200 relative pb-1"
                style={{
                  color: activeSection === id ? "#8245ec" : "rgba(255,255,255,0.7)",
                }}
              >
                {label}
                {activeSection === id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "#8245ec" }}
                  />
                )}
              </button>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost" size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost" size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-4 py-4 rounded-xl"
            style={{
              background: "rgba(5,4,20,0.9)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(130,69,236,0.2)",
            }}
          >
            <div className="flex flex-col space-y-1 px-4">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left py-2.5 text-sm font-medium transition-colors rounded-lg px-3"
                  style={{
                    color: activeSection === id ? "#8245ec" : "rgba(255,255,255,0.75)",
                    background: activeSection === id ? "rgba(130,69,236,0.1)" : "transparent",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
