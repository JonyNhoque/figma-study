import React from 'react';
import CallToAction from './pages/CallToAction';
import Content from './pages/Content';
import FAQ from './pages/FAQ';
import Features from './pages/Features';
import Footer from './pages/Footer';
import Hero from './pages/Home/Hero';
import Portfolio from './pages/Portfolio';
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
      <Portfolio />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
