import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeContextProvider, ColorModeContext } from './theme';

// استيراد المكونات
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

// إضافة ملف CSS الثيم
const ThemeCssLink = () => {
  const isDarkMode = localStorage.getItem('themeMode') === 'dark';
  return (
    <link
      id="theme-css"
      rel="stylesheet"
      href={`/assets/themes/${isDarkMode ? 'dark' : 'light'}.css`}
    />
  );
};

function App() {
  const themeContext = ThemeContextProvider({ children: null });

  return (
    <ColorModeContext.Provider value={themeContext.colorMode}>
      <ThemeProvider theme={themeContext.theme}>
        <ThemeCssLink />
        <CssBaseline />
        <Router>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Header />
            <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
