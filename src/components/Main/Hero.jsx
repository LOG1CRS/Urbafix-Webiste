import React from 'react';

import '../../assets/style/Main/Hero.scss';

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-main-container">
        <h1 className="hero-main-title">PROYECTOS PERSONALIZADOS</h1>
        <p className="hero-main-description">
          Sabemos que cada proyecto es único, sabemos lo importante que es para
          usted, es por eso que hacemos cada proyecto a la medida.
        </p>
        <button type="button" className="button-primary button-main">
          Conoce Nuestros Proyectos
        </button>
      </div>
    </div>
  );
};

export default Hero;
