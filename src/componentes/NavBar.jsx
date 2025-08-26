import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/img/logo-emmamesadas.ico'; // Ajustá la ruta si está en otro lugar

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo Emma Mesadas" className="logo" />
      </div>
      <div>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
