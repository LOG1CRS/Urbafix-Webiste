/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/static/urbafix-logo-web.png';
import '../../assets/style/Layout/Navbar.scss';

const Navbar = () => {
  function scrollFunction(screen) {
    if (screen > 1200) {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById('header').style.backgroundColor = '#fff';
        document.getElementById('header').style.boxShadow =
          '1px 1px 4px 0 rgba(0, 0, 0, 0.1)';
        document.getElementById('nav-links').classList.add('nav-links');
      } else {
        document.getElementById('header').style.backgroundColor = 'transparent';
        document.getElementById('header').style.boxShadow = 'none';
        document.getElementById('nav-links').classList.remove('nav-links');
      }
    }
  }

  window.onscroll = function () {
    const screen = document.documentElement.clientWidth;
    scrollFunction(screen);
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <Link to="/">
          <img className="nav-logo" src={logo} alt="Urbafix-logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu" id="nav-links">
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Servicios</Link>
            <ul className="dropdown-content">
              <li>
                <Link
                  to={{
                    pathname: '/services',
                    state: {
                      type: 1,
                    },
                  }}
                >
                  Señalamiento Horizontal
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/services',
                    state: {
                      type: 2,
                    },
                  }}
                >
                  Señalamiento Vertical
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/services',
                    state: {
                      type: 3,
                    },
                  }}
                >
                  Proyectos a la Medida
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/services',
                    state: {
                      type: 4,
                    },
                  }}
                >
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
