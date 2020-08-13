/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import '../assets/style/Contact/Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
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
              />
              <label className="input-label">Nombre</label>
            </div>
            <div className="input-space">
              <input
                type="text"
                className="input-field"
                required="require"
                autoComplete="ignore"
              />
              <label className="input-label">Apellidos</label>
            </div>
          </div>
          <div className="inputs">
            <div className="input-space">
              <input
                type="email"
                className="input-field"
                required="require"
                autoComplete="ignore"
              />
              <label className="input-label">Correo Electronico</label>
            </div>
            <div className="input-space">
              <input
                type="number"
                className="input-field"
                required="require"
                autoComplete="ignore"
              />
              <label className="input-label">Numero Celular</label>
            </div>
          </div>
        </div>
        <div className="contact-message">
          <textarea
            name=""
            id="textarea-message"
            cols="30"
            rows="10"
            placeholder="Mensaje"
          />
        </div>
        <div className="contact-button">
          <button type="button" className="button-primary">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
