import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

export class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'Visión y Misión', href: 'vision-mision' },
        { content: 'Valores', href: 'valores' },
        { content: 'Calendario', href: 'calendario' },
        { content: 'Madurez Espiritual', href: 'madurez-espiritual' },
        { content: 'Slogans', href: 'slogans' },
        { content: 'Donaciones', href: 'donaciones' },
        { content: 'Contacto', href: 'contacto' },
      ],
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="mobile-menu">
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          {tabs.map(tab => {
            const { href, content } = tab;
            const reference = tab.newPage ? '' : '#';
            return (
              <a
                href={`${reference}${href}`}
                className="menu-item"
                onClick={() => this.closeMenu()}
              >
                {content}
              </a>
            );
          })}
        </Menu>
      </section>
    );
  }
}

export default MobileMenu;
