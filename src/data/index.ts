import type { Project, Certification, Skill } from "../types";
import food_delivery from '../assets/food_delivery.png' 
import gestion_budget from '../assets/gestion_budgte.png'
import Site_ebook from "../assets/Site_ebook.png"
import weather_app from "../assets/weather_app.png"
import photo_profil from "../assets/profil.jpeg"



export const userInfo = {
  name: "RANARIJAONINA Tolojanahary",
  image : photo_profil,
  parcours: "Mathématiques & Informatique",
  grade : "Master 1",
  university: "Université d'Antananarivo",
  email: "tolojanahary.ranarijaonina@univ-antananarivo.mg",
  phone: "+261 34 20 727 60",
  location: "CUR Ankatso II Antananarivo Madagascar",
  bio: "Passionné par les mathématiques appliquées comme les Probabilités Statistiques, Algorithmes, Analyse des données, ect...; et en Informatique comme programmation, developpement web etc..."
};

export const projects: Project[] = [
 
  {
    id: 0,
    title: "Food Delivery App",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    description: "Application web de commande de repas permettant aux utilisateurs de parcourir les catégories, rechercher des plats, consulter les menus, ajouter des produits au panier et gérer leur compte grâce à un système d'authentification.",
    image: food_delivery,
    githubLink: "https://github.com/toloja2/food-Tsitsi.git",
    demoLink: "https://food-tsitsi-phi.vercel.app/"
  },
  
  {
    id: 1,
    title: "Gestionnaire de Budget",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    description: "Application web de gestion financière permettant d'enregistrer les revenus et les dépenses, de suivre le solde disponible et de visualiser les statistiques financières.",
    image: gestion_budget,
    githubLink: "https://github.com/toloja2/gestion-budget-react.git",
    demoLink: "https://gestion-budget-react-lilac.vercel.app/"
  },
  
  {
    id: 2,
    title: "Weather App",
    technologies: ["React", "TypeScript", "API"],
    description: "Application météo interactive permettant de rechercher une ville et d'afficher en temps réel la température, l'humidité, la vitesse du vent et les conditions météorologiques.",
    image: weather_app,
    githubLink: "https://github.com/toloja2/meteo-madagascar-toloja.git",
    demoLink: "https://meteo-madagascar-toloja.vercel.app/"
  },

  {
    id: 3,
    title: "Plateforme de Vente d'eBook",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Création d'une plateforme web responsive pour promouvoir et vendre un eBook, avec animations dynamiques, interactions JavaScript, navigation fluide et expérience utilisateur moderne.",
    image: Site_ebook,
    githubLink: "https://github.com/toloja2/SiteODC.git",
    demoLink: "https://toloja2.github.io/SiteODC/"
  }
];

export const certifications: Certification[] = [
 
  { id:1 , name: "EF SET C1 Advanced", issuer: "EF SET", icon: "🌐",credentialLink: "cert.efset.org/EQATMz"},
  { id: 2, name: "Python Programming Basics", issuer: "Mind Luster", date: "07 Juin 2026", icon: "🐍" },
  { id: 3, name: "Python Automation Testing", issuer: "Mind Luster", date: "11 Juin 2026", icon: "🤖" },
  { id: 4, name: "Développement Web Moderne", issuer: "Orange Digital Center", date: "2026", icon: "⚛️" }
];

export const skills: Skill[] = [
  { name: "Python", level: 4, icon: "🐍" },
  { name: "React", level: 4, icon: "⚛️" },
  { name: "TypeScript", level: 3, icon: "📘" }
];