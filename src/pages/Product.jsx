import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
//import produtos from "../ui/assets/produtos";
import BreadCrum from '../ui/components/BreadCrum';
import ProductDisplay from "../ui/components/ProductDisplay";

function Product() {
  const { productId } = useParams();
  const { produtos } = useContext(ShopContext);
  const product = produtos.find((prod) => prod.id.toString() === productId);
  console.log("Produto: "+ product)

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default Product;
