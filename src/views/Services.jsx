import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Services/Hero';
import ServicesContent from '../components/Services/ServicesContent';

const Services = () => {
  const [type, setType] = useState();
  const serviceValue = useLocation().state;

  useEffect(() => {
    if (serviceValue === undefined) {
      setType(0);
    } else {
      setType(serviceValue.type);
    }
  });

  return (
    <>
      <Hero service={type} />
      <ServicesContent service={type} />
    </>
  );
};

export default Services;
