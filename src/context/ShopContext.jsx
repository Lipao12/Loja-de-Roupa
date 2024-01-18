import React, { createContext, useState } from 'react';
import produtos from '../ui/assets/produtos';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = [];
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addCart = (itemId, itemTamanho) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === itemId && item.tamanho === itemTamanho);


        if (existingItemIndex !== -1) {
            setCartItems(prev => {
                const newCart = [...prev];
                newCart[existingItemIndex].quantidade += 1;
                return newCart;
            });
        } else {
            setCartItems(prev => [...prev, { id: itemId, tamanho: itemTamanho, quantidade: 1 }]);
        }

    }

    const removeCart = (itemId, itemTamanho) => {
        setCartItems(prev => {
            const newCart = prev.filter(item => !(item.id === itemId && item.tamanho === itemTamanho));
            return newCart;
        });
    };
    
    const contexValue = {produtos, cartItems, addCart, removeCart};

    return (
        <ShopContext.Provider value={contexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;