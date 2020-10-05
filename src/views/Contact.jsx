/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import emailJS from 'emailjs-com';

import '../assets/style/Contact/Contact.scss';
import { emailjs_service_id, emailjs_template_id } from '../keys.json';

const Contact = () => {
  const userValues = useLocation().state;

  useEffect(() => {
    if (userValues !== null) {
      console.log(userValues);
    }
  }, []);

  const clearInputs = () => {
    document.getElementById('name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('message').value = '';
  };

  const dataVerification = (name, lastName, email, number, message) => {
    let verified = false;

    if (
      name !== '' &&
      lastName !== '' &&
      email !== '' &&
      number !== '' &&
      message !== ''
    ) {
      verified = true;
    }

    return verified;
  };

  const sendEmail = (
    name,
    lastName,
    email,
    phone,
    message,
    sector,
    start,
    service
  ) => {
    emailJS.send(emailjs_service_id, emailjs_template_id, {
      name,
      lastName,
      email,
      phone,
      sector,
      start,
      service,
      message,
    });

    swal('Completado!', 'Pronto nos pondremos en contacto contigo', 'success');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const message = document.getElementById('message').value.trim();

    const verified = dataVerification(name, lastName, email, number, message);

    if (!verified) {
      swal(
        'Error!',
        'Completa todos los campos para poder contactar contigo',
        'error'
      );
      return;
    }

    if (userValues === undefined) {
      sendEmail(name, lastName, email, number, message, null, null, null);
    } else {
      sendEmail(
        name,
        lastName,
        email,
        number,
        message,
        userValues[0],
        userValues[1],
        userValues[2]
      );
    }

    clearInputs();
  };

  return (
    <form className="contact" onSubmit={(e) => handleSubmit(e)}>
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contacto.</h1>
        </div>
        <div className="contact-icons">
          <div className="icon-container">
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="description">
              <p>
                Eulogio Parra #2684.
                <br />
                Guadalajara, Jalisco
              </p>
            </div>
          </div>
          <div className="icon-container">
            <div className="icon">
              <i className="far fa-envelope" />
            </div>
            <div className="description">
              <p>ventas@urbafix.com</p>
            </div>
          </div>
          <div className="icon-container">
            <div className="icon">
              <i className="fas fa-phone-alt" />
            </div>
            <div className="description">
              <p>3319638201</p>
            </div>
          </div>
        </div>
        <div className="contact-inputs">
          <div className="inputs">
            <div className="input-space">
              <input
                type="text"
                className="input-field"
                required="require"
                autoComplete="ignore"
                id="name"
              />
              <label className="input-label">Nombre</label>
            </div>
            <div className="input-space">
              <input
                type="text"
                className="input-field"
                required="require"
                autoComplete="ignore"
                id="last-name"
              />
              <label className="input-label">Apellidos</label>
            </div>
          </div>
          <div className="inputs">
            <div className="input-space">
              <input
                type="mail"
                className="input-field"
                required="require"
                autoComplete="ignore"
                id="email"
              />
              <label className="input-label">Correo Electronico</label>
            </div>
            <div className="input-space">
              <input
                type="number"
                className="input-field"
                required="require"
                autoComplete="ignore"
                id="number"
              />
              <label className="input-label">Numero Celular</label>
            </div>
          </div>
        </div>
        <div className="contact-message">
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Mensaje"
          />
        </div>
        <div className="contact-button">
          <button
            type="button"
            className="button-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Contactar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
