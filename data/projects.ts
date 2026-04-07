export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: "web" | "automation" | "ai"
}

export const projects: Project[] = [
  {
    title: "CAN Maroc 2025 — Application Web Football",
    description:
      "Les fans manquaient d'un hub centralisé pour suivre matchs, équipes et billets. J'ai construit une app temps réel avec auth utilisateurs, dashboard admin et chatbot interactif.",
    image: "/images/football-soccer-app-dashboard.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Axios", "React Router DOM", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/imadetabaa63",
    category: "web",
  },
  {
    title: "Ebook Store — Plateforme E-commerce Livres Numériques",
    description:
      "L'achat d'ebooks était fragmenté et peu intuitif. J'ai créé une plateforme complète avec authentification, recherche, panier d'achat et gestion des commandes.",
    image: "/images/ebook-store-library-app.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/imadetabaa63",
    category: "web",
  },
  {
    title: "CRM Automatisé — Campagnes Email depuis Base de Données",
    description:
      "Les relances clients étaient manuelles et chronophages. J'ai automatisé l'extraction de contacts, la génération de messages dynamiques et les envois via Gmail API avec suivi des statuts.",
    image: "/images/football-soccer-app-dashboard.jpg",
    technologies: ["n8n", "Gmail API", "Google Sheets", "PostgreSQL", "Webhooks", "HTTP Request"],
    liveUrl: "#",
    githubUrl: "https://github.com/imadetabaa63",
    category: "automation",
  },
  {
    title: "Automatisation Bulletins de Paie via WhatsApp",
    description:
      "L'envoi manuel des bulletins de paie prenait des heures chaque mois. J'ai construit un workflow qui récupère les données, génère les PDFs et les envoie automatiquement à chaque employé sur WhatsApp.",
    image: "/images/ebook-store-library-app.jpg",
    technologies: ["n8n", "WhatsApp Business API", "PDF Generation", "PostgreSQL", "Webhooks"],
    liveUrl: "#",
    githubUrl: "https://github.com/imadetabaa63",
    category: "automation",
  },
]
