import React from 'react';

import NavbarSpace from '../Layout/NavbarSpace';

import '../../assets/style/Products/Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <NavbarSpace />
      <div className="products-container">
        <div
          className="products-content"
          data-aos="fade-zoom-in"
          data-aos-offset="0"
          data-aos-delay="100"
        >
          <h1>PRODUCTOS</h1>
          <a href="#products" className="button-primary products-button">
            Conocer Más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
