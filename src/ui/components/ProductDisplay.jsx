import { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import '../styles/product-display.css';

const ProductDisplay = (props) => {
    const { addCart } = useContext(ShopContext);
    const [selectedImg, setSelectedImg] = useState(props.product.images[0]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    const handleImageClick = (imgURL, index) => {
        setSelectedImg(imgURL);
        setSelectedImgIndex(index);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Produto: ${props.product.name}, Tamanho: ${selectedSize}`);
        // Chamando a função addCart com o ID do produto e o tamanho
        addCart(props.product.id, selectedSize);
    };

    return (
        <div className="product-display">
            <div className='product-display-left'>
                <div className='product-display-img-list'>
                    {props.product.images.map((imgURL, index) => (
                        <img
                            key={index}
                            src={imgURL}
                            onClick={() => handleImageClick(imgURL, index)}
                            className={selectedImgIndex === index ? 'selected-image' : ''}
                            alt={`Product Image ${index + 1}`}
                        />
                    ))}
            </div>
            <div className='product-display-img'>
                <img className='main-img' src={selectedImg} alt='Selected Product'/>
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
                <form onSubmit={handleSubmit}>
                    <div className='product-display-right-size'>
                        <h1>Escolha o tamanho</h1>
                        
                        <div className='product-display-right-sizes'>
                        <button
                                type='button'
                                className={selectedSize === 'P' ? 'selected-size' : ''}
                                onClick={() => handleSizeClick('P')}
                            >
                                P
                            </button>
                            <button
                                type='button'
                                className={selectedSize === 'M' ? 'selected-size' : ''}
                                onClick={() => handleSizeClick('M')}
                            >
                                M
                            </button>
                            <button
                                type='button'
                                className={selectedSize === 'G' ? 'selected-size' : ''}
                                onClick={() => handleSizeClick('G')}
                            >
                                G
                            </button>
                        </div>
                    </div>
                    <input type='submit' value='Add Carrinho' className='button-cart' />
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay;
