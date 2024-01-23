import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Card from '../ui/components/Card';
import MosaicImage from "../ui/components/MosaicImage";
import '../ui/styles/shop-collection.css';

function ShopCollections() {
  const { colecaoId } = useParams();
  const { fetchCollectionById, fetchProductsByCollection } = useContext(ShopContext);
  const [colecao, setColecao] = useState(null);
  const [productsFiltered, setProdutos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [collecion, prods] = await Promise.all([
          fetchCollectionById(colecaoId),
          fetchProductsByCollection(colecaoId)
        ]);

        console.log("Colecao:", collecion);
        console.log("Produtos:", prods);

        setColecao(collecion[0]);
        setProdutos(prods);
      } catch (error) {
        console.error('Erro ao buscar produto: ', error);
      }
    };

    fetchData();
  }, [colecaoId, fetchCollectionById, fetchProductsByCollection]);

  return (
    colecao ? (
      <div>
        <div className='container-collection'>
          <h1>{colecao.name}</h1>
          <MosaicImage />
          <h1>Produtos</h1>
          <hr />
          <div className='product-grid-collection'>
            {productsFiltered ? (
              productsFiltered.map((product) => (
                <Card key={product.id} id={product.id} name={product.name} price={product.price} image={product.images[0]} />
              ))
            ) : (
              <div>Carregando...</div>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div>ERROR 404</div>
    )
  );
}

export default ShopCollections;
