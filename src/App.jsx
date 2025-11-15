// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import News from './pages/News';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LiveSessionPage from './pages/LiveSessionPage';
import Admin from './pages/Admin';
import LivestreamGuide from './pages/LivestreamGuide';
import styled, { createGlobalStyle } from 'styled-components';
import { Toaster } from 'react-hot-toast';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
  
  body {
    color: #333;
    line-height: 1.6;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/live" element={<LiveSessionPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/livestream-guide" element={<LivestreamGuide />} />
        </Routes>
        <Toaster position="top-right" />
      </AppContainer>
    </Router>
  );
}

export default App;
