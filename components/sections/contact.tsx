"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle, Loader2 } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    try {
      const res = await fetch("https://formspree.io/f/mqegwjrb", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contactez-Moi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Disponible pour CDI, freelance ou remote — réponse sous 24h
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Informations de Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:ettabbaaimad@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        ettabbaaimad@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <a
                        href="tel:+212678353398"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +212 6 78 35 33 98
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Localisation</p>
                      <p className="text-muted-foreground">Casablanca, Maroc — Remote OK</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Connectez-vous avec Moi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
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
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Envoyer un Message</CardTitle>
              </CardHeader>
              <CardContent>
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                    <h3 className="text-lg font-semibold text-primary">Message envoyé !</h3>
                    <p className="text-muted-foreground">Je vous répondrai dans les 24h.</p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nom
                        </label>
                        <Input id="name" name="name" type="text" placeholder="Votre nom" required className="w-full" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre.email@exemple.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Sujet
                      </label>
                      <Input id="subject" name="subject" type="text" placeholder="Demande de projet" required className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Parlez-moi de votre projet..."
                        rows={5}
                        required
                        className="w-full"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-500">
                        Une erreur s&apos;est produite. Écrivez directement à ettabbaaimad@gmail.com
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-lift font-semibold"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        "Envoyer le Message"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
