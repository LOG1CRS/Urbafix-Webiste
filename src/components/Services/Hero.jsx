import React, { useState, useEffect } from 'react';

import mobiliarioImg from '../../assets/static/services.jpg';
import horizontalImg from '../../assets/static/hero-wallpaper-3.jpg';
import verticalImg from '../../assets/static/project-2.jpg';
import proyectosImg from '../../assets/static/proyectos-service.jpg';
import retroImg from '../../assets/static/retroImg.jpg';

import '../../assets/style/Services/Hero.scss';

const Hero = ({ service }) => {
  const [title, setTitle] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [urbanismoStyle, setUrbanismoStyle] = useState('');

  useEffect(() => {
    switch (service) {
      case 1:
        setTitle('SEÑALAMIENTO HORIZONTAL');
        setWallpaper(horizontalImg);
        setUrbanismoStyle('');
        break;
      case 2:
        setTitle('SEÑALAMIENTO VERTICAL');
        setWallpaper(verticalImg);
        setUrbanismoStyle('');
        break;
      case 3:
        setTitle('PROYECTOS A LA MEDIDA');
        setWallpaper(proyectosImg);
        setUrbanismoStyle('');
        break;
      case 4:
        setTitle('URBANISMO');
        setWallpaper(mobiliarioImg);
        setUrbanismoStyle('urbanismo-service');
        break;
      case 5:
        setTitle('RETRORREFLECTÓMETRO');
        setWallpaper(retroImg);
        setUrbanismoStyle('retro-service');
        break;
      default:
        setTitle('SEÑALAMIENTO HORIZONTAL');
        setWallpaper(horizontalImg);
        setUrbanismoStyle('');
        break;
    }
  }, [service]);

  return (
    <div className="services" style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className={`services-hero-space ${urbanismoStyle}`}>
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
