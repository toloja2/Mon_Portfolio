export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  icon: string;
  credentialLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

