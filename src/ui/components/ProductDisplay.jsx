import '../styles/product-display.css';

const ProductDisplay = (props) => {
    return (
        <div className="product-display">
            <div className='product-display-left'>
                <div className='product-display-img-list'>
                    <img src={props.product.imgURL}/>
                    <img src={props.product.imgURL}/>
                    <img src={props.product.imgURL}/>
                    <img src={props.product.imgURL}/>
                </div>
                <div className='product-display-img'>
                    <img className='main-img' src={props.product.imgURL}/>
                </div>
            </div>
            <div className='product-display-right'>
                <h1>{props.product.name}</h1>
                <div className='product-display-righ-avaliation'>
                    <p>(122)</p>
                </div>
                <div className='product-display-price'>
                    <div className='product-display-right-price'>
                        R$ {props.product.price}
                    </div>
                </div>
                <div className='product-display-right-description'>
                    Descricao do produto esta sendo feita aqui
                </div>
                <div className='product-display-right-size'>
                    <h1>Escolha o tamanho</h1>
                    <div className='product-display-right-sizes'>
                        <p>P</p>
                        <p>M</p>
                        <p>G</p>
                    </div>
                </div>
                <button>Carrinho</button>
            </div>
        </div>
    )
}

export default ProductDisplay;