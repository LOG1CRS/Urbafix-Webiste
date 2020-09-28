import React, { useEffect, useState } from 'react';

import '../../assets/style/Services/Details.scss';

import horizontal1 from '../../assets/static/horizontal-service-1.jpg';
import horizontal2 from '../../assets/static/horizontal-service-2.jpg';
import vertical1 from '../../assets/static/vertical-service-1.jpg';
import vertical2 from '../../assets/static/vertical-service-2.jpg';
import project1 from '../../assets/static/proyectos-service-1.jpg';
import project2 from '../../assets/static/proyectos-service-2.jpg';
import furniture1 from '../../assets/static/mobiliario-service-1.jpg';
import furniture2 from '../../assets/static/mobiliario-service-2.jpg';

const horizontalFirstContent = () => {
  return (
    <p>
      Ofrecemos un gran número de dispositivos que pueden ser instalados a lo
      largo de las vías o carreteras para guiar a la circulación y mejorar la
      seguridad. Siempre realizando proyectos que cumplan con las normas
      mundiales de calidad.
    </p>
  );
};

const horizontalSecondContent = () => {
  return (
    <p>
      El
      <strong> señalamiento horizontal </strong>
      se compone de todas las marcas pintadas o colocadas sobre el pavimento,
      guarniciones y estructuras, con el objetivo de delinear las carreteras y
      vialidades urbanas, además de denotar todos aquellos elementos
      estructurales que estén instalados dentro del derecho de vía, para regular
      y canalizar el tránsito de vehículos y peatones, así como proporcionar
      información de los usuarios. Estas marcas son
      <strong> rayas, símbolos, leyendas o dispositivos </strong>.
    </p>
  );
};

const verticalFirstContent = () => {
  return (
    <p>
      Según su propósito ofrecemos soluciones de gran calidad y precisión, si se
      tiene por objeto prevenir al usuario sobre la existencia de algún peligro
      potencial en el camino y su naturaleza se utilizan
      <strong> señales preventivas</strong>.
      <br />
      Si se busca regular el tránsito indicando al usuario la existencia de
      limitaciones físicas o prohibiciones reglamentarias que restringen el uso
      de la vialidad, las
      <strong>señales restrictivas </strong>
      son la opción correcta. Para informar sobre la existencia de servicios o
      de algún lugar de interés turístico o recreativo se utilizarán las
      <strong>señales turísticas y de servicios</strong>.
    </p>
  );
};

const verticalSecondContent = () => {
  return (
    <p>
      Las
      <strong> señales informativas </strong>
      se utilizarán cuando se tenga por objeto guiar al usuario a lo largo de su
      itinerario por carreteras y vialidades urbanas, e informarle sobre nombres
      y ubicación de poblaciones y de vialidades, lugares de interés, distancias
      en kilómetros, entre otras recomendaciones que convenga observar.
      <br />
      Si se busca encauzar y prevenir a los usuarios de las carreteras y
      vialidades urbanas de la existencia de objetos dentro del derecho de vía,
      de bifurcaciones en la carretera o vialidad urbana, además de delinear sus
      características geométricas, entre otras funciones se utilizarán
      <strong> dispositivos diversos</strong>.
    </p>
  );
};

const projectsFirstContent = () => {
  return (
    <p>
      Desarrollo de proyectos de acuerdo con las necesidades y especificaciones
      particulares del cliente.
    </p>
  );
};

const furnitureFirstContent = () => {
  return (
    <p>
      Equipamos y diseñamos espacios públicos, escuelas, y centros comerciales
      con el mejor mobiliario.
    </p>
  );
};

const furnitureSecondContent = () => {
  return (
    <p>
      El mobiliario urbano está compuesto por todos los elementos fijos que se
      localizan en los espacios públicos. Urbafix se preocupa por la alta
      durabilidad y permanencia de estos espacios por lo que utiliza materiales
      resistentes con especificaciones de calidad que garanticen su estabilidad.
    </p>
  );
};

const Details = (props) => {
  const { service } = props;

  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  const [firstContent, setFirstContent] = useState(null);
  const [secondContent, setSecondContent] = useState(null);

  useEffect(() => {
    switch (service) {
      case 1:
        setFirstImage(horizontal1);
        setSecondImage(horizontal2);
        setFirstContent(horizontalFirstContent);
        setSecondContent(horizontalSecondContent);
        break;
      case 2:
        setFirstImage(vertical1);
        setSecondImage(vertical2);
        setFirstContent(verticalFirstContent);
        setSecondContent(verticalSecondContent);
        break;
      case 3:
        setFirstImage(project1);
        setSecondImage(project2);
        setFirstContent(projectsFirstContent);
        setSecondContent(null);
        break;
      case 4:
        setFirstImage(furniture1);
        setSecondImage(furniture2);
        setFirstContent(furnitureFirstContent);
        setSecondContent(furnitureSecondContent);
        break;
      default:
        setFirstImage(horizontal1);
        setSecondImage(horizontal2);
        setFirstContent(horizontalFirstContent);
        setSecondContent(horizontalSecondContent);
        break;
    }
  }, [service]);

  return (
    <>
      <div className="services-details first-details">
        <div className="details-photo-container">
          <img src={firstImage} alt="service" className="details-img" />
        </div>
        <div className="detail-text-container" data-aos="fade-up">
          {firstContent}
        </div>
      </div>
      <div className="services-details second-details">
        <div className="detail-text-container" data-aos="fade-up">
          {secondContent}
        </div>
        <div className="details-photo-container">
          <img src={secondImage} alt="service" className="details-img" />
        </div>
      </div>
    </>
  );
};

export default Details;
