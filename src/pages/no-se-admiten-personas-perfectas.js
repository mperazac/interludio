import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';

import esencialImg from '../images/valores/imperfectos.jpg';
import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">
            No se admiten personas perfectas
          </h1>
          {/* <small>John Burke</small> */}
          <span className="image fit">
            <img src={esencialImg} alt="" />
          </span>
          <p>
            Esta es la comunidad de la gente imperfecta que ha aprendido a
            amarse. Hemos corrido el riesgo de amar a otros seres humanos igual
            de imperfectos que nosotros mismos. De lo contrario el amor no sería
            amor sino un simple artificio, una torpe falsificación de la máxima
            cristiana &quot;amense los unos a los otros como a sí mismos&quot;.
            Tampoco correremos el riesgo de sentirnos obligados a actuar como
            seres perfectos. En nuestra comunidad hay permiso de fallar, tenemos
            licencia para el error. Así se cumple la misión del mismo Cristo al
            venir a los &quot;enfermos&quot; y no a los &quot;sanos&quot; (Mt.
            9:12-13).
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
