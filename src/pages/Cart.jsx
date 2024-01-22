import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { ShopContext } from "../context/ShopContext";
import CartItemsShow from "../ui/components/CartItemsShow";
import CartTotalPrice from "../ui/components/CartTotalPrice";
import "../ui/styles/cart-page.css";

const Cart = () => {
    const { produtos, cartItems, removeCart } = useContext(ShopContext);

    const cartProducts = cartItems.map((cartItem) => {
        const product = produtos.find((product) => product.id === cartItem.id);
        console.log("Produto: "+ typeof product.price)
        if (product) {
            return {
                id: product.id,
                nome: product.name,
                preco: parseFloat(product.price),
                imagem: product.images[0],
                tamanho: cartItem.tamanho,
                quantidade: cartItem.quantidade,
            };
        }
        return null;
    }).filter(Boolean);

    return (
        <div className={`cart-container ${cartProducts.length === 0 ? 'empty-cart' : 'not-empty-cart'}`}>
            {cartProducts.length === 0 ? (
                <div>
                    <CiShoppingCart className="icon-empty-cart"/>
                    <p className="empty-txt1">O carrinho está vazio.</p>
                    <p className="empty-txt2">Continue explorando :)</p>
                </div>
            ) : (
                <>
                    <CartItemsShow cartItems={cartProducts} removeCart={removeCart} />
                    {console.log(cartProducts[0])}
                    <CartTotalPrice cartItems={cartProducts} />
                </>
            )}
        </div>
    );
};

export default Cart;
