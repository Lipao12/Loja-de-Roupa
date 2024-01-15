import React from 'react';
import '../styles/main-section.css';

const MainSection = () => {
  return (
    <section>
      <div className="highlighted-products">
        <h2>Produtos em Destaque</h2>
      </div>

      <div className="featured-categories">
        <h2>Categorias em Destaque</h2>
      </div>

      <div className="special-offers">
        <h2>Ofertas Especiais</h2>
      </div>
    </section>
  );
};

export default MainSection;
