import React from 'react';
import Content from './pages/Content';
import Features from './pages/Features';
import Hero from './pages/Home/Hero';
import GlobalStyle from './style'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Features />
      <Content />
    </div>
  );
}

export default App;
