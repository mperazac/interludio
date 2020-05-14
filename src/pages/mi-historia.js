import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';

const MiHistoria = ({ data }) => (
  <Layout>
    <Header />

    <div id="stories">
      <section id="main" className="wrapper">
        <div className="inner">
          <h2>Celebramos 12 años juntos</h2>
          <div>¿Qué es Interludio para vos?</div>
          <Link className="button" to="/contanos-tu-historia">
            Contanos
          </Link>
          <div className="testimonials">
            {data.hasura.testimonials.map(test => (
              <Testimonial content={test.comment} name={test.name} />
            ))}
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default MiHistoria;

export const query = graphql`
  query Testimonials {
    hasura {
      testimonials {
        name
        comment
      }
    }
  }
`;
