/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import '../../assets/style/Products/ProductCard.scss';

import verticalImg from '../../assets/static/vertical-service.png';
import dispositivosImg from '../../assets/static/dispositivos-service.png';
import vinilesImg from '../../assets/static/viniles-service.jpg';
import botonesImg from '../../assets/static/botones-service.jpg';
import boyasImg from '../../assets/static/boyas-service.png';
import delineadoresImg from '../../assets/static/delineadores-service.png';
import marcadorImg from '../../assets/static/marcador-service.png';

const ProductCard = ({ color, title, content }) => {
  const [img, setImg] = useState();
  const [cardHeight, setCardHeight] = useState('');
  const [marginTop, setMarginTop] = useState(null);

  useEffect(() => {
    switch (title) {
      case 'Señalamiento Vertical':
        setImg(verticalImg);
        break;
      case 'Dispositivos':
        setImg(dispositivosImg);
        setCardHeight('small-mobile-card');
        break;
      case 'Viniles Reflejantes':
        setImg(vinilesImg);
        break;
      case 'Botones':
        setImg(botonesImg);
        setCardHeight('small-mobile-card');
        break;
      case 'Boyas':
        setImg(boyasImg);
        break;
      case 'Dispositivos de Protección de Obra':
        setImg(delineadoresImg);
        setMarginTop('100px');
        break;
      case 'Marcador Reflectivo':
        setImg(marcadorImg);
        setCardHeight('small-mobile-card');
        break;
    }
  }, []);

  return (
    <div
      className={`product-card ${cardHeight}`}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="product-card-img">
        <div
          className="product-img-container"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <div
        className="product-card-title"
        style={{ paddingTop: `${marginTop}` }}
      >
        <h4>{title}</h4>
      </div>
      <div
        className="product-card-types"
        style={{ paddingTop: `calc(${marginTop} - 30px)` }}
      >
        {content.map((item, index) => {
          if (item.pdf) {
            return (
              <a
                href={item.pdf}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            );
          } else {
            return <p key={index}>{item.title}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default ProductCard;
