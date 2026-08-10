import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Projects() {
  const { isDark } = useTheme();

  const projects = [
    { title: "Simulateur Monte Carlo", tech: ["React", "TypeScript", "Python"] },
    { title: "Dashboard Statistique", tech: ["React", "Chart.js", "API"] },
    { title: "Solveur Algèbre Linéaire", tech: ["TypeScript", "Math.js"] }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 animate-fade-in ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 100}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once : false, amount: 0.3}}
        className="container mx-auto  px-4">
        <h2 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Mes <span className="text-blue-600">projets</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 rounded-2xl border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                🚀
              </div>
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;