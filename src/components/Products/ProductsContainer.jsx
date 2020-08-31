import React from 'react';
import ProductCard from './ProductCard';

import '../../assets/style/Products/ProductsContainer.scss';

const ProductsContainer = () => {
  return (
    <div className="products-container">
      <div className="card-1 card">
        <ProductCard
          color="#E9E9E9"
          title="Señalamiento Vertical"
          type1="Señalamiento preventivo"
          type2="Señalamiento restrictivo"
          type3="Señalamiento turistico"
          type4="Señalamiento de servicios"
          type5="Señalamiento informativo"
          type6="Señalamiento de información general"
        />
      </div>
      <div className="card-2 card">
        <ProductCard
          color="#fff"
          title="Dispositivos"
          type1="Reductores de velocidad"
          type2="Topes de estacionamiento"
          type3="Esquineros"
        />
      </div>
      <div className="card-3 card">
        <ProductCard
          color="#E9E9E9"
          title="Viniles Reflejantes"
          type1="Alta intensidad"
          type2="Topes de Alta intensidad fluorescente"
          type3="Grado ingeniería prismático "
        />
      </div>
      <div className="card-4 card">
        <ProductCard
          color="#fff"
          title="Botones"
          type1="Botón hibrido 360"
          type2="Botón óptico"
        />
      </div>
      <div className="card-5 card">
        <ProductCard
          color="#E9E9E9"
          title="Delineadores"
          type1="Delineador tipo A"
          type2="Delineador tipo B"
          type3="Delineador tipo C"
          type4="Delineadores 55"
        />
      </div>
      <div className="card-6 card">
        <ProductCard
          color="#fff"
          title="Boyas"
          type1="Boya premium"
          type2="Boya solar"
          type3="Boya solida"
          type4="Boya delineadora"
          type5="Mini boya"
          type6="Micro boya"
        />
      </div>
      <div className="card-7 card">
        <ProductCard
          color="#E9E9E9"
          title="Marcador Reflectivo"
          type1="Unidireccional"
          type2="Bidireccional"
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
