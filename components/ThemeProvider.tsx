'use client';

import { useLayoutEffect, useState, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

// Helper function to get initial theme (runs only on client)
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  if (!storedTheme) {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return isDarkMode ? 'dark' : 'light';
  }
  return storedTheme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const applyTheme = (newTheme: Theme) => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;

    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    applyTheme(newTheme);
  };

  // Apply theme on mount and when theme changes
  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create context for theme state (optional, for components that need theme)
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
