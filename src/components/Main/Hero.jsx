import React from 'react';

import '../../assets/style/Main/Hero.scss';
import { projects } from '../../routes/routes.json';

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-main-container">
        <h1 className="hero-main-title">PROYECTOS PERSONALIZADOS</h1>
        <a className="link-clear" href={projects}>
          <button type="button" className="button-primary button-main">
            Conoce Nuestros Proyectos
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
