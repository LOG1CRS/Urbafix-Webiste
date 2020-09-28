import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import '../../assets/style/Main/Hero.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import wallpaper1 from '../../assets/static/Contact-wallpaper.png';
import wallpaper2 from '../../assets/static/hero-wallpaper-2.jpg';
import wallpaper3 from '../../assets/static/hero-wallpaper-3.jpg';
import wallpaper4 from '../../assets/static/hero-wallpaper-4.jpg';
import { projects, aboutUs, products, contact } from '../../routes/routes.json';

const Hero = () => {
  return (
    <Carousel
      autoPlay
      // stopOnHover
      showThumbs={false}
      showStatus={false}
      interval={4500}
      transitionTime={500}
      infiniteLoop
      className="hero-main"
    >
      <div style={{ backgroundImage: `url(${wallpaper3})` }} className="slide">
        <div className="hero-main-content">
          <div className="hero-main-container">
            <h1 className="hero-main-title">
              Soluciones Modernas con Altos Estandares de Calidad
            </h1>
            <a className="link-clear" href={aboutUs}>
              <button type="button" className="button-primary button-main">
                Conoce Urbafix
              </button>
            </a>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${wallpaper2})` }} className="slide">
        <div className="hero-main-content">
          <div className="hero-main-container">
            <h1 className="hero-main-title">
              Nuestro Trabajo es el Reflejo de la Modernización del Paisaje
              Urbano
            </h1>
            <a className="link-clear" href={contact}>
              <button type="button" className="button-primary button-main">
                Contactanos
              </button>
            </a>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${wallpaper1})` }} className="slide">
        <div className="hero-main-content">
          <div className="hero-main-container">
            <h1 className="hero-main-title">Señalamiento y Seguridad Vial</h1>
            <a className="link-clear" href={products}>
              <button type="button" className="button-primary button-main">
                Conoce Nuestros Productos
              </button>
            </a>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${wallpaper4})` }} className="slide">
        <div className="hero-main-content">
          <div className="hero-main-container">
            <h1 className="hero-main-title">Proyectos Personalizados</h1>
            <a className="link-clear" href={projects}>
              <button type="button" className="button-primary button-main">
                Conoce Nuestros Proyectos
              </button>
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
