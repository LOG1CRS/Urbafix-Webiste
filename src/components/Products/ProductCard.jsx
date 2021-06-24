/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Lightbox } from 'react-modal-image';

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
  const [imgModal, setImgModal] = useState(false);
  const [productSelected, setProducSelected] = useState({});

  useEffect(() => {
    switch (title) {
      case 'Señalamiento Vertical':
        setImg(verticalImg);
        break;
      case 'Dispositivos':
        setImg(dispositivosImg);
        setCardHeight('medium-mobile-card');
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

  const handleProductSelection = (product) => {
    setProducSelected(product);
    setImgModal(true);
  };

  const handleCloseModal = () => {
    setProducSelected({});
    setImgModal(false);
  };

  return (
    <>
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
            if (item.doc) {
              return (
                <p
                  className="doc-button"
                  key={index}
                  onClick={() =>
                    handleProductSelection({ img: item.doc, title: item.title })
                  }
                >
                  {item.title}
                  <i className="fas fa-plus file-icon"></i>
                </p>
              );
            } else {
              return <p key={index}>{item.title}</p>;
            }
          })}
        </div>
      </div>
      {imgModal && (
        <Lightbox
          medium={productSelected.img}
          alt={productSelected.title}
          onClose={() => handleCloseModal()}
        />
      )}
    </>
  );
};

export default ProductCard;
