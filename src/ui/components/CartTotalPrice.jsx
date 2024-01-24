import PropTypes from "prop-types";
import React from "react";
import "../styles/cart-total-price.css";

const CartTotalPrice = ({ cartItems }) => {
  const cartItemsValue = cartItems.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  const shippingCost = 50.0;
  const totalPrice = cartItemsValue + shippingCost;

  return (
    <div className="cart-price-container">
      <h1>Total</h1>
      <p>Sub-total: R$ {cartItemsValue.toFixed(2)}</p>
      <p>Frete: R$ {shippingCost.toFixed(2)}</p>
      <p>Total: R$ {totalPrice.toFixed(2)}</p>
      <button>Finalizar</button>
    </div>
  );
};

CartTotalPrice.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default CartTotalPrice;
