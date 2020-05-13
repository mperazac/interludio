import React from 'react';
import { Link } from 'gatsby';

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
          <div>¿Qué es Interludio para vos?</div>
          <Link className="button" to="/mi-historia">
            Contános
          </Link>
          <div className="testimonials">
            <Testimonial content="Me encanta" name="Ana Gomez" />
            <Testimonial
              content="Desde el primer momento me senti bienvenido y me encanta todo el lugar"
              name="Mario Gomez"
            />
            <Testimonial
              content="Desde el primer momento me senti bienvenido y mi familia se sintió acompañada, luego de haber sufrido mucho en otros lugares"
              name="Mario"
            />
            <Testimonial
              content="Desde el primer momento me senti bienvenido"
              name="Mario"
            />
            <Testimonial
              content="Desde el primer momento me senti bienvenido"
              name="Mario"
            />
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
