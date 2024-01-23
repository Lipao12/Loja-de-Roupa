import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../context/ShopContext";
import Card from '../ui/components/Card';
import '../ui/styles/shop-category.css';

function ShopCategory(props) {
  const category = props.category;
  const { fetchProductsByCategory } = useContext(ShopContext);
  const [productsFiltered, setProductsFiltered] = useState(null);
  
  const fetchData = async () => {
    try {
      console.log(category)
      const products = await fetchProductsByCategory(category);
      console.log("Produtos:", products);
      setProductsFiltered(products);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, fetchProductsByCategory]);

  return (
    <div>
      <h1>{category}</h1>
      <div className='container'>
        <div className='product-grid'>
          {productsFiltered ? (
            productsFiltered.map((product) => (
              <Card key={product.id} id={product.id} name={product.name} price={product.price} image={product.images[0]} />
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
