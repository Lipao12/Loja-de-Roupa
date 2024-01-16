import { useParams } from "react-router-dom";
import colecoes from "../ui/assets/colecoes";
import produtos from "../ui/assets/produtos";
import Card from '../ui/components/Card';
import '../ui/styles/shop-category.css';

function ShopCollections() {
  const { colecaoId } = useParams();
  const productsFiltered = produtos.filter((p) => p.collectionId === Number(colecaoId));
  const colecao = colecoes.find((c) => c.id === Number(colecaoId));

  return (
    <div>
      <div className='container'>
        <h1>{colecao.name}</h1>
        <div className='product-grid'>
          {productsFiltered.map((product) => (
            <Card key={product.id} id={product.id} name={product.name} price={product.price} imgURL={product.imgURL} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCollections;
