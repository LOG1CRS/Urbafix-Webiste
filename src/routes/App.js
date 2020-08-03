import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/style/App.scss';

import Layout from '../components/Layout/Layout';
import Main from '../views/Main';
import AboutUs from '../views/AboutUs';
import Contact from '../views/Contact';
import Services from '../views/Services';
import Products from '../views/Products';
import NotFound from '../views/NotFound';

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
