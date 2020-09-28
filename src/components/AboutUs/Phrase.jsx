import React from 'react';

import '../../assets/style/AboutUs/Phrase.scss';
import logoImg from '../../assets/static/urbafix-logo-web.png';

const Phrase = () => {
  return (
    <div className="phrase">
      <div className="phrase-container">
        <img
          className="phrase-logo"
          src={logoImg}
          alt=""
          data-aos="flip-left"
        />
        <h4 data-aos="fade-zoom-in" data-aos-offset="0" data-aos-delay="100">
          &quot;Grandes Proyectos Para Grandes Ciudades&quot;
        </h4>
        <p data-aos="fade-zoom-in" data-aos-offset="0" data-aos-delay="100">
          - Urbafix
        </p>
      </div>
    </div>
  );
};

export default Phrase;
