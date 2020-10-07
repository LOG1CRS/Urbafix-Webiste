/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
// import Typewriter from 'typewriter-effect';

import '../../assets/style/Main/Statistics.scss';

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-phrase">
        <h4 data-aos="fade-zoom-in" data-aos-offset="0" data-aos-delay="300">
          {/* <VisibilitySensor onChange={(typewriter) => typewriter.start}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '“NUESTRO TRABAJO ES EL REFLEJO DE LA MODERNIZACIÓN DEL PAISAJE URBANO”'
                  )
                  .start();
              }}
            />
          </VisibilitySensor> */}
          “NUESTRO TRABAJO ES EL REFLEJO DE LA
          <br />
          <strong>MODERNIZACIÓN </strong>
          DEL
          <strong> PAISAJE URBANO</strong>”
        </h4>
      </div>
      <div className="statistics-numbs">
        <div className="statistics-placed">
          <CountUp end={5798} duration={3} separator=",">
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} scrollCheck delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>Señales Colocadas</p>
        </div>
        <div className="statistics-kilometers">
          <CountUp end={49847} duration={3} separator=",">
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} scrollCheck delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>Metros Lineales Pintados</p>
        </div>
        <div className="statistics-locations">
          <CountUp end={56} duration={5} separator=",">
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} scrollCheck delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>Ubicaciones</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
