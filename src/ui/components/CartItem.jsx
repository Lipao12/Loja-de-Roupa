import { FiTrash } from "react-icons/fi";
import "../styles/cart-item.css";

const CartItem = (props) => {
    console.log(props.item.lenght);

    const handleRemoveClick = () => {
        props.removeCart(props.item.id, props.item.tamanho);
    };

    return (
        <div className="cart-item">
                <div className="cart-info">
                    <img src={props.item.imagem} alt={props.item.nome} />
                    <div className="item-info">
                        <p className="item-name">{props.item.nome}</p>
                        <p className="item-size">Tamanho: {props.item.tamanho}</p>
                        <p className="item-price">R$ {props.item.preco}</p>
                        <p className="item-price">Quantidade: {props.item.quantidade}</p>
                    </div>
                </div><div className="cart-trash" onClick={handleRemoveClick}>
                        <FiTrash />
                    </div>
        </div>
    );
}

export default CartItem;
