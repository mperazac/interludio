import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';

import protocoloPdf from '../assets/docs/NotProtocolo.pdf';

const Protocolo = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">
            ¿Por qué no volveremos aún a reuniones presenciales?
          </h1>
          <div>
            <p>
              El Ministerio de Salud ha dado el permiso para que los lugares de
              culto puedan volver a reunirse con arreglo a un Protocolo de
              procedimientos sanitarios, a regir en las áreas que entran a la
              fase 3 de apertura del país.{' '}
            </p>{' '}
            <p>
              Interludio empezó hace 2 meses a trabajar en el Protocolo aplicado
              al Auditorio de la Universidad Veritas, donde nos reunimos.
              Primero se conformó un equipo interdisciplinario para que
              estudiara la documentación generada por el Ministerio de Salud en
              los temas atinentes al funcionamiento de lugares de culto, cines,
              teatros y similares.
            </p>
            <p>
              Ese equipo de trabajo elaboró un exhaustivo Protocolo aplicado
              para Interludio. Dicho Protocolo fue aprobado por las autoridades
              competentes y revisado por otros profesionales para mejorarlo.
            </p>
            <p>
              Como parte de nuestra costumbre de “no dejar a nadie atrás”
              quisimos consultar a la iglesia su opinión con respecto al regreso
              al auditorio. Hicimos una encuesta para obtener esa información y
              ponderamos nuestra decisión en comunidad.
            </p>
            <p>La encuesta nos arrojó que: </p>
            <ul>
              <li>
                El 57,4% piensa que aún no es buen momento para regresar a las
                reuniones presenciales.
              </li>
              <li>
                El 37% piensa que podría regresar ya, pero está dispuesto a
                considerarlo si fuera necesario.
              </li>
              <li>El 5,6% considera que ya es tiempo de regresar.</li>
            </ul>
            <p>
              De tal manera que la mayoría de las personas creen que podemos
              esperar un poco más. Sobre todo considerando que en esta primera
              fase del regreso no podrían ir niños ni personas adultas mayores o
              personas de riesgo. También tomamos en cuenta que solo podrían
              ingresar 75 personas como máximo (en esta primera etapa).
            </p>
            <p>
              Aunado a lo anterior, el país experimenta un aumento considerable
              en los casos positivos de COVID-19. El liderazgo de la iglesia ha
              tomado la decisión de esperar un poco más. Con el convencimiento
              de que la vida y la salud son primordiales y los recursos
              virtuales proveen una buena alternativa para el funcionamiento
              temporal de la iglesia.
            </p>
            <p>
              El amor por la vida, la protección a los más vulnerables y la
              sabiduría son valores que priman por encima de la ansiedad de
              volver a reunirnos presencialmente.
            </p>
            <p>
              Puede acceder al Protocolo elaborado por Interludio en este link:{' '}
              <a href={protocoloPdf} target="_blank">
                Protocolo
              </a>
            </p>
            <p>
              Puede seguir apoyando económicamente el trabajo de Interludio
              mediante el SINPE Movil <a href="phone:7167-0185">7167-0185</a>.
            </p>
            <p>
              Si desea más información puede escribir a{' '}
              <a href="mailto:info@interludio.org">info@interludio.org</a>
            </p>
          </div>
          <a href="/#home" className="button icon fa-arrow-left">
            Volver
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default Protocolo;
