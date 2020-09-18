/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import '../../assets/style/Main/Statistics.scss';

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-phrase">
        <h4>
          “NUESTRO TRABAJO ES EL REFLEJO DE LA
          <br />
          <strong>MODERNIZACIÓN </strong>
          DEL
          <strong> PAISAJE URBANO</strong>”
        </h4>
      </div>
      <div className="statistics-numbs">
        <div className="statistics-placed">
          <CountUp end={490} duration={3}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} scrollCheck delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>Señales Colocadas</p>
        </div>
        <div className="statistics-kilometers">
          <CountUp end={10480} duration={3}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} scrollCheck delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>Kilometros Pintados.</p>
        </div>
        <div className="statistics-locations">
          <CountUp end={50} duration={5}>
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
