export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: "CAN Maroc — Plateforme de la Coupe d'Afrique",
    description:
      "Les fans n'avaient pas d'endroit centralisé pour suivre les matchs et gérer leurs billets. J'ai construit une app temps réel avec auth, dashboard admin et chatbot intégré.",
    image: "/images/football-soccer-app-dashboard.jpg",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Axios",
      "GSAP",
      "React Router DOM",
      "JavaScript",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/imadetabaa63",
  },
  {
    title: "Ebook Store — Librairie Numérique",
    description:
      "L'achat d'ebooks était fragmenté et peu intuitif. J'ai créé une plateforme unifiée avec recherche, panier, authentification sécurisée et gestion des achats.",
    image: "/images/ebook-store-library-app.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "JavaScript", "React Router DOM"],
    liveUrl: "#",
    githubUrl: "https://github.com/imadetabaa63",
  },
]
