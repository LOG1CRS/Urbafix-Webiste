import React from 'react';
import { Link } from 'react-router-dom';
import { home } from '../routes/routes.json';

import '../assets/style/NotFound/OnBuild.scss';

const OnBuild = () => {
  return (
    <div className="OnBuild">
      <h1>Pagina en Desarrollo</h1>
      <h3>Estamos trabajando en ello.</h3>
      <Link className="button-primary" to={home}>
        Regresar a Inicio
      </Link>
    </div>
  );
};

export default OnBuild;
