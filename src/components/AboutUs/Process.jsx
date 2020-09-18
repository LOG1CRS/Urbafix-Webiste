import React from 'react';

import '../../assets/style/AboutUs/Process.scss';
import process from '../../assets/static/Process.jpg';

const Process = () => {
  return (
    <div className="process">
      <img className="process-img" src={process} alt="" />
    </div>
  );
};

export default Process;
