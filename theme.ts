import { createTheme } from '@mui/material';
import { createContext, useContext, useMemo, useState, ReactNode } from 'react';

// إنشاء سياق للثيم
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

// مزود الثيم
export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(
    localStorage.getItem('themeMode') as 'light' | 'dark' || 'light'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          
          // تحميل ملف CSS المناسب
          const linkElement = document.getElementById('theme-css') as HTMLLinkElement;
          if (linkElement) {
            linkElement.href = `/assets/themes/${newMode}.css`;
          }
          
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // تخصيص الألوان للوضع الفاتح
                primary: {
                  main: '#6750A4',
                },
                secondary: {
                  main: '#958DA5',
                },
                background: {
                  default: '#FFFBFE',
                  paper: '#FFFFFF',
                },
              }
            : {
                // تخصيص الألوان للوضع الداكن
                primary: {
                  main: '#D0BCFF',
                },
                secondary: {
                  main: '#CCC2DC',
                },
                background: {
                  default: '#1C1B1F',
                  paper: '#2D2D2D',
                },
              }),
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: 'all 0.3s ease',
              },
            },
          },
        },
      }),
    [mode]
  );

  return { theme, colorMode };
};

// هوك لاستخدام الثيم
export const useColorMode = () => useContext(ColorModeContext);
