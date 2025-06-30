import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BlogDetailPage from './pages/BlogDetailPage';
import DisclaimerModal from './components/DisclaimerModal';
import PracticeAreasPage from './pages/PracticeAreasPage';
import Box from '@mui/material/Box';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};


function App() {
  const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(false);

  useEffect(() => {
    const agreed = localStorage.getItem('disclaimerAgreed') === 'true';
    setDisclaimerAgreed(agreed);
  }, []);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setDisclaimerAgreed(true);
  };

  if (!isDisclaimerAgreed) {
    return (
       <ThemeProvider theme={theme}>
        <CssBaseline />
        <DisclaimerModal onAgree={handleAgree} />
       </ThemeProvider>
    );
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/practice-areas" element={<PracticeAreasPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:blogId" element={<BlogDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;