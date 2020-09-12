import React, { useEffect, useState } from 'react';

import '../../assets/style/AboutUs/Badge.scss';

import badge1 from '../../assets/static/badge-1.png';
import badge2 from '../../assets/static/badge-2.png';
import badge3 from '../../assets/static/badge-3.png';
import badge4 from '../../assets/static/badge-4.png';

const Badge = ({ type }) => {
  const [title, setTitle] = useState('');
  const [background, setBackground] = useState();

  useEffect(() => {
    switch (type) {
      case 'trust':
        setTitle('CONFIANZA Y COMPROMISO');
        setBackground(badge1);
        break;
      case 'quality':
        setTitle('CALIDAD Y PRECISIÓN');
        setBackground(badge2);
        break;
      case 'treatment':
        setTitle('TRATO PERSONALIZADO');
        setBackground(badge3);
        break;
      case 'clients':
        setTitle('NUESTROS CLIENTES');
        setBackground(badge4);
        break;
    }
  }, []);

  return (
    <div className="badge">
      <div
        className="badge-wallpaper"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h4 className="badge-title">{title}</h4>
      </div>
    </div>
  );
};

export default Badge;
