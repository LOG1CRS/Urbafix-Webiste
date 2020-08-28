import React from 'react';

import '../../assets/style/AboutUs/Clients.scss';

import clientsImg from '../../assets/static/clients.png';

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients-img-large">
        <img className="clients-img" src={clientsImg} alt="" />
      </div>
      <div className="clients-img-mobile">
        <img className="clients-img" src={clientsImg} alt="" />
      </div>
    </div>
  );
};

export default Clients;
