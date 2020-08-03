/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/static/urbafix-logo-web.png';
import '../../assets/style/Navbar.scss';

const Navbar = () => {
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById('nav-container').style.backgroundColor =
        '#161616';
      document.getElementById('logo-text-mobile').style.color = 'white';
      document.getElementById('logo-text-desktop').style.color = 'white';
    } else {
      document.getElementById('nav-container').style.backgroundColor =
        'transparent';
      document.getElementById('logo-text-mobile').style.color = 'transparent';
      document.getElementById('logo-text-desktop').style.color = 'transparent';
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img className="nav-logo" src={logo} alt="Urbafix-logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li className="dropdown">
            <Link>Servicios</Link>
            <ul className="dropdown-content" id="dropdown">
              <li>
                <Link to="/services" serviceValue="1">
                  Señalamiento Horizontal
                </Link>
              </li>
              <li>
                <Link to="/services" serviceValue="2">
                  Señalamiento Vertical
                </Link>
              </li>
              <li>
                <Link to="/services" serviceValue="3">
                  Proyectos a la Medida
                </Link>
              </li>
              <li>
                <Link to="/services" serviceValue="4">
                  Mobiliario Urbano
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/about-us">Nosotros</Link>
          </li>
          <li>
            <Link to="/not-found">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;