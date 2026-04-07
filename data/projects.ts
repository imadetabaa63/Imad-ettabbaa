export interface Project {
  title: string
  description: string
  image: string
  images?: string[]           // galerie de screenshots
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: "web" | "automation" | "ai"
  features?: string[]         // fonctionnalités clés
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
    features: ["Authentification utilisateurs", "Dashboard admin", "Chatbot interactif", "Interface responsive"],
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
    features: ["Authentification sécurisée", "Recherche de livres", "Panier d'achat", "Gestion des commandes"],
  },
  {
    title: "CRM Automatisé — Campagnes Email B2B",
    description:
      "Les relances clients étaient manuelles et chronophages. J'ai automatisé l'extraction de contacts, la génération de messages dynamiques et les envois via Gmail API avec suivi des statuts.",
    image: "/images/football-soccer-app-dashboard.jpg",
    technologies: ["n8n", "Gmail API", "Google Sheets", "PostgreSQL", "Webhooks", "HTTP Request"],
    liveUrl: "#",
    githubUrl: "https://github.com/imadetabaa63",
    category: "automation",
    features: ["Extraction automatique des contacts", "Génération de messages dynamiques", "Envoi via Gmail API", "Suivi des statuts"],
  },
  {
    title: "Automatisation Fiches de Paie via WhatsApp",
    description:
      "Le service RH envoyait manuellement chaque bulletin de paie — des heures perdues chaque mois. J'ai conçu un workflow n8n qui détecte automatiquement les PDFs dans Google Drive, retrouve le numéro WhatsApp de chaque employé via Google Sheets, et envoie les documents sans aucune intervention manuelle.",
    image: "/images/paie-workflow.png",
    images: [
      "/images/paie-workflow.png",
      "/images/paie-drive.png",
      "/images/paie-sheets.png",
    ],
    technologies: ["n8n", "Google Drive", "Google Sheets", "WhatsApp API", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/imadetabaa63",
    category: "automation",
    features: [
      "Détection automatique des PDFs (Google Drive)",
      "Association employé → numéro WhatsApp (Google Sheets)",
      "Envoi automatique document par document",
      "Archivage post-envoi",
      "Vérification des données avant envoi",
    ],
  },
]
