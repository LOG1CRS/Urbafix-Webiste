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
          MODERNIZACIÓN DEL PAISAJE URBANO”
        </h4>
      </div>
      <div className="statistics-numbs">
        <div className="statistics-placed">
          <CountUp start={0} end={490} delay={0} duration={5}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <p>Signs Placed</p>
        </div>
        <div className="statistics-kilometers">
          <CountUp start={0} end={10480} delay={0} duration={4}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <p>Kilometers Panted</p>
        </div>
        <div className="statistics-locations">
          <CountUp start={0} end={50} delay={0} duration={5}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
          <p>Locations</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
