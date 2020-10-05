/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Typewriter from 'typewriter-effect';

import '../../assets/style/AboutUs/Solutions.scss';

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="solutions-container">
        <h4>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'SOLUCIONES MODERNAS CON ALTOS ESTÁNDARES DE CALIDAD'
                )
                .start();
            }}
          />
          {/* SOLUCIONES <strong>MODERNAS</strong> CON ALTOS ESTÁNDARES DE
          <strong> CALIDAD</strong>. */}
        </h4>
        <p data-aos="fade-zoom-in" data-aos-offset="0" data-aos-delay="300">
          Buscamos y creamos proyectos de carácter contemporáneo, de acuerdo a
          las normas de seguridad vial internacionales y con una estética
          moderna acorde a los tiempos que vivimos.
        </p>
      </div>
    </div>
  );
};

export default Solutions;
