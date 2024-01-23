import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import BreadCrum from '../ui/components/BreadCrum';
import ProductDisplay from "../ui/components/ProductDisplay";

function Product() {
  const { productId } = useParams();
  const { produtos } = useContext(ShopContext);
  const product = produtos.find((prod) => parseInt(prod.id) === parseInt(productId));
  console.log("Produto: ", product);

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
