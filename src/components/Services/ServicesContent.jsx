import React from 'react';
import Details from './Details';
import ServicesCarousel from './ServicesCarousel';

const ServicesContent = ({ service }) => {
  return (
    <>
      {/* <Details service={service} /> */}
      <ServicesCarousel service={service} />
    </>
  );
};

export default ServicesContent;
