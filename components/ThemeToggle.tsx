'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    mounted && (
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center p-2 rounded-md hover:bg-primary/10 transition-colors text-primary hover:text-primary-hover"
        aria-label={
          theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
        }
        title={
          theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
        }
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>
    )
  );
}
