import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {userInfo} from '../data/index.ts';

function About() {
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
          À propos de <span className="text-blue-600">moi</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className={`p-8 rounded-2xl border transition-transform duration-300 hover:scale-105 ease-in-out ${
            isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-blue-50 border-blue-100'
          }`}>
            <p className={`text-lg transition-colors duration-300  ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Je suis actuellement étudiant en double Master dans le domaine <span className="font-bold">Mathématiques et Inforrmatique</span> à l'Université d'Antananarivo.
              <ul className="mt-2">
                <li> <span className='text-blue-600 font-semibold text-xl'>{userInfo.grade} </span>en Mathématiques Algorithmique Finance et Informatique </li>
                <li> <span className='text-blue-600 font-semibold text-xl'>{userInfo.grade} </span>en Calcul Numérique </li>
              </ul>
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-5 mt-8">
            <a href={`mailto:${userInfo.email}`} target='_blank' className={`col-span-2 sm:col-span-1 p-4 rounded-xl border flex items-center gap-3 transition-transform duration-300 hover:ring-1 hover:ring-orange-200 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100 border-gray-200'
            }`}>
              <span className="text-2xl "><FaEnvelope color='red'/></span>
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Email</p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{userInfo.email}</p>
              </div>
            </a>
            <a href={`tel:${userInfo.phone}`} target='_blank' className={`p-4 rounded-xl border flex items-center gap-3 transition-transform duration-300 hover:ring-1 hover:ring-orange-200 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100 border-gray-200'
            }`}>
              <span className={`text-2xl`}><FaPhone color={`${isDark ?  "white" : "grey"}`}/></span>
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Téléphone</p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{userInfo.phone}</p>
              </div>
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(userInfo.location)}`} rel='noopener noreferrer' target='_blank' className={`p-4 rounded-xl border flex items-center gap-3 transition-transform duration-300 hover:ring-1 hover:ring-orange-200 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100 border-gray-200'
            }`}>
                  
              <span className="text-2xl"><FaMapMarkerAlt color='green' /></span>
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Localisation</p>
                <p  className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{userInfo.location}</p>
              </div>
            </a>
            <div className={`p-4 rounded-xl border flex items-center gap-3 transition-transform duration-300 hover:ring-1 hover:ring-orange-200 hover:scale-105 ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100 border-gray-200'
            }`}>
              <span className="text-2xl"><FaCalendar color='white'/></span>
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Naissance</p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>26 Août 2003</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;