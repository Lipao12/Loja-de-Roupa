// MainSection.js
import React from 'react';
import products from '../assets/produtos';
import '../styles/main-section.css';
import CustomCarrossel from './CustomCarrossel';

const MainSection = () => {
  return (
    <section>
      <div className="highlighted-products">
        <CustomCarrossel produtos={products} isCard={false}/>
      </div>

      <div className="featured-categories">
        <h2>Produtos em Destaque</h2>
        <CustomCarrossel produtos={products} isCard={true}/>
      </div>

      <div className="special-offers">
        <h2>Ofertas Especiais</h2>
        {/* Adicione suas ofertas especiais aqui */}
      </div>
    </section>
  );
};

export default MainSection;
