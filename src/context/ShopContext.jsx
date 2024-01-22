import axios from 'axios';
import React, { createContext, useState } from 'react';
import prods from "../ui/assets/produtos";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = [];
    return cart;
}

const ShopContextProvider = (props) => {
    const [produtos, setProdutos] = useState(prods);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    /*useEffect(() => {
        // Função para buscar dados de posts da API
        const fetchProduct = async () => {
          try {
            const response = await axios.get('http://localhost:4000/allproducts');
            setProdutos(response.data);
          } catch (error) {
            console.error('Erro ao buscar dados de Product:', error);
          }
        };
            fetchProduct();
      }, []);*/

      const fetchProductById = async (productId) => {
        try {
          const response = await axios.get(`http://localhost:4000/product/${productId}`);
          console.log(response.data)
          return response.data;
        } catch (error) {
          console.error(`Erro ao buscar o produto com ID ${productId}:`, error);
          return null;
        }
      };


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
    
    const contextValue = { 
        produtos, 
        cartItems, 
        addCart, 
        removeCart, 
        fetchProductById };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;