import React from 'react';
import { Link } from 'react-router-dom';

import NavbarSpace from '../Layout/NavbarSpace';

import '../../assets/style/Products/Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <NavbarSpace />
      <div className="products-container">
        <div className="products-content">
          <h1>PRODUCTOS</h1>
          <Link to="#products" className="button-primary products-button">
            Conocer Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
