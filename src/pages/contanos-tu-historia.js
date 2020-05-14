import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="stories">
      <section id="main" className="wrapper">
        <div className="inner">
          <h2>Celebramos 12 años juntos</h2>
          <p>Contanos, ¿que es Interludio para vos?</p>
          <div className="style1">
            <section>
              <form
                name="testimonials"
                method="post"
                action="/mi-historia"
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
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
