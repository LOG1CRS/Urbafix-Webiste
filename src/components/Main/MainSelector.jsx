import React, { useState } from 'react';

import '../../assets/style/Main/MainSelector.scss';
import ButtonsContainer from './ButtonsContainer';

const MainSelector = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="main-selector">
      <h4>QUIERO COTIZAR UN PROYECTO</h4>
      <ButtonsContainer steps={step} setSteps={setStep} />
    </div>
  );
};

export default MainSelector;
