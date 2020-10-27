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
      Ofrecemos un gran número de
      <strong> dispositivos </strong>
      que pueden ser instalados a lo largo de las
      <strong> vías </strong>o<strong> carreteras </strong>
      para guiar a la circulación y mejorar la seguridad.
    </p>
  );
};

const horizontalSecondContent = () => {
  return (
    <p>
      El
      <strong> señalamiento horizontal </strong>
      se compone de todas las marcas pintadas o colocadas sobre el pavimento,
      guarniciones y estructuras.Estas marcas son
      <strong> rayas, símbolos, leyendas o dispositivos </strong>.
    </p>
  );
};

const verticalFirstContent = () => {
  return (
    <p>
      Según su propósito ofrecemos soluciones de gran calidad y precisión. El
      señalamiento vertical busca <strong>prevenir</strong> sobre la existencia
      de algún peligro potencial, <strong>regula</strong> el tránsito, e
      <strong> informa </strong>
      sobre servicios o lugares turísticos y recreativos.
    </p>
  );
};

const verticalSecondContent = () => {
  return (
    <p>
      También, <strong>guían</strong> al usuario a lo largo de su itinerario por
      carreteras y vialidades urbanas, y <strong>delinean</strong> sus
      características geométricas.
    </p>
  );
};

const projectsFirstContent = () => {
  return (
    <p>
      Desarrollamos proyectos de acuerdo a las <strong>necesidades</strong> y
      <strong> especificaciones</strong> particulares del cliente, siempre
      realizando trabajos que cumplan con las normas mundiales de
      <strong>calidad</strong>.
    </p>
  );
};

const projectsSecondContent = () => {
  return (
    <p>
      Contamos con un trato personalizado, apoyamos a nuestros clientes y
      proponemos <strong>soluciones innovadoras</strong> a sus problemáticas
      para conseguir los resultados esperados.
    </p>
  );
};

const furnitureFirstContent = () => {
  return (
    <p>
      Dentro de nuestros proyectos de urbanismo,
      <strong> equipamos y diseñamos</strong> espacios públicos, escuelas,
      centros comerciales, entre otros, con el mejor mobiliario y señalética.
    </p>
  );
};

const furnitureSecondContent = () => {
  return (
    <p>
      Urbafix se preocupa por la alta <strong>durabilidad y permanencia </strong>
      de estos espacios por lo que utiliza materiales resistentes con
      especificaciones de <strong>calidad</strong> que garanticen su
      estabilidad.
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
        setSecondContent(projectsSecondContent);
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
