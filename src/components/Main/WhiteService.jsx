import React, { useEffect, useState } from 'react';

import '../../assets/style/Main/WhiteService.scss';

import verticalImg from '../../assets/static/vertical-main-service.png';
import mobiliarioImg from '../../assets/static/mobiliario-main-service.png';

const WhiteService = ({ type }) => {
  const [mainImg, setMainImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    switch (type) {
      case 'vertical':
        setTitle('SEÑALAMIENTO VERTICAL');
        setMainImg(verticalImg);
        setDescription(
          'Soluciones en área de señalización vertical, horizontal y seguridad vial.'
        );
        break;
      case 'mobiliario':
        setTitle('MOBILIARIO URBANO');
        setMainImg(mobiliarioImg);
        setDescription(
          'Equipamos y diseñamos espacios públicos, escuelas y centros comerciales con el mejor mobiliario.'
        );
        break;
    }
  });

  return (
    <div className="white-service">
      <div className="white-service-img-container">
        <img className="white-service-img" src={mainImg} alt="service" />
      </div>
      <div
        className="white-service-img-mobile"
        style={{ backgroundImage: `url(${mainImg})` }}
      />
      <div className="white-service-space">
        <div className="white-service-content">
          <h3>{title}</h3>
          <div className="service-line" />
          <p>{description}</p>
          <button type="button" className="button-primary">
            Conocer Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhiteService;
