// MainSection.js
import React from 'react';
import products from '../assets/produtos';
import '../styles/main-section.css';
import Banner from './Banner';
import Carrossel from './Carrossel';

const MainSection = () => {
  return (
    <section>
      <div className="highlighted-products">
      {Array.from({ length: 5 }).map((_, index) => (
          <Banner key={index} imgURL={products[index].imgURL} />
        ))}
      </div>

      <div className="featured-categories">
      <h2>Produtos em Destaque</h2>
        <Carrossel produtos={products}/>
      </div>

      <div className="special-offers">
        <h2>Ofertas Especiais</h2>
        {/* Adicione suas ofertas especiais aqui */}
      </div>
    </section>
  );
};

export default MainSection;
