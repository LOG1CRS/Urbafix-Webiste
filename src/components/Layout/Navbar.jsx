/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/static/urbafix-logo-web.png';
import {
  home,
  aboutUs,
  contact,
  products,
  services,
  projects,
  blog,
  store,
} from '../../routes/routes.json';
import '../../assets/style/Layout/Navbar.scss';

const Navbar = () => {
  function scrollFunction(screen) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById('header').style.backgroundColor = '#fff';
      document.getElementById('header').style.boxShadow =
        '1px 1px 4px 0 rgba(0, 0, 0, 0.1)';
      document.getElementById('nav-links').classList.add('nav-links');
      document.getElementById('navicon').classList.add('navicon-black');
      document.getElementById('navicon').classList.remove('navicon-white');
    } else {
      document.getElementById('header').style.backgroundColor = 'transparent';
      document.getElementById('header').style.boxShadow = 'none';
      document.getElementById('nav-links').classList.remove('nav-links');
      document.getElementById('navicon').classList.remove('navicon-black');
      document.getElementById('navicon').classList.add('navicon-white');
    }
  }

  window.onscroll = function () {
    const screen = document.documentElement.clientWidth;
    scrollFunction(screen);
  };

  const closeMenu = () => {
    document.getElementById('menu-btn').checked = false;
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <Link to={home}>
          <img className="nav-logo" src={logo} alt="Urbafix-logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon navicon-white" id="navicon" />
        </label>
        <ul className="menu" id="nav-links">
          <li>
            <Link
              className="navbar-item"
              onClick={() => closeMenu()}
              to={products}
            >
              Productos
            </Link>
          </li>
          <li className="dropdown">
            <Link className="navbar-item disable-link" to="#">
              Servicios
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link
                  onClick={() => closeMenu()}
                  to={{
                    pathname: services,
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
                  onClick={() => closeMenu()}
                  to={{
                    pathname: services,
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
                  onClick={() => closeMenu()}
                  to={{
                    pathname: services,
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
                  onClick={() => closeMenu()}
                  to={{
                    pathname: services,
                    state: {
                      type: 4,
                    },
                  }}
                >
                  Urbanismo
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => closeMenu()}
                  to={{
                    pathname: services,
                    state: {
                      type: 5,
                    },
                  }}
                >
                  Retrorreflectómetro
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="navbar-item"
              onClick={() => closeMenu()}
              href={projects}
            >
              Proyectos
            </a>
          </li>
          <li>
            <Link
              className="navbar-item"
              onClick={() => closeMenu()}
              to={aboutUs}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link className="navbar-item" onClick={() => closeMenu()} to={blog}>
              Blog
            </Link>
          </li>
          <li>
            <a
              className="navbar-item"
              onClick={() => closeMenu()}
              target="_blank"
              rel="noreferrer"
              href={store}
            >
              Comprar
            </a>
          </li>
          <li>
            <Link
              className="navbar-item"
              onClick={() => closeMenu()}
              to={contact}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
