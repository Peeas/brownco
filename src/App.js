import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'; 

import Layout from './hoc/Layout/Layout';
import Landing from './components/Landing/Landing';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutUs from './components/AboutUs/AboutUs';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import ContactUsForm from './components/ContactUsForm/ContactUsForm';
import ConcreteConstruction from './components/ConcreteConstruction/ConcreteConstruction';
import DemolitionExcavation from './components/DemolitionExcavation/DemolitionExcavation';
import TenantImprovement from './components/TenantImprovement/TenantImprovement';
import RenewableResources from './components/RenewableResources/RenewableResources';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/aboutus" exact component={AboutUs} />
      <Route path="/structural-steel" exact component={WhatWeDo} />
      <Route path="/concrete-construction" exact component={ConcreteConstruction} />

      <Route path="/demolition-excavation" exact component={DemolitionExcavation} />
      <Route path="/renewable-resources" exact component={RenewableResources} />
      <Route path="/tenant-improvement" exact component={TenantImprovement} />
      <Route path="/contactus" exact component={ContactUsForm} />
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
