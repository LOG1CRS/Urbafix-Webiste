import React from 'react';

import '../../assets/style/Main/WhoIsUrbafix.scss';

import whoImg from '../../assets/static/who-image.png';

const WhoIsUrbafix = () => {
  return (
    <div className="who-is-urbafix">
      <div className="who-main">
        <div className="who-image-container">
          <img className="who-img" src={whoImg} alt="who-is-urbafix" />
        </div>
        <div className="who-text-container">
          <div className="who-title">
            <h2>¿QUIÉN ES URBAFIX?</h2>
          </div>
          <div className="who-text">
            <p>
              Somos una empresa 100% mexicana, especializada en productos y
              servicios de alto rendimiento en la industria de señalización,
              seguridad vial y mobiliario urbano.
            </p>
            <br />
            <p>
              Nuestra experiencia, calidad y profesionalismo nos permite
              ofrecerle soluciones integrales mediante servicios personalizados
              así como los productos y marcas de mas alta calidad.
            </p>
          </div>
          <div className="who-button-container">
            <button type="button" className="button-primary who-button">
              Acerca de nosotros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsUrbafix;