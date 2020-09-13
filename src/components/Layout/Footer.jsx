import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/style/Layout/Footer.scss';
import logo from '../../assets/static/urbafix-logo-web.png';
import {
  home,
  products,
  projects,
  aboutUs,
  contact,
  facebook,
  instagram,
  youtube,
  whatsapp,
} from '../../routes/routes.json';

import faceLogo from '../../assets/static/face-logo.png';
import instaLogo from '../../assets/static/instagram-logo.png';
import whatsLogo from '../../assets/static/whatsapp-logo.png';
import youtubeLogo from '../../assets/static/youtube-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-nav">
          <Link className="nav-link" to={products}>
            Productos
          </Link>
          <Link className="nav-link" to={projects}>
            Proyectos
          </Link>
          <Link className="nav-link" to={aboutUs}>
            Nosotros
          </Link>
          <Link className="nav-link" to={contact}>
            Contacto
          </Link>
        </div>
        <div className="footer-logo">
          <Link to={home}>
            <img src={logo} alt="urbafix-logo" />
          </Link>
        </div>
        <div className="footer-social">
          <a href={facebook} target="_blank" rel="noreferrer">
            <img className="social-icon" src={faceLogo} alt="Facebook" />
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            <img className="social-icon" src={instaLogo} alt="Instagram" />
          </a>
          <a href={youtube} target="_blank" rel="noreferrer">
            <img className="social-icon" src={youtubeLogo} alt="Youtube" />
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer">
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
