import React, { useState, useEffect } from 'react';

import servicesImg from '../../assets/static/services.jpg';

import '../../assets/style/Services/Hero.scss';

const Hero = ({ service }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (service) {
      case 1:
        setTitle('SEÑALAMIENTO HORIZONTAL');
        break;
      case 2:
        setTitle('SEÑALAMIENTO VERTICAL');
        break;
      case 3:
        setTitle('PROYECTOS A LA MEDIDA');
        break;
      case 4:
        setTitle('MOBILIARIO URBANO');
        break;
      default:
        setTitle('SEÑALAMIENTO HORIZONTAL');
        break;
    }
  });

  return (
    <div
      className="services"
      style={{ backgroundImage: `url(${servicesImg})` }}
    >
      <div className="services-hero-space">
        <div className="services-hero-container">
          <h2>URBAFIX</h2>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
