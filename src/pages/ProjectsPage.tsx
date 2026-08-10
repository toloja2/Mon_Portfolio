import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectsPage() {
  const { isDark } = useTheme();

  const projects = [
    {
      title: "Simulateur Monte Carlo",
      tech: ["React", "TypeScript", "Python"],
      desc: "Simulation de méthodes de Monte Carlo pour l'approximation de Pi et la modélisation financière avec visualisation interactive.",
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Statistique",
      tech: ["React", "Chart.js", "API"],
      desc: "Analyse interactive de données en temps réel avec graphiques dynamiques et filtres avancés.",
      github: "#",
      demo: "#"
    },
    {
      title: "Solveur Algèbre Linéaire",
      tech: ["TypeScript", "Math.js"],
      desc: "Outil de calcul matriciel avec résolution de systèmes, calcul de déterminant et valeurs propres.",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className={`min-h-screen pt-20 transition-colors duration-300 animate-fade-in ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 py-12">
        <h1 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Mes <span className="text-blue-600">projets</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 rounded-2xl border transition-all hover:-translate-y-2 hover:shadow-xl ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                🚀
              </div>
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{project.title}</h3>
              <p className={`text-sm mt-2 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6 pt-4 border-t border-gray-200">
                <a href={project.github} className={`text-sm flex items-center gap-1 transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>
                  <FaGithub /> Code
                </a>
                <a href={project.demo} className={`text-sm flex items-center gap-1 transition-colors ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                }`}>
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;