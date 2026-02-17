import { React, createContext } from 'react';

// Создание контекста для состояния корзины
export const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {}
})