import React from 'react';
import { Link } from 'gatsby';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Testimonial from '../components/Testimonial';

const MiHistoria = () => {
  const { loading, error, data } = useQuery(GET_TESTIMONIALS);

  if (loading) return 'loading...';
  if (error) return `error: ${error.message}`;

  return (
    <Layout>
      <Header />

      <div id="stories">
        <section id="main" className="wrapper">
          <div className="inner">
            <h2>Celebramos 12 años juntos</h2>
            <div>¿Qué es Interludio para vos?</div>
            <Link key="link" className="button" to="/contanos-tu-historia">
              Contanos
            </Link>
            <div className="testimonials">
              {data.testimonials.map(test => (
                <Testimonial
                  key={test.id}
                  content={test.comment}
                  name={test.name}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Layout>
  );
};

export default MiHistoria;

export const GET_TESTIMONIALS = gql`
  query {
    testimonials {
      name
      comment
    }
  }
`;
