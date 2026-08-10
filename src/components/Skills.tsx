import { useTheme } from '../context/ThemeContext';
import {motion} from 'framer-motion';

function Skills() {
  const { isDark } = useTheme();

  const skills = [
    { name: "Python", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 70 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 85 },
    { name: "Mathématiques", level: 95 },
    { name: "Statistiques", level: 80 }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 50}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once : false, amount: 0.3}}
        className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Mes <span className="text-blue-600">compétences</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className={`p-4 rounded-xl transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex justify-between mb-2">
                <span className={isDark ? 'text-gray-200' : 'text-gray-700'}>{skill.name}</span>
                <span className="text-blue-600 font-bold">{skill.level}%</span>
              </div>
              <div className={`w-full rounded-full h-3 transition-colors duration-300 ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;