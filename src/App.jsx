import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import PhotoGallery from './components/PhotoGallery';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Gallery />
      <PhotoGallery />
      <SocialLinks />
      <Contact />
    </Layout>
  );
}

export default App;
