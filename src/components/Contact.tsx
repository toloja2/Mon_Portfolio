import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 100}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once : false, amount: 0.3 }}
        className="container mx-0 px-4">
        <h2 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Me <span className="text-blue-600">contacter</span>
        </h2>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-2 gap-4">
            <a href='mailto:tolojanahary.ranarijaonina@univ-antananarivo.mg' target='_blank' className={`p-4 col-span-2 sm:col-span-1 rounded-xl border text-center transition-transform flex flex-col items-center justify-center gap-4  duration-300 hover:ring-1 hover:ring-orange-200 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100 border-gray-200'
            }`}>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                  <FaEnvelope />
              </div>
        
              <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>tolojanahary.ranarijaonina@univ-antananarivo.mg</p>
            </a>
            <a href='tel:+261342072760' target='_blank' className={`p-4 col-span-2 sm:col-span-1 rounded-xl border text-center transition-transform flex flex-col items-center justify-center gap-4  duration-300 hover:ring-1 hover:ring-orange-200 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100 border-gray-200'
            }`}>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                  <FaPhone />
              </div>
        
              <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>+261 34 20 727 60</p>
            </a>
          </div>
          
          <div className={`mt-6 p-6 rounded-2xl border transition-colors duration-300 ${
            isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <form>
              <input
                type="text"
                required
                placeholder="Votre nom"
                className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                }`}
              />
              <input
                type="email"
                required
                placeholder="Votre email"
                className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                }`}
              />
              <textarea
                rows={4}
                required
                placeholder="Votre message"
                className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-blue-500 transition-colors resize-none ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'
                }`}
              />
              <button className="w-full flex items-center justify-center gap-5 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Envoyer <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;