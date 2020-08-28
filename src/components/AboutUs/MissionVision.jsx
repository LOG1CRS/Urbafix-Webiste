import React from 'react';

import worldIcon from '../../assets/static/world-icon.png';
import coneIcon from '../../assets/static/cone-icon.png';
import '../../assets/style/AboutUs/MissionVision.scss';

const MissionVision = () => {
  return (
    <div className="mission-vision">
      <div className="mission">
        <div className="mission-container">
          <div className="mission-title">
            <img className="mission-icon" src={coneIcon} alt="" />
            <h4>MISIÓN:</h4>
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
        <div className="mission-container">
          <div className="mission-title">
            <img className="mission-icon" src={worldIcon} alt="" />
            <h4 className="vision-title">VISIÓN:</h4>
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
