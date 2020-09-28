/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/style/Main/BlackService.scss';
import { services, products } from '../../routes/routes.json';

import horizontalImg from '../../assets/static/horizontal-main-service.png';
import proyectosImg from '../../assets/static/proyectos-main-service.png';
import productosImg from '../../assets/static/productos-main-service.png';

const BlackService = ({ type }) => {
  const [mainImg, setMainImg] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    switch (type) {
      case 'horizontal':
        setTitle('SEÑALAMIENTO HORIZONTAL');
        setMainImg(horizontalImg);
        setDescription(
          'Proyectos que cumplen con las normas mundiales de calidad.'
        );
        setAddress({
          pathname: services,
          state: {
            type: 1,
          },
        });
        break;
      case 'proyectos':
        setTitle('PROYECTOS A LA MEDIDA');
        setMainImg(proyectosImg);
        setDescription(
          'Desarrollo de proyectos de acuerdo a las necesidades y especificaciones del cliente.'
        );
        setAddress({
          pathname: services,
          state: {
            type: 3,
          },
        });
        break;
      case 'productos':
        setTitle('PRODUCTOS');
        setMainImg(productosImg);
        setDescription(
          'Topes para estacionamiento, reductores  de velocidad, protectores columna y pared. Productos fabricados 100 % a partir de hule reciclado.'
        );
        setAddress({
          pathname: products,
        });
        break;
    }
  }, []);

  return (
    <div className="black-service">
      <div className="black-service-space">
        <div className="black-service-content" data-aos="fade-up">
          <h3>{title}</h3>
          <div className="service-line" />
          <p>{description}</p>
          <Link className="link-clear" to={address}>
            <button type="button" className="button-primary">
              Conocer Más
            </button>
          </Link>
        </div>
      </div>
      <div
        className="black-service-img-mobile"
        style={{ backgroundImage: `url(${mainImg})` }}
      />
    </div>
  );
};

export default BlackService;
