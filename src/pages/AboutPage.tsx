import { useTheme } from '../context/ThemeContext';

function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen animate-fade-in pt-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 py-12">
        <h1 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          À propos de <span className="text-blue-600">moi</span>
        </h1>

        <div className="max-w-4xl mx-auto mt-12">
          <div className={`p-8 rounded-2xl border transition-colors duration-300 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Mon parcours
            </h2>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Je suis étudiant en double Master M1 Mathématiques Algorithmique Finance
              et M1 Mathématiques Informatique à l'Université d'Antananarivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className={`p-6 rounded-xl border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                🎓 Formation
              </h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• M1 Mathématiques Algorithmique Finance</li>
                <li>• M1 Mathématiques Informatique</li>
                <li>• Licence Mathématiques et Informatique (2025)</li>
                <li>• Baccalauréat série S (2021)</li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                💼 Formations certifiantes
              </h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Programmation web moderne - Orange Digital Center</li>
                <li>• Devenir créateur avec IA - Orange Digital Center</li>
                <li>• Community manager - Tsidy Andria</li>
                <li>• Développement Web - UNFPA Madagascar</li>
              </ul>
            </div>
          </div>

          <div className={`mt-8 p-6 rounded-xl border transition-colors duration-300 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              📊 Diplômes
            </h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• 2025 : Licence en Mathématiques et Informatique, Université d'Antananarivo</li>
              <li>• 2021 : Baccalauréat série S, Lycée Kanonavimanana Norbert Ambatondrazaka</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;