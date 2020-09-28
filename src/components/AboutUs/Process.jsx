import React from 'react';

import '../../assets/style/AboutUs/Process.scss';
import process from '../../assets/static/Process.jpg';

const Process = () => {
  return (
    <div
      className="process"
      data-aos="fade-zoom-in"
      data-aos-offset="0"
      data-aos-delay="300"
    >
      <img className="process-img" src={process} alt="" />
    </div>
  );
};

export default Process;
