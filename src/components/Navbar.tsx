import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import photo_profil from "../assets/profil.jpeg"

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/", icon: FaHome, label: "Accueil" },
    { to: "/about", icon: FaUser, label: "À propos" },
    { to: "/skills", icon: FaTools, label: "Compétences" },
    { to: "/projects", icon: FaProjectDiagram, label: "Projets" },
    { to: "/contact", icon: FaEnvelope, label: "Contact" }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full p-4 z-50 border-b transition-colors duration-300 ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-100'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="mx-20 hover:scale-105 duration-300 transition-transform">
          <img src = {photo_profil} className = " w-10 h-10 md:w-20 md:h-20 rounded-full cursor-pointer" alt="photo_profil" title="tolojanahary.ranarijaonina@univ-antananarivo.mg"  />
        </Link> 
        {/* <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          <span className="text-blue-600">&lt;</span>Toloja<span className="text-blue-600">/&gt;</span>
        </Link> */}

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:scale-110 ${
                isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <item.icon className="text-sm" /> {item.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors hover:scale-110 ${
              isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors hover:scale-110 ${
              isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-white hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {isMenuOpen ? <FaTimes size={20} color='red'/> : <FaBars size={20}/>}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className={`md:hidden mt-4 p-4 rounded-lg transition-colors duration-300 ${
          isDark ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={handleLinkClick}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              <item.icon className="text-lg" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;