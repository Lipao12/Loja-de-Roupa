import React from 'react';
import '../styles/navigation-bar.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#camisetas">Camisetas</a></li>
        <li><a href="#calcas">Calças</a></li>
        <li><a href="#acessorios">Acessórios</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;