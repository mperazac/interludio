import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="stories">
      <section id="main" className="wrapper">
        <div className="inner">
          <h2>Celebramos 12 años juntos</h2>
          <p>Contános, ¿que es Interludio para vos?</p>
          <div className="style1">
            <Testimonial />
          </div>
          <div className="tale">
            <p>
              Inter ha sido un lugar donde me he sentido bienvenido, no me he
              sentido rechazado y me han mostrado que mi opinion importa.
            </p>
            <p>Juan Doe</p>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
