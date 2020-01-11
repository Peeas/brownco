import React, { Component } from 'react';
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
import Careers from './components/Careers/Careers';
import AuthContext from '../src/context/auth-context';
import axios from 'axios';
import theme from './theme'
import { MuiThemeProvider } from '@material-ui/core';
import Projects from './components/Projects/Projects';

class App extends Component {
  state = {
    authenticated: false
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ authenticated: true })
    }
  }
  loginHandler = async (user) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(user);
            const res = await axios.post('/api/auth/login', body, config);
            if (res && res.data && res.data.token) {
              localStorage.setItem('token', res.data.token);
              this.setState({
                authenticated: true
              })
            }
        } catch(err) {
          console.error(err);
        }
  }

  logoutHandler = () => {
    localStorage.removeItem('token');
    this.setState({
      authenticated: false
    })
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/structural-steel" exact component={WhatWeDo} />
        <Route path="/concrete-construction" exact component={ConcreteConstruction} />
        <Route path="/demolition-excavation" exact component={DemolitionExcavation} />
        <Route path="/renewable-resources" exact component={RenewableResources} />
        <Route path="/tenant-improvement" exact component={TenantImprovement} />
        <Route path="/contactus" exact component={ContactUsForm} />
        <Route path="/careers" exact component={Careers} />
  
        <Redirect  to="/" />
      </Switch>
  
    );
    return (
      <ParallaxProvider>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: (user) => this.loginHandler(user),
          logout: () => this.logoutHandler()
          }}>
            <MuiThemeProvider theme={theme}>
              <Layout>
                {routes}
              </Layout>
            </MuiThemeProvider>
        </AuthContext.Provider>
      </ParallaxProvider>

    );
  }

}

export default App;
