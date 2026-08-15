import { createContext, useState, useContext, type ReactNode } from 'react';

// 1. Définir le type du contexte
type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

// 2. Créer le contexte avec une valeur par défaut
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Créer le Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  // État du mode nuit
  const [isDark, setIsDark] = useState(true);

  // Fonction pour basculer le mode
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Créer un hook personnalisé pour utiliser le contexte
export function useTheme() {
  const context = useContext(ThemeContext);
  
  // Vérifier si le hook est utilisé dans un Provider
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}