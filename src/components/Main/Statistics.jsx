/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CountUp from 'react-countup';

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
          <CountUp start={0} end={490} delay={0} duration={5} redraw="true">
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <p>Señales Colocadas</p>
        </div>
        <div className="statistics-kilometers">
          <CountUp start={0} end={10480} delay={0} duration={4} redraw="true">
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <p>Kilometros Pintados.</p>
        </div>
        <div className="statistics-locations">
          <CountUp start={0} end={50} delay={0} duration={5} redraw="true">
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <p>Ubicaciones</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
