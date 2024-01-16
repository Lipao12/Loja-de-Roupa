import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css';

const Card = (props) => {
  return (
    <div className="card">
    <Link to={`/product/${props.id}`}><img src={props.imgURL} alt={props.name} className="card-image" /></Link>
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
