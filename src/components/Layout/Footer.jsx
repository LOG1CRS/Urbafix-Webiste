import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/style/Layout/Footer.scss';
import logo from '../../assets/static/urbafix-logo-web.png';

import faceLogo from '../../assets/static/face-logo.png';
import instaLogo from '../../assets/static/instagram-logo.png';
import whatsLogo from '../../assets/static/whatsapp-logo.png';
import youtubeLogo from '../../assets/static/youtube-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-nav">
          <Link className="nav-link" to="/products">
            Productos
          </Link>
          <Link className="nav-link" to="/#projects">
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
          <a
            href="https://www.facebook.com/urbafix"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social-icon" src={faceLogo} alt="Facebook" />
          </a>
          <a
            href="https://instagram.com/urbafix?igshid=3z298r7zu9yc"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social-icon" src={instaLogo} alt="Instagram" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <img className="social-icon" src={youtubeLogo} alt="Youtube" />
          </a>
          <a href="https://bit.ly/3dgAqld" target="_blank" rel="noreferrer">
            <img className="social-icon" src={whatsLogo} alt="Whatsapp" />
          </a>
        </div>
      </div>
      <div className="footer-rights">
        <p>© URBAFIX S.A. de C.V. | Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
