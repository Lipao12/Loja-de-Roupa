import React from 'react';
import '../styles/categories.css';

const NavigationBar = () => {
  return (
    <div className='container-categories'>
        <ul>
        <li><a href="#camisetas">Camisetas</a></li>
        <li><a href="#calcas">Calças</a></li>
        <li><a href="#acessorios">Acessórios</a></li>
      </ul>
    </div>
  );
};

export default NavigationBar;