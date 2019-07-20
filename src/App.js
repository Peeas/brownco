import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Landing from './components/Landing/Landing';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Layout>
        <Landing />
      </Layout>
    </ParallaxProvider>

  );
}

export default App;
