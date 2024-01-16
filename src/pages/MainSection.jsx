import React from 'react';
import colections from '../ui/assets/colecoes';
import products from '../ui/assets/produtos';
import CustomCarrossel from '../ui/components/CustomCarrossel';
import ReceiveEmail from '../ui/components/ReceiveEmail';
import '../ui/styles/main-section.css';

const MainSection = () => {
  return (
    <div>

    <section>
      <div className="highlighted-products">
        <CustomCarrossel produtos={colections} isCard={false}/>
      </div>

      <div className="featured-categories">
        <h2>Produtos em Destaque</h2>
        <hr />
        <CustomCarrossel produtos={products} isCard={true}/>
      </div>

      <div className="special-offers">
        <h2>Ofertas Especiais</h2>
        <hr />
      </div>
    </section>
      <ReceiveEmail />
    </div>
  );
};

export default MainSection;
