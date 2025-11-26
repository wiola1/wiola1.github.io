import React, { createContext, useState, useContext, ReactNode, CSSProperties, useEffect } from 'react';

interface ThemeVars extends CSSProperties {
  '--stripes1': string;
  '--stripes2': string;
  '--text-color': string;
  '--accent-color': string;
}

interface ThemeContextType {
  currentVars: ThemeVars;
  toggleSecretTheme: () => void;
}

const themes: Record<'light' | 'secret', ThemeVars> = {
  light: { 
    '--stripes1': '#B9D1F0', 
    '--stripes2': '#FFFFFF', 
    '--text-color': '#3A4A68', 
    '--accent-color': '#FB7D3F' 
  },
  secret: { 
    '--stripes1': '#ff0000ff', 
    '--stripes2': '#0000FF', 
    '--text-color': '#00003fff', 
    '--accent-color': '#ad9300ff' 
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'currentAppTheme';

interface ThemeProviderProps {
    children: ReactNode;
}

const getInitialTheme = (): 'light' | 'secret' => {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTheme === 'secret' ? 'secret' : 'light';
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'secret'>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, currentTheme);
  }, [currentTheme]);

  const toggleSecretTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'secret' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ currentVars: themes[currentTheme], toggleSecretTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};