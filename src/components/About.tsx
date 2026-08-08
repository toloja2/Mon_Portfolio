import { useTheme } from '../context/ThemeContext';

function About() {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          À propos de <span className="text-blue-600">moi</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mt-8">
          <div className={`p-8 rounded-2xl border transition-colors duration-300 ${
            isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-blue-50 border-blue-100'
          }`}>
            <p className={`text-lg text-center transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Je suis étudiant en double Master M1 Mathématiques Algorithmique Finance
              et M1 Mathématiques Informatique à l'Université d'Antananarivo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className={`p-4 rounded-xl border flex items-center gap-3 transition-colors duration-300 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <span className="text-2xl">📧</span>
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Email</p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>tolojaranarijaonina2@gmail.com</p>
              </div>
            </div>
            <div className={`p-4 rounded-xl border flex items-center gap-3 transition-colors duration-300 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <span className="text-2xl">📱</span>
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Téléphone</p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>+261 34 20 727 60</p>
              </div>
            </div>
            <div className={`p-4 rounded-xl border flex items-center gap-3 transition-colors duration-300 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <span className="text-2xl">📍</span>
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Localisation</p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Ankatso II, Antananarivo</p>
              </div>
            </div>
            <div className={`p-4 rounded-xl border flex items-center gap-3 transition-colors duration-300 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <span className="text-2xl">🎂</span>
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Naissance</p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>26 Août 2003</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;