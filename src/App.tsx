import React from 'react';
import Content from './pages/Content';
import Features from './pages/Features';
import Hero from './pages/Home/Hero';
import Testimonials from './pages/Testimonials';
import GlobalStyle from './style'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Features />
      <Content />
      <Testimonials />
    </div>
  );
}

export default App;
