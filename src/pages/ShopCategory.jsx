import products from '../ui/assets/produtos';
import Card from '../ui/components/Card';
import '../ui/styles/shop-category.css';

function ShopCategory(props) {
  return (
    <div>
      <h1>{props.category}</h1>
      <div className='container'>
        <div className='product-grid'>
          {products.map((product) => (
            <Card key={product.id} id={product.id} name={product.name} price={product.price} imgURL={product.imgURL} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
