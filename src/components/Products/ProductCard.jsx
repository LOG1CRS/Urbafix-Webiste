import React, { useEffect, useState } from 'react';

import '../../assets/style/Products/ProductCard.scss';

import verticalImg from '../../assets/static/vertical-service.png';
import dispositivosImg from '../../assets/static/dispositivos-service.png';
import vinilesImg from '../../assets/static/viniles-service.png';
import botonesImg from '../../assets/static/botones-service.jpg';
import boyasImg from '../../assets/static/boyas-service.png';
import delineadoresImg from '../../assets/static/delineadores-service.png';
import marcadorImg from '../../assets/static/marcador-service.png';

const ProductCard = ({
  color,
  title,
  type1,
  type2,
  type3,
  type4,
  type5,
  type6,
}) => {
  const [img, setImg] = useState();

  useEffect(() => {
    switch (title) {
      case 'Señalamiento Vertical':
        setImg(verticalImg);
        break;
      case 'Dispositivos':
        setImg(dispositivosImg);
        break;
      case 'Viniles Reflejantes':
        setImg(vinilesImg);
        break;
      case 'Botones':
        setImg(botonesImg);
        break;
      case 'Boyas':
        setImg(boyasImg);
        break;
      case 'Delineadores':
        setImg(delineadoresImg);
        break;
      case 'Marcador Reflectivo':
        setImg(marcadorImg);
        break;
    }
  });

  return (
    <div className="product-card" style={{ backgroundColor: `${color}` }}>
      <div className="product-card-img">
        <div
          className="product-img-container"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <div className="product-card-title">
        <h4>{title}</h4>
      </div>
      <div className="product-card-types">
        <p>{type1}</p>
        <p>{type2}</p>
        <p>{type3}</p>
        <p>{type4}</p>
        <p>{type5}</p>
        <p>{type6}</p>
      </div>
    </div>
  );
};

export default ProductCard;
