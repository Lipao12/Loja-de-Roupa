import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import BreadCrum from '../ui/components/BreadCrum';
import ProductDisplay from "../ui/components/ProductDisplay";

function Product() {
  const { productId } = useParams();
  //const { produtos, fetchProductById } = useContext(ShopContext);
  //const product = produtos.find((prod) => parseInt(prod.id) === parseInt(productId));
  const { fetchProductById } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  

  const fetchData = async () => {
    try {
        const product = await fetchProductById(productId);
        console.log("Produto:", product);
        setProduct(product[0]);
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
    }
};

useEffect(() => {
    fetchData();
}, [productId, fetchProductById]);

  return (
    product ? (
      <div>
        <BreadCrum product={product} />
        <ProductDisplay product={product} />
      </div>
    ) : (
      <div>Produto não encontrado.</div>
    )
  );
}

export default Product;
