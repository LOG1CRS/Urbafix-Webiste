import React from 'react';

import '../../assets/style/Main/SelectorButton.scss';

const SelectorButton = (props) => {
  const { item } = props;
  return (
    <div className="main-card">
      <img src={item.img} alt="" />
      <p>{item.type}</p>
    </div>
  );
};

export default SelectorButton;
