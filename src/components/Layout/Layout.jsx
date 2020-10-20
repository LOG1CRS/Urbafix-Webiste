import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import { whatsapp } from '../../routes/routes.json';

import '../../assets/style/Layout/FloatButton.scss';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      {children}
      <div id="tooltip">
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="float-button"
        >
          <i className="fab fa-whatsapp icon" />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
