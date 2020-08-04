/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import '../assets/style/Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contacto.</h1>
        </div>
        <div className="contact-icons">
          <div className="icon-location">
            <p>location</p>
          </div>
          <div className="icon-mail">
            <p>mail</p>
          </div>
          <div className="icon-movil">
            <p>movil</p>
          </div>
        </div>
        <div className="contact-inputs">
          <div className="inputs">
            <div className="input-space">
              <input type="text" className="input-field" />
              <label>Name</label>
              <span />
            </div>
            <div className="input-space">
              <input type="text" className="input-field" />
              <label>Name</label>
              <span />
            </div>
          </div>
          <div className="inputs">
            <div className="input-space">
              <input type="text" className="input-field" />
              <label>Name</label>
              <span />
            </div>
            <div className="input-space">
              <input type="text" className="input-field" />
              <label>Name</label>
              <span />
            </div>
          </div>
        </div>
        <div className="contact-message">
          <textarea name="" id="" cols="30" rows="10" />
        </div>
        <div className="contact-button">
          <button type="button">Contactar</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
