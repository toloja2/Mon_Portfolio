import { useTheme } from '../context/ThemeContext';

function Hero() {
  const { isDark } = useTheme();

  return (
    <section className={`min-h-screen flex items-center pt-16 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-blue-50'
    }`}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
            🚀 Disponible
          </div>
          <h1 className={`text-5xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Bonjour, je suis
          </h1>
          <h2 className="text-4xl text-blue-600 mt-2 font-bold">
            RANARIJAONINA Tolojanahary
          </h2>
          <p className={`text-xl mt-4 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Étudiant en M1 Mathématiques & Informatique
          </p>
          <p className={`mt-4 max-w-2xl text-lg transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Passionné par les mathématiques appliquées et le développement web.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#about" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
              À propos
            </a>
            <a href="#projects" className={`px-8 py-3 border-2 font-semibold rounded-lg transition-colors ${
              isDark ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}>
              Projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;