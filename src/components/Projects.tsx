import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/index';
import { FaGithub, FaExternalLinkAlt, FaPaperPlane, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Projects() {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 transition-colors duration-300  animate-fade-in ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      
      <div
        className="container mx-auto  px-4">
        <h2 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Mes <span className="text-blue-600">projets</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 rounded-2xl border transition-all hover:-translate-y-2 hover:shadow-xl bg-cover bg-center ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`} >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4 " >
                🚀
                
              </div>
              <h3 className={`text-xl font-extrabold transition-colors duration-300  ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{project.title}</h3>

              <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg mt-4" />

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <Link to="/projects" className={`text-xl  h-10 rounded-lg ring-1 font-extrabold bg-blue-400/5 cursor-pointer  flex gap-3 justify-center items-center  mt-4   ${isDark ? 'border-blue-400 text-blue-400 ' : 'border-blue-600 text-blue-600'}`}>
                Voir < FaEye / >
              </Link>

              <div className="flex gap-4 mt-6 pt-4 border-t border-gray-200">
                <a href={project.githubLink} target='_blank' className={`text-sm flex items-center gap-1 transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>
                  <FaGithub /> Code
                </a>
                <a href={project.demoLink} target='_blank' className={`text-sm flex items-center gap-1 transition-colors ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                }`}>
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          ))}
          <Link to="/projects" className=" flex gap-4 w-full md:col-span-3 md:w-[100vh]  items-center justify-center justify-self-center cursor-pointer px-2 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 duration-300 text-white font-semibold rounded-lg">
              Voir tous les details 
              <FaPaperPlane />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;