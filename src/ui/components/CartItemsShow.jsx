import "../styles/cart-items-show.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartItems = Object.values(props.cartItems);

    return (
        <div className="cart-show-container">
            {cartItems.map((item, index) => {
                return (
                    <div key={index}>
                        <CartItem item={item} removeCart={props.removeCart}/>
                        {index !== cartItems.length - 1 && <hr />} 
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;
