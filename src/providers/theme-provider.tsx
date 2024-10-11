import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext, useEffect, useMemo, useState } from "react";

declare module '@mui/material/styles' {
  
}

export const ThemeContext = createContext({
  themeMode: 'light',
  setThemeMode: (themeMode: 'light' | 'dark') => {themeMode}
});

export function ThemeContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  // Function to check system's preferred theme
  const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(getSystemTheme);

  // Effect to listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      setThemeMode(event.matches ? 'dark' : 'light');
    };

    // Listen for changes in the system theme
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const theme = useMemo(
    () => 
      createTheme(
        themeMode === 'light' ?
        {
          palette: {
            mode: themeMode,
            background: {
              paper: '#e6edf0',
              default: '#edf6ff'
            }
          }
        } :
        {
          palette: {
            mode: themeMode,
            background: {
              paper: '#1e1e2b',
              default: '#15151c'
            }
          }
        }
      ),
      [themeMode]
  );

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
