import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import PhotoGallery from './components/PhotoGallery';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <Layout>
      <BackgroundMusic />
      <Hero />
      <About />
      <Awards />
      <Gallery />
      <PhotoGallery />
      <SocialLinks />
      <Contact />
    </Layout>
  );
}

export default App;
