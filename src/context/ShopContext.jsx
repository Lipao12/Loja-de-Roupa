import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [produtos, setProdutos] = useState([]);
    const [colecoes, setColecoes] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsResponse, collectionsResponse] = await Promise.all([
                    axios.get('http://localhost:4000/allproducts'),
                    axios.get('http://localhost:4000/allcollections')
                ]);

                setProdutos(productsResponse.data);
                setColecoes(collectionsResponse.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchProductById = async (productId) => {
        try {
            const response = await axios.get(`http://localhost:4000/product/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao buscar o produto com ID ${productId}:`, error);
            return null;
        }
    };

    const fetchCollectionById = async (collectionId) => {
        try {
            const response = await axios.get(`http://localhost:4000/collection/${collectionId}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao buscar o coleção com ID ${collectionId}:`, error);
            return null;
        }
    };

    const fetchProductsByCollection = async (collectionId) => {
        try {
            const response = await axios.get(`http://localhost:4000/productcol/${collectionId}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao buscar o produto da coleção de ID ${collectionId}:`, error);
            return null;
        }
    };

    const fetchProductsByCategory = async (category) => {
        try {
            const response = await axios.get(`http://localhost:4000/category/${category}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao acessar a categoria ${category}:`, error);
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
    };

    const removeCart = (itemId, itemTamanho) => {
        setCartItems(prev => prev.filter(item => !(item.id === itemId && item.tamanho === itemTamanho)));
    };

    const contextValue = { 
        produtos,
        colecoes, 
        cartItems, 
        addCart, 
        removeCart, 
        fetchProductById,
        fetchCollectionById,
        fetchProductsByCollection,
        fetchProductsByCategory
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
