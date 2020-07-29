import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/style/Footer.scss';
import logo from '../../assets/static/urbafix-logo-web.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-nav">
          <Link className="nav-link" to="/services">
            Servicios
          </Link>
          <Link className="nav-link" to="/">
            Proyectos
          </Link>
          <Link className="nav-link" to="/about-us">
            Nosotros
          </Link>
          <Link className="nav-link" to="/contact">
            Contacto
          </Link>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="urbafix-logo" />
          </Link>
        </div>
        <div className="footer-social">
          <div className="social-icon">
            <br />
          </div>
          <div className="social-icon">
            <br />
          </div>
          <div className="social-icon">
            <br />
          </div>
          <div className="social-icon">
            <br />
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>© URBAFIX S.A. de C.V. | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
