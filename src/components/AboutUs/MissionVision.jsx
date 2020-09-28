import React from 'react';

import '../../assets/style/AboutUs/MissionVision.scss';

const MissionVision = () => {
  return (
    <div className="mission-vision">
      <div className="mission">
        <div className="mission-container" data-aos="zoom-in-right">
          <div className="mission-title">
            <h4>MISIÓN</h4>
          </div>
          <div className="mission-description">
            <p>
              Estamos comprometidos en satisfacer a nuestros cliente, dando
              soluciones integrales enfocadas a la prevención de accidentes y
              protección vial, siempre ofreciendo productos y servicios de alta
              calidad y profesionalismo.
            </p>
          </div>
        </div>
      </div>
      <div className="vision">
        <div className="mission-container" data-aos="zoom-in-left">
          <div className="mission-title">
            <h4 className="vision-title">VISIÓN</h4>
          </div>
          <div className="mission-description">
            <p>
              Expandir nuestro servicio a todo el país, ofreciendo un servicio
              integral donde nuestro principio básico sea satisfacer las
              necesidades de nuestros clientes con calidad y el buen servicio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
