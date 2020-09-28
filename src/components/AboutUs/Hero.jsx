import React from 'react';

import '../../assets/style/AboutUs/Hero.scss';

const Hero = () => {
  return (
    <div className="about-us">
      <h1 data-aos="fade-zoom-in" data-aos-offset="0" data-aos-delay="100">
        URBAFIX
      </h1>
      <div
        className="container-text"
        data-aos="fade-zoom-in"
        data-aos-offset="0"
        data-aos-delay="100"
      >
        <p>
          Somos una empresa 100% mexicana, especializada en productos y
          servicios de alto rendimiento en la industria de señalización,
          seguridad vial y mobiliario urbano.
        </p>
      </div>
    </div>
  );
};

export default Hero;
