import React, { useContext } from 'react';
import { ShopContext } from "../context/ShopContext";
import Card from '../ui/components/Card';
import '../ui/styles/shop-category.css';

function ShopCategory(props) {
  const { produtos } = useContext(ShopContext);

  return (
    <div>
      <h1>{props.category}</h1>
      <div className='container'>
        <div className='product-grid'>
          {produtos.map((product) => (
            <Card key={product.id} id={product.id} name={product.name} price={product.price} image={product.images[0]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
