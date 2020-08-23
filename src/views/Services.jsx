import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Services/Hero';

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
    </>
  );
};

export default Services;
