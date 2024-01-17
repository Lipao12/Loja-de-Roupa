import React, { createContext, useState } from 'react';
import produtos from '../ui/assets/produtos';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < produtos.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removeCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const contexValue = {produtos, cartItems, addCart, removeCart};

    return (
        <ShopContext.Provider value={contexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;