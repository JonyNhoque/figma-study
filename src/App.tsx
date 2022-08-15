import React from 'react';
import Features from './pages/Features';
import Hero from './pages/Home/Hero';
import GlobalStyle from './style'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
