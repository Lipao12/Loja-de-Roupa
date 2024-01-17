import { useParams } from "react-router-dom";
import colecoes from "../ui/assets/colecoes";
import produtos from "../ui/assets/produtos";
import Card from '../ui/components/Card';
import MosaicImage from "../ui/components/MosaicImage";
import '../ui/styles/shop-collection.css';

function ShopCollections() {
  const { colecaoId } = useParams();
  const productsFiltered = produtos.filter((p) => p.collectionId === Number(colecaoId));
  const colecao = colecoes.find((c) => c.id === Number(colecaoId));

  return (
    <div>
      <div className='container-collection'>
        <h1>{colecao.name}</h1>

        <MosaicImage />

        <h1>Produtos</h1>
        <hr />

        <div className='product-grid-collection'>
          {productsFiltered.map((product) => (
            <Card key={product.id} id={product.id} name={product.name} price={product.price} image={product.images[0]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCollections;
