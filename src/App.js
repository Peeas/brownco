import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'; 

import Layout from './hoc/Layout/Layout';
import Landing from './components/Landing/Landing';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/aboutus" exact component={AboutUs} />
      <Redirect  to="/" />
    </Switch>

  );
  return (
    <ParallaxProvider>
      <Layout>
        {routes}
      </Layout>
    </ParallaxProvider>

  );
}

export default App;
