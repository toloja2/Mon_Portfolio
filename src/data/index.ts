import type { Project, Certification, Skill } from "../types";

export const userInfo = {
  name: "RANARIJAONINA Tolojanahary",
  title: "Étudiant en M1 Mathématiques & Informatique",
  email: "tolojanahary.ranarijaonina@univ-antananarivo.mg",
  phone: "+261 34 20 727 60",
  location: "Ankatso II, Antananarivo",
  bio: "Passionné par le mariage entre les mathématiques appliquées et les technologies modernes."
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