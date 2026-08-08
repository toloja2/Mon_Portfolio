import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function ContactPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen animate-fade-in pt-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 py-12">
        <h1 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Me <span className="text-blue-600">contacter</span>
        </h1>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informations */}
            <div className="space-y-4">
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                📍 Coordonnées
              </h2>
              <div className={`p-4 rounded-xl border flex items-center gap-4 transition-colors duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Email</p>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    tolojaranarijaonina2@gmail.com
                  </p>
                </div>
              </div>
              <div className={`p-4 rounded-xl border flex items-center gap-4 transition-colors duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                  <FaPhone />
                </div>
                <div>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Téléphone</p>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    +261 34 20 727 60
                  </p>
                </div>
              </div>
              <div className={`p-4 rounded-xl border flex items-center gap-4 transition-colors duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Localisation</p>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Ankatso II, Antananarivo
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className={`p-6 rounded-2xl border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                ✉️ Envoyer un message
              </h2>
              <form>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                  }`}
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                  }`}
                />
                <textarea
                  rows={5}
                  placeholder="Votre message"
                  className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors resize-none ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                  }`}
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">
                  Envoyer <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;