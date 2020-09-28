/* eslint-disable react/no-array-index-key */
import React from 'react';
import clientsImg from './clientsImg';

import '../../assets/style/AboutUs/Clients.scss';

const Clients = () => {
  return (
    <div className="clients">
      {clientsImg.map((item, index) => (
        <img key={index} src={item} className="clients-img" alt="client" />
      ))}
    </div>
  );
};

export default Clients;
