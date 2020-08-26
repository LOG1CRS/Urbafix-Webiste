/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/style/Main/WhiteService.scss';

import verticalImg from '../../assets/static/vertical-main-service.png';
import mobiliarioImg from '../../assets/static/mobiliario-main-service.png';

const WhiteService = ({ type }) => {
  const [mainImg, setMainImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    switch (type) {
      case 'vertical':
        setTitle('SEÑALAMIENTO VERTICAL');
        setMainImg(verticalImg);
        setDescription(
          'Soluciones en área de señalización vertical, horizontal y seguridad vial.'
        );
        // setAddress({
        //   pathname: '/services',
        //   state: {
        //     type: 2,
        //   },
        // });
        setAddress('/services');
        break;
      case 'mobiliario':
        setTitle('MOBILIARIO URBANO');
        setMainImg(mobiliarioImg);
        setDescription(
          'Equipamos y diseñamos espacios públicos, escuelas y centros comerciales con el mejor mobiliario.'
        );
        // setAddress({
        //   pathname: '/services',
        //   state: {
        //     type: 4,
        //   },
        // });
        setAddress('/services');
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
          <Link to={address}>
            <button type="button" className="button-primary">
              Conocer Más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhiteService;
