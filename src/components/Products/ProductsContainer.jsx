import React from 'react';
import ProductCard from './ProductCard';

import '../../assets/style/Products/ProductsContainer.scss';
import {
  señalamientoVertical,
  dispositivos,
  vinilesReflejantes,
  botones,
  delineadores,
  boyas,
  marcadorReflectivo,
} from '../Util/products.json';

const ProductsContainer = () => {
  return (
    <div className="products-cards-container" id="products">
      <div className="card-1 card">
        <ProductCard
          color="#E9E9E9"
          title="Señalamiento Vertical"
          content={señalamientoVertical}
        />
      </div>
      <div className="card-2 card small-mobile-card">
        <ProductCard color="#fff" title="Dispositivos" content={dispositivos} />
      </div>
      <div className="card-3 card">
        <ProductCard
          color="#E9E9E9"
          title="Viniles Reflejantes"
          content={vinilesReflejantes}
        />
      </div>
      <div className="card-4 card small-mobile-card">
        <ProductCard color="#fff" title="Botones" content={botones} />
      </div>
      <div className="card-5 card">
        <ProductCard
          color="#E9E9E9"
          title="Delineadores"
          content={delineadores}
        />
      </div>
      <div className="card-6 card">
        <ProductCard color="#fff" title="Boyas" content={boyas} />
      </div>
      <div className="card-7 card small-mobile-card">
        <ProductCard
          color="#E9E9E9"
          title="Marcador Reflectivo"
          content={marcadorReflectivo}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
