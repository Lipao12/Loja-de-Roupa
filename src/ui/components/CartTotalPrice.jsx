// CartTotalPrice.js
import PropTypes from "prop-types";
import React from "react";
import "../styles/cart-total-price.css";

const CartTotalPrice = ({ cartItems }) => {
    const cartItemsValue = cartItems.reduce((total, item) => total + item.preco*item.quantidade, 0);

    return (
        <div className="cart-price-container">
            <h1>Total</h1>
            <p>Sub-total: R$ {cartItemsValue.toFixed(2)}</p>
            <p>Frete: R$ 50.00</p>
            <p>Total: R$ {(cartItemsValue + 50).toFixed(2)}</p>
            <button>Finalizar</button>
        </div>
    );
}

CartTotalPrice.propTypes = {
    cartItems: PropTypes.array.isRequired,
};

export default CartTotalPrice;
