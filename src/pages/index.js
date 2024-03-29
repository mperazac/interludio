import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import imperfectosImg from '../images/valores/imperfectos.jpg';
import loEsencialImg from '../images/valores/esencial-sm.jpg';
import naturalmenteImg from '../images/valores/naturalmente-sobrenaturales.jpg';
import ciudadRefugioLogo from './../images/ciudad_refugio-logo.png';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';
import MobileMenu from '../components/MobileMenu';
import Calendar from '../components/Calendar';

const IndexPage = () => (
  <Layout>
    <MobileMenu />
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
                <a href="#vision-mision" className="button primary">
                  Conocé más
                </a>
              </Scroll>
            </li>
            <li>
              <Link className="button primary" to="/mi-historia">
                13° Aniversario
              </Link>
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
            <img src={imperfectosImg} alt="" data-position="center center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>No se admiten personas perfectas</h2>
              <ul className="actions">
                <li>
                  <Link
                    className="button"
                    to="/no-se-admiten-personas-perfectas"
                  >
                    Conocé más
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={loEsencialImg} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>
                En lo esencial estemos de acuerdo, en lo no esencial tengamos
                libertad
              </h2>
              <ul className="actions">
                <li>
                  <Link className="button" to="/lo-esencial-libertad">
                    Conocé más
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={naturalmenteImg} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Somos naturalmente sobrenaturales</h2>
              <ul className="actions">
                <li>
                  <Link className="button" to="/naturalmente-sobrenaturales">
                    Conocé más
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="calendario" className="wrapper style2 spotlights">
        <section>
          <div class="gallery">
            <Calendar/>
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
              <div className="text">
                <h2>Se puede pertenecer antes de creer.</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="slogan-3">
          <div className="content">
            <div className="inner">
              <h2>Jesús debe de ser experimentado, no sólo explicado.</h2>
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
              <div className="text">
                <h2>Somos iglesia para los desiglesiados.</h2>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        id="donaciones"
        className="wrapper style4 fullscreen fade-up"
      >
        <div className="inner">
          <h2>Ofrendas, diezmos y donaciones</h2>
          <h3>Sinpe Móvil:</h3>
          <p>
            <a href="phone:7263-6580">7263-6580</a>
          </p>
          <h3>BCR - IBAN:</h3>
          <h4>
            DÓLARES:
            </h4>
          <p>
            CR53015201001031423961
            </p>
          <h4>
            COLONES:
            </h4>
          <p>
            CR 57015201001031423889
              </p>
          <h4>
            CEDULA JURIDICA:
            </h4>
          <p>
            3002621401
          </p>
        </div>
      </section>

      <section id="contacto" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Conversemos</h2>
          <p>Solicitános información o contános lo querás.</p>
          <div className="split style1">
            <section>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-recaptcha="true"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="nombre" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <button type="submit" className="button submit">
                    Enviar Mensaje
                  </button>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Dirección</h3>
                  <span>
                  Salitrillos de Montes de Oca
                    <br />
                    Google Maps: <a href="https://goo.gl/maps/UAQAtx5KZKmAvePF6">Refugio Interludio</a>
                    <br />
                    <a href="https://waze.com/ul/hd1u2869x4">Waze</a>
                    <br />
                    San José
                    <br />
                    Costa Rica
                  </span>
                </li>
                <li>
                  <h3>Reuniones</h3>
                  <span>Domingos 3:00 p.m.</span>
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
