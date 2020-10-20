import React, { useState, useEffect } from 'react';

import mobiliarioImg from '../../assets/static/services.jpg';
import horizontalImg from '../../assets/static/hero-wallpaper-3.jpg';
import verticalImg from '../../assets/static/project-2.jpg';
import proyectosImg from '../../assets/static/proyectos-service.jpg';

import '../../assets/style/Services/Hero.scss';

const Hero = ({ service }) => {
  const [title, setTitle] = useState('');
  const [wallpaper, setWallpaper] = useState(null);

  useEffect(() => {
    switch (service) {
      case 1:
        setTitle('SEÑALAMIENTO HORIZONTAL');
        setWallpaper(horizontalImg);
        break;
      case 2:
        setTitle('SEÑALAMIENTO VERTICAL');
        setWallpaper(verticalImg);
        break;
      case 3:
        setTitle('PROYECTOS A LA MEDIDA');
        setWallpaper(proyectosImg);
        break;
      case 4:
        setTitle('MOBILIARIO URBANO');
        setWallpaper(mobiliarioImg);
        break;
      default:
        setTitle('SEÑALAMIENTO HORIZONTAL');
        setWallpaper(horizontalImg);
        break;
    }
  }, [service]);

  return (
    <div className="services" style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className="services-hero-space">
        <div
          className="services-hero-container"
          data-aos="fade-zoom-in"
          data-aos-offset="0"
          data-aos-delay="100"
        >
          <h2>URBAFIX</h2>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
