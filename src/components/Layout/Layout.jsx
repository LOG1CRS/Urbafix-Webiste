import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import { whatsapp, phone } from '../../routes/routes.json';

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
          className="float-button whatsApp"
        >
          <i className="fab fa-whatsapp icon" />
        </a>
      </div>
      <div id="tooltip">
        <a
          href={phone}
          target="_blank"
          rel="noreferrer"
          className="float-button phone-number"
        >
          <i className="fas fa-phone-alt icon" />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
