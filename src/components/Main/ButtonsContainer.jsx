/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { contact } from '../../routes/routes.json';

import '../../assets/style/Main/MainSelector.scss';
import SelectorButton from './SelectorButton';

import publicImg from '../../assets/static/selector-public.png';
import privateImg from '../../assets/static/selector-private.png';
import consultoryImg from '../../assets/static/selector-consultory.png';
import cotizationImg from '../../assets/static/selector-cotization.png';
import horizontalImg from '../../assets/static/selector-horizontal.png';
import verticalImg from '../../assets/static/selector-vertical.png';
import projectsImg from '../../assets/static/selector-projects.png';
import furnitureImg from '../../assets/static/selector-furniture.png';

const steps1 = [
  { type: 'Privado', img: privateImg },
  { type: 'Publico', img: publicImg },
];

const steps2 = [
  { type: 'Consultoría', img: consultoryImg },
  { type: 'Cotización', img: cotizationImg },
];

const steps3 = [
  { type: 'Señalamiento Horizontal', img: horizontalImg },
  { type: 'Señalamiento Vertical', img: verticalImg },
  { type: 'Proyecto a la Medida', img: projectsImg },
  { type: 'Mobiliario Urbano', img: furnitureImg },
];

const ButtonsContainer = (props) => {
  const history = useHistory();

  const { steps, setSteps } = props;
  const [userValues, setUserValues] = useState([]);
  const [title, setTitle] = useState('');
  const [buttons, setButtons] = useState(steps1);

  useEffect(() => {
    const setMainValues = () => {
      switch (steps) {
        case 0:
          setTitle('¿A que tipo de sector va dirigido el proyecto?');
          setButtons(steps1);
          break;
        case 1:
          setTitle('¿Con que quieres empezar?');
          setButtons(steps2);
          break;
        case 2:
          setTitle('¿Qué servicio necesitas?');
          setButtons(steps3);
          break;
        default:
          setTitle('¿A que tipo de sector va dirigido el proyecto?');
          setButtons(steps1);
          break;
      }
    };

    setMainValues();
  }, [steps]);

  const stepHandler = (type) => {
    setUserValues([...userValues, type]);

    if (steps < 2) {
      setSteps(steps + 1);
    } else {
      setSteps(0);
      history.push({
        pathname: contact,
        state: userValues,
      });
      setUserValues([]);
    }
  };

  return (
    <div className="button-container">
      <h5>{title}</h5>
      <div className="cards-container">
        {buttons.map((item, index) => (
          <div
            key={index}
            onClick={() => stepHandler(item.type)}
            className="buttons"
          >
            <SelectorButton item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;
