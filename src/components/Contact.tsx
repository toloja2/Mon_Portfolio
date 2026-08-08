import { useTheme } from '../context/ThemeContext';

function Contact() {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Me <span className="text-blue-600">contacter</span>
        </h2>

        <div className="max-w-2xl mx-auto mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border text-center transition-colors duration-300 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <p className="text-2xl mb-1">📧</p>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Email</p>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>tolojaranarijaonina2@gmail.com</p>
            </div>
            <div className={`p-4 rounded-xl border text-center transition-colors duration-300 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <p className="text-2xl mb-1">📱</p>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Téléphone</p>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>+261 34 20 727 60</p>
            </div>
          </div>
          
          <div className={`mt-6 p-6 rounded-2xl border transition-colors duration-300 ${
            isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <form>
              <input
                type="text"
                placeholder="Votre nom"
                className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                }`}
              />
              <input
                type="email"
                placeholder="Votre email"
                className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                }`}
              />
              <textarea
                rows={4}
                placeholder="Votre message"
                className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors resize-none ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                }`}
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;