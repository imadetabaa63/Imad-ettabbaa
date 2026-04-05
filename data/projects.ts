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
    title: "Coupe du Monde CAN Maroc",
    description:
      "Développement d'une application web dynamique pour la Coupe d'Afrique des Nations (CAN), offrant aux utilisateurs des informations en temps réel sur les matchs, les détails des équipes et la gestion des billets. Les fonctionnalités incluent l'authentification des utilisateurs, un tableau de bord administratif, et un chatbot pour une assistance interactive, le tout présenté via une interface utilisateur responsive et engageante.",
    image: "/images/football-soccer-app-dashboard.jpg",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
      "Axios",
      "GSAP",
      "React Router DOM",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Ebook Store",
    description:
      "Développement d'une application web de vente de livres numériques avec interface utilisateur moderne et navigation fluide. Mise en œuvre de l'authentification, recherche de livres, panier et gestion des achats.",
    image: "/images/ebook-store-library-app.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript", "React Router DOM"],
    liveUrl: "#",
    githubUrl: "#",
  },
]
