import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {certifications} from '../data/index';

function Certifications() {
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
      className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Mes <span className="text-blue-600">certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6 mt-8 ">
          {certifications.map((cert) => (
            <div key={cert.id} className={`p-6 rounded-2xl text-center border transition-all hover:-translate-y-2 hover:shadow-xl ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="text-6xl mb-4">{cert.icon}</div>
              <h3 className={`font-bold text-sm transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{cert.name}</h3>
              <p className="text-blue-600 text-sm font-medium">{cert.issuer}</p>
              <p className={`text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>{cert.credentialLink ? `${cert.credentialLink}` : cert.date ? `${cert.date}` : null }</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Certifications;