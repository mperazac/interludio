import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';

import esencialImg from '../images/valores/esencial.jpg';
import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">
            En lo esencial estemos de acuerdo, en lo no esencial tengamos
            libertad.
          </h1>
          {/* <small>Nikolaus Ludwig von Zinzendorf und Pottendorf</small> */}
          <span className="image fit">
            <img src={esencialImg} alt="" />
          </span>
          <p>
            Con esta frase del Conde Zinzendorf resumimos nuestro &quot;ser
            inclusivos&quot; tal como Cristo mismo lo fue. Lo esencial nos une y nos
            une eternamente. Para cualquier tipo de relación el milagro de
            descubrir qué es lo esencial y qué no lo es supone gran parte de la
            garantía de estabilidad y sanidad. Descubrirnos unos a otros en una
            gran diversidad de expresiones espirituales, sabiéndonos unidos por
            un Solo Cristo, representa una de las fortalezas de nuestra
            comunidad.
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
