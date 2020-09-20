import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo_interludio-blanco.png';
import '../assets/sass/main.scss';
const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      <img src={logo} alt="interludio-logo" className="logo" />
    </Link>
    <nav>
      <ul>
        {/* <li>
          <Link to="/#vision-mision">Visión y Misión</Link>
        </li>
        <li>
          <Link to="/#valores">Valores</Link>
        </li>
        <li>
          <Link to="/#madurez-espiritual">Madurez Espiritual</Link>
        </li>
        <li>
          <Link to="/#slogans">Slogans</Link>
        </li>
        <li>
          <Link to="/#contacto">Contacto</Link>
        </li> */}
        <li>
          <Link to="/#valores" className="icon fa-arrow-left">Volver</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
