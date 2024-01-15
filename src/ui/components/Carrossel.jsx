import React from 'react';
import '../styles/carrossel.css';
import Card from './Card';

const Carrossel = (props) => {
  return (
    <div className="carrossel">
    {props.produtos.map((product) => (
      <Card key={product.id} name={product.name} price={product.price} imgURL={product.imgURL} />
    ))}
  </div>
  );
};

export default Carrossel;
