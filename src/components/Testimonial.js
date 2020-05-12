import React from 'react';

import '../assets/sass/main.scss';
const Footer = () => (
  <section>
    <form
      name="testimonials"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="fields">
        <div className="field">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea name="mensaje" id="message" rows="5" />
        </div>
        <div className="field half">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="nombre" id="name" />
        </div>
      </div>
      <ul className="actions">
        <button type="submit" className="button submit">
          Guardar
        </button>
      </ul>
    </form>
  </section>
);

export default Footer;
