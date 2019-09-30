import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/pic01.jpg';
import pic2 from '../images/pic02.jpg';
import pic3 from '../images/pic03.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>Interludio Costa Rica</h1>
          <p>
            Somos la Iglesia de la gente imperfecta que ha aprendido a amarse.
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="vision-mision">
                <a href="#vision-mision" className="button">
                  Conocé más
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="vision-mision" className="wrapper style3 fade-up">
        <div className="inner">
          {/* <h2>Visión y Misión</h2> */}
          <div className="features">
            <section>
              <span className="icon major fa-users" />
              <h3>Visión</h3>
              <p>
                Crear una iglesia seguidora de Jesús y ser una comunidad
                reconciliadora y un refugio que integra a todas las personas sin
                distinción alguna.
              </p>
              <p>2 Co 5:8, Hch 10:34, Ro 2:11, Gal 2:6, Jo 20:1-9</p>
            </section>
            <section>
              <span className="icon major fa-globe" />
              <h3>Misión</h3>
              <p>Colaborar con Dios en su causa por sanar al mundo.</p>
              <p>1 Co 3:9</p>
            </section>
          </div>
        </div>
      </section>

      <section id="valores" className="wrapper style2 spotlights">
        <section>
          <a href="/#" className="image" alt="image">
            <img src={pic1} alt="" data-position="center center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>No se admiten personas perfectas</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Conocé más
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>
                En lo esencial estemos de acuerdo, en lo no esencial tengamos
                libertad
              </h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Conocé más
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Somos naturalmente sobrenaturales</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Conocé más
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
      </section>

      <section
        id="madurez-espiritual"
        className="wrapper style1 fullscreen fade-up"
      >
        <div className="inner">
          <h2>¿Qué es madurez espiritual?</h2>
          <p>
            Consideramos que una persona es madura espiritualmente cuando
            <br />
            desde su humildad se hace responsable de su propia fe,
            <br />
            manteniendo una perspectiva crítica.
          </p>
        </div>
      </section>

      <section id="slogans" className="wrapper style2 spotlights">
        <section className="slogan-1">
          <div className="content">
            <div className="inner">
              <h2>Somos refugio, no trinchera.</h2>
            </div>
          </div>
        </section>
        <section className="slogan-2">
          <div className="content">
            <div className="inner">
              <h2>Se puede pertenecer antes que creer.</h2>
            </div>
          </div>
        </section>
        <section className="slogan-3">
          <div className="content">
            <div className="inner">
              <h2>Jesús debe de ser experimentado, no explicado.</h2>
            </div>
          </div>
        </section>
        <section className="slogan-4">
          <div className="content">
            <div className="inner">
              <h2>No tenemos posiciones, tenemos conversaciones.</h2>
            </div>
          </div>
        </section>
        <section className="slogan-5">
          <div className="content">
            <div className="inner">
              <h2>Somos iglesia para los desiglesiados.</h2>
            </div>
          </div>
        </section>
      </section>

      <section id="contacto" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Conversemos</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p>
          <div className="split style1">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label for="name">Nombre</label>
                    <input type="text" name="nombre" id="name" />
                  </div>
                  <div className="field half">
                    <label for="email">Correo electrónico</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <a href="/#" className="button submit">
                      Enviar Mensaje
                    </a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Dirección</h3>
                  <span>
                    Auditorio Universidad Veritas Zapote
                    <br />
                    San José
                    <br />
                    Costa Rica
                  </span>
                </li>
                <li>
                  <h3>Correo electrónico</h3>
                  <a mailto="info@interludio.org">info@interludio.org</a>
                </li>
                <li>
                  <h3>Redes sociales</h3>
                  <ul className="icons">
                    <li>
                      <a
                        href="https://twitter.com/com_interludio"
                        className="fa-twitter"
                      >
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.facebook.com/InterludioCostaRica"
                        className="fa-facebook"
                      >
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/inter_cr/"
                        className="fa-instagram"
                      >
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
