import React from 'react';
// import { Link } from 'react-router-dom';

import '../../assets/style/Main/Hero.scss';

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-main-container">
        <h1 className="hero-main-title">PROYECTOS PERSONALIZADOS</h1>
        <a className="link-clear" href="#projects">
          <button type="button" className="button-primary button-main">
            Conoce Nuestros Proyectos
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
