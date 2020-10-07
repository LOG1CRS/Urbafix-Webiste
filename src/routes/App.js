/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import emailJS from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../assets/style/App.scss';
import {
  home,
  aboutUs,
  contact,
  products,
  services,
  blog,
} from './routes.json';
import { emailjs_user_id } from '../keys.json';

import Layout from '../components/Layout/Layout';
import Main from '../views/Main';
import AboutUs from '../views/AboutUs';
import Contact from '../views/Contact';
import Services from '../views/Services';
import Products from '../views/Products';
import OnBuild from '../views/OnBuild';
import NotFound from '../views/NotFound';
import RouterScrollToTop from '../components/Util/RouterScrollToTop';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    emailJS.init(emailjs_user_id);
  }, []);
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
          <Route exact path={blog} component={OnBuild} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
