/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { horizontalImages, verticalImages } from './carouselImages';

import '../../assets/style/Services/ServicesCarousel.scss';

const ServicesCarousel = (props) => {
  const { service } = props;
  const [images, setImages] = useState(horizontalImages);

  useEffect(() => {
    switch (service) {
      case 1:
        setImages(horizontalImages);
        break;
      case 2:
        setImages(verticalImages);
        break;
      case 3:
        setImages(horizontalImages);
        break;
      case 4:
        setImages(verticalImages);
        break;
      default:
        setImages(horizontalImages);
        break;
    }
  });

  return (
    <div className="services-carousel-container">
      <Carousel
        showIndicators={false}
        dynamicHeight
        autoPlay
        centerMode
        showThumbs={false}
        showStatus={false}
        interval={2500}
        transitionTime={500}
        infiniteLoop
        className="services-carousel"
      >
        {images.map((item, key) => (
          <div
            key={key}
            style={{ backgroundImage: `url(${item})` }}
            // className="slide-service"
            className="services-carousel-img"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
