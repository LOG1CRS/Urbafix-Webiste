import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/style/App.scss';

import Layout from '../components/Layout/Layout';
import Main from '../containers/Main';
import AboutUs from '../containers/AboutUs';
import Contact from '../containers/Contact';
import Services from '../containers/Services';
import Products from '../containers/Products';
import NotFound from '../containers/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
