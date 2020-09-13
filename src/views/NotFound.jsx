import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/NotFound/NotFound.scss';
import { home } from '../routes/routes.json';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h3>Pagina no encontrada</h3>
      <Link className="button-primary" to={home}>
        Regresar a Inicio
      </Link>
    </div>
  );
};

export default NotFound;
