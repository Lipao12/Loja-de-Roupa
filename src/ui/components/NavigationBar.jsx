import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation-bar.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link className='links' to="/masculino">Masculino</Link></li>
        <li><Link className='links' to="/feminino">Feminino</Link></li>
        <li><Link className='links' to="/acessorios">Acessórios</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;