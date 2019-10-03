import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo_interludio-blanco.png';
import '../assets/sass/main.scss';
const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      <img src={logo} alt="interludio-logo" className="logo" />
    </Link>
    {/* <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
      </ul>
    </nav> */}
  </header>
);

export default Header;
