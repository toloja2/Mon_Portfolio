import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 text-center transition-colors duration-300 ${
      isDark ? 'bg-gray-950 text-gray-400' : 'bg-gray-900 text-gray-400'
    }`}>
      <div className="container mx-auto px-4">
        <p>© 2026 RANARIJAONINA Tolojanahary. Tous droits réservés.</p>
        <p className="text-sm mt-1">React · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;