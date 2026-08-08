import { useTheme } from '../context/ThemeContext';
import { FaPython, FaReact, FaJs, FaHtml5, FaCalculator, FaChartBar } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

function SkillsPage() {
  const { isDark } = useTheme();

  const skills = [
    { name: "Python", level: 90, icon: FaPython },
    { name: "React", level: 85, icon: FaReact },
    { name: "TypeScript", level: 70, icon: SiTypescript },
    { name: "JavaScript", level: 85, icon: FaJs },
    { name: "HTML & CSS", level: 85, icon: FaHtml5 },
    { name: "Mathématiques", level: 95, icon: FaCalculator },
    { name: "Statistiques", level: 80, icon: FaChartBar }
  ];

  return (
    <div className={`min-h-screen animate-fade-in pt-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 py-12">
        <h1 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Mes <span className="text-blue-600">compétences</span>
        </h1>

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className={`p-4 rounded-xl transition-colors duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`text-2xl ${
                    skill.name === "Python" ? "text-blue-500" :
                    skill.name === "React" ? "text-cyan-500" :
                    skill.name === "TypeScript" ? "text-blue-600" :
                    skill.name === "JavaScript" ? "text-yellow-500" :
                    skill.name === "HTML & CSS" ? "text-orange-500" :
                    skill.name === "Mathématiques" ? "text-purple-500" :
                    "text-green-500"
                  }`} />
                  <span className={isDark ? 'text-gray-200' : 'text-gray-700'}>{skill.name}</span>
                  <span className="ml-auto text-blue-600 font-bold">{skill.level}%</span>
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
            );
          })}
        </div>

        <div className={`mt-12 p-8 rounded-2xl border transition-colors duration-300 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            🛠️ Outils et technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Figma", "Canva", "Bootstrap", "Font Awesome", "Git", "VS Code", "Postman"].map((tool) => (
              <span key={tool} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'
              }`}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;