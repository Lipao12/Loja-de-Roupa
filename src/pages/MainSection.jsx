import React, { useContext } from 'react';
import { ShopContext } from "../context/ShopContext";
//import colections from '../ui/assets/colecoes';
import CustomCarrossel from '../ui/components/CustomCarrossel';
import ReceiveEmail from '../ui/components/ReceiveEmail';
import '../ui/styles/main-section.css';


const MainSection = () => {
  const { produtos, colecoes } = useContext(ShopContext);

  console.log(colecoes)

  return (
    <div>
    <section>
      <div className="highlighted-products">
        <CustomCarrossel produtos={colecoes} isCard={false}/>
      </div>

      <div className="featured-categories">
        <h2>Produtos em Destaque</h2>
        <hr />
        <CustomCarrossel produtos={produtos} isCard={true}/>
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
