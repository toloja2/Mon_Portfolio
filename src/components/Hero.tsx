import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import {userInfo} from '../data/index.ts';


function Hero() {
  const { isDark } = useTheme();

  return (

    <section className={`min-h-screen flex items-center pt-16 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-blue-50'
    }`}>
      
      <motion.div
       initial={{ opacity: 0, y: 50}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once : false, amount: 0.3 }} 
        className="container mx-auto px-4 py-20" >
        <div className="max-w-3xl">
          <div className="inline-block animate-fade-up opacity-0 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
            🚀  <span>&nbsp;</span> Disponible
          </div>
          <h1 className={`text-5xl font-bold transition-colors duration-300 animate-fade-up opacity-0 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Bonjour, je suis
          </h1>
          <h2 className="text-4xl text-blue-600 mt-2 font-bold animate-fade-up-delay-1 opacity-0">
            {userInfo.name}
          </h2>
          <p className={`text-xl mt-4 transition-colors duration-300 animate-fade-up-delay-2 opacity-0 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Étudiant en <span className='text-blue-600 font-semibold text-xl'>{userInfo.grade} </span>  {userInfo.parcours} à {userInfo.university}
          </p>
          <p className={`mt-4 max-w-2xl text-lg transition-colors duration-300 animate-fade-up-delay-2 opacity-0 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {userInfo.bio}
          </p>
          <div className="flex gap-4 mt-8 animate-fade-up-delay-3 opacity-0">
            <Link to="/about" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 hover:scale-105 duration-300 text-white font-semibold rounded-lg">
              À propos
            </Link>
            <Link to="/projects" className={`px-8 py-3 border-2 font-semibold rounded-lg hover:scale-105 duration-300 ${
              isDark ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}>
              Projets
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;