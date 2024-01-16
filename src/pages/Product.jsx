import { useParams } from "react-router-dom";
import produtos from "../ui/assets/produtos";
import BreadCrum from '../ui/components/BreadCrum';
import ProductDisplay from "../ui/components/ProductDisplay";

function Product() {
  const { productId } = useParams();
  const product = produtos.find((prod) => prod.id.toString() === productId);

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default Product;
