import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';

import natSobnatImg from '../images/valores/sobrenaturales.jpg';
import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">
            Somos naturalmente sobrenaturales
          </h1>
          {/* <small>John Wimber</small> */}
          <div className="valores-img">
            <img src={natSobnatImg} alt="" />
          </div>
          <p>Ni somos completamente naturales ni completamente espirituales.
          Tenemos la hermosa particularidad de haber nacido a una vida espiritual
          en medio de nuestra vida natural. Esto hace que nos veamos como simples
          seres humanos, pero llenos de vida eterna y del poder del Espíritu Santo.
          Naturalmente fallamos, nos ponemos tristes, nos deprimimos, nos enfermamos,
          pero Sobrenaturalmente podemos vivir la caricia sanadora de nuestro Dios y
          creer en la caritativa intervención de Cristo en todas las esferas de nuestra vida.
          Esto nos protege de convertirnos en seres arrogantes que se creen superiores.
          Si alguno de nosotros falla o entra en una depresión, entenderemos que aun sigue
          siendo un ser humano Natural y lo animaremos con la esperanza de lo Sobrenatural
          que nos ha sido dado (Hch. 1:8).
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
