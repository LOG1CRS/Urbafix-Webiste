import React from 'react';

import '../../assets/style/AboutUs/Phrase.scss';
import logoImg from '../../assets/static/urbafix-logo-web.png';

const Phrase = () => {
  return (
    <div className="phrase">
      <div className="phrase-container">
        <img className="phrase-logo" src={logoImg} alt="" />
        <h4>&quot;Grandes Proyectos Para Grandes Ciudades&quot;</h4>
        <p>- Urbafix</p>
      </div>
    </div>
  );
};

export default Phrase;
