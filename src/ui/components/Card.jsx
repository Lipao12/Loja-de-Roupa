import React from 'react';
import image from '../assets/camisa1.jpg';
import '../styles/card.css';

const Card = (props) => {
  return (
    <div className="card">
    <img src={image} alt={props.name} className="card-image" />
      <div>
        <p className="product-name">{props.name}</p>
        <div className='price'>
            <p className="product-price">R${props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
