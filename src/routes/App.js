import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/style/App.scss';
import { home, aboutUs, contact, products, services } from './routes.json';

import Layout from '../components/Layout/Layout';
import Main from '../views/Main';
import AboutUs from '../views/AboutUs';
import Contact from '../views/Contact';
import Services from '../views/Services';
import Products from '../views/Products';
import NotFound from '../views/NotFound';
import RouterScrollToTop from '../components/Util/RouterScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <RouterScrollToTop />
      <Layout>
        <Switch>
          <Route exact path={home} component={Main} />
          <Route exact path={aboutUs} component={AboutUs} />
          <Route exact path={contact} component={Contact} />
          <Route exact path={services} component={Services} />
          <Route exact path={products} component={Products} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
