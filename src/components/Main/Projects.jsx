/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../../assets/style/Main/Projects.scss';
import projectsImg from './projectsImg';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <h4>PROYECTOS</h4>
      </div>
      <div className="projects-carousel">
        <Carousel
          autoPlay
          stopOnHover
          showThumbs={false}
          showStatus={false}
          interval={4500}
          transitionTime={500}
          infiniteLoop
          centerMode
          className="carousel-projects"
        >
          {projectsImg.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
              className="carousel-projects-img"
            >
              <div className="carousel-description">
                <h3 className="">{item.title}</h3>
                <h5 className="">{`Proyecto: ${item.project}`}</h5>
                <h5 className="">{`Trabajo: ${item.work}`}</h5>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
