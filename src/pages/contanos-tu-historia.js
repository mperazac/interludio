import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { navigate, Link } from 'gatsby';
import gql from 'graphql-tag';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import aniversarioImg from '../images/aniversario/Aniversario-2.png';

const ADD_TESTIMONIAL = gql`
  mutation insert_testimonial($nombre: String!, $mensaje: String!) {
    insert_testimonials(objects: { name: $nombre, comment: $mensaje }) {
      returning {
        name
        comment
      }
    }
  }
`;

const ContanosTuHistoria = () => {
  const [addTestimonial] = useMutation(ADD_TESTIMONIAL);
  const [mensaje, setTestimonialMessage] = useState('');
  const [nombre, setTestimonialName] = useState('');

  return (
    <Layout>
      <Header />
      <div id="stories">
        <section id="main" className="wrapper">
          <div className="inner">
            <div className="image fit">
              <img
                src={aniversarioImg}
                alt="Aniversario"
                data-position="center center"
              />
            </div>
            <p>Contanos, ¿que es Interludio para vos?</p>
            <div className="style1">
              <section>
                <form
                  name="testimonials"
                  method="post"
                  onSubmit={e => {
                    e.preventDefault();
                    addTestimonial({
                      variables: {
                        nombre,
                        mensaje,
                      },
                    });
                    navigate(`/mi-historia`);
                  }}
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="fields">
                    <div className="field">
                      <label htmlFor="mensaje">Mensaje</label>
                      <textarea
                        name="mensaje"
                        id="message"
                        rows="5"
                        value={mensaje}
                        onChange={e => setTestimonialMessage(e.target.value)}
                      />
                    </div>
                    <div className="field half">
                      <label htmlFor="name">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        id="name"
                        value={nombre}
                        onChange={e => setTestimonialName(e.target.value)}
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <button type="submit" className="button submit">
                      Guardar
                    </button>
                  </ul>
                  <ul className="actions">
                    <Link
                      key="link"
                      className="button submit"
                      to="/mi-historia"
                    >
                      Ver Todas
                    </Link>
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
};

export default ContanosTuHistoria;
