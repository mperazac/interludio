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
              {/* <p>
                Somos la Iglesia de la gente imperfecta que ha aprendido a
                amarse. Hemos corrido el riesgo de amar a otros seres humanos
                igual de imperfectos que nosotros mismos. De lo contrario el
                amor no sería amor sino un simple artificio, una torpe
                falsificación de la máxima cristiana "amense los unos a los
                otros como a sí mismos". Tampoco correremos el riesgo de
                sentirnos obligados a actuar como seres perfectos. En nuestra
                comunidad hay permiso de fallar, tenemos licencia para el error.
                Así se cumple la misión del mismo Cristo al venir a los
                "enfermos" y no a los "sanos" (Mt. 9:12-13).
              </p> */}
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Conocé más
                  </Link>
                </li>
              </ul>
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
              {/* <p>
                Con esta frase del Conde Zinzendorf resumimos nuestro "ser
                inclusivos" tal como Cristo mismo lo fue. Lo esencial nos une y
                nos une eternamente. Para cualquier tipo de relación el milagro
                de descubrir qué es lo esencial y qué no lo es supone gran parte
                de la garantía de estabilidad y sanidad. Descubrirnos unos a
                otros en una gran diversidad de expresiones espirituales,
                sabiéndonos unidos por un Solo Cristo, representa una de las
                fortalezas de nuestra comunidad.
              </p> */}
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Conocé más
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img
              src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
              data-position="25% 25%"
            />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Somos naturalmente sobrenaturales</h2>
              {/* <p>
                Ni somos completamente naturales ni completamente espirituales.
                Tenemos la hermosa particularidad de haber nacido a una vida
                espiritual en medio de nuestra vida natural. Esto hace que nos
                veamos como simples seres humanos, pero llenos de vida eterna y
                del poder del Espíritu Santo. Naturalmente fallamos, nos ponemos
                tristes, nos deprimimos, nosenfermamos, pero Sobrenaturalmente
                podemos vivir la caricia sanadora de nuestro Dios y creer en la
                caritativa intervención de Cristo en todas las esferas de
                nuestra vida. Esto nos protege de convertirnos en seres
                arrogantes que se creen superiores. Si alguno de nosotros falla
                o entra en una depresión, entenderemos que aun sigue siendo un
                ser humano Natural y lo animaremos con la esperanza de lo
                Sobrenatural que nos ha sido dado (Hch. 1:8).
              </p> */}
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Conocé más
                  </Link>
                </li>
              </ul>
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
