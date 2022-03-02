import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import logo from '../images/logo_interludio-blanco.png';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: '', href: '', hidden: true }, //The empty value is to leave a space in Scrollspy for the logo
        { content: 'Visión y Misión', href: 'vision-mision' },
        { content: 'Valores', href: 'valores' },
        { content: 'Calendario', href: 'calendar' },
        { content: 'Madurez Espiritual', href: 'madurez-espiritual' },
        { content: 'Slogans', href: 'slogans' },
        { content: 'Donaciones', href: 'donaciones' },
        { content: 'Contacto', href: 'contacto' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="sidebar">
        <div className="mobile-logo">
          <img src={logo} alt="interludio-logo" />
        </div>
        <div className="inner">
          <nav>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
            >
              <Scroll type="id" element="intro">
                <div style={{ display: 'contents' }}>
                  <img src={logo} alt="interludio-logo" className="logo" />
                </div>
              </Scroll>
              {tabs.filter(s => !s.hidden).map(tab => {
                const { href, content } = tab;

                return tab.newPage ? (
                  <li key={href}>
                    <a href={`${href}`}>{content}</a>
                  </li>
                ) : (
                    <li key={href}>
                      <Scroll type="id" element={href}>
                        <a href={`#${href}`}>{content}</a>
                      </Scroll>
                    </li>
                  );
              })}
            </Scrollspy>
          </nav>
        </div>
      </section>
    );
  }
}

export default Sidebar;
