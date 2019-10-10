import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import logo from '../images/logo_interludio-blanco.png';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'Visión y Misión', href: 'vision-mision' },
        { content: 'Valores', href: 'valores' },
        { content: 'Madurez Espiritual', href: 'madurez-espiritual' },
        { content: 'Slogans', href: 'slogans' },
        { content: 'Ciudad Refugio', href: 'ciudad-refugio' },
        { content: 'Contacto', href: 'contacto' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="sidebar">
        <div className="inner">
          <img src={logo} alt="interludio-logo" className="logo" />
          <nav>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
            >
              {tabs.map((tab) => {
                const { href, content } = tab;
                return (
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
