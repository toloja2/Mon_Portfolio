import type { Project, Certification, Skill } from "../types";

export const userInfo = {
  name: "RANARIJAONINA Tolojanahary",
  parcours: "Étudiant Mathématiques & Informatique",
  grade : "Master 1",
  university: "Université d'Antananarivo",
  email: "tolojanahary.ranarijaonina@univ-antananarivo.mg",
  phone: "+261 34 20 727 60",
  location: "CUR Ankatso II Antananarivo Madagascar",
  bio: "Passionné par les mathématiques appliquées comme les Probabilités Statistiques, Algorithmes, Analyse des données, ect...; et en Informatique comme programmation, developpement web etc..."
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Simulateur Monte Carlo",
    description: "Simulation de méthodes de Monte Carlo pour l'approximation de Pi",
    technologies: ["React", "TypeScript", "Python"],
    image: "/project1.jpg",
    githubLink: "#",
    demoLink: "#"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "EF SET English Certificate C1 Advanced",
    issuer: "EF SET",
    date: "06 Juin 2026",
    icon: "🌐",
    credentialLink: "cert.efset.org/EQATMz"
  }
];

export const skills: Skill[] = [
  { name: "Python", level: 4, icon: "🐍" },
  { name: "React", level: 4, icon: "⚛️" },
  { name: "TypeScript", level: 3, icon: "📘" }
];