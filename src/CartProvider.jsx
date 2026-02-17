import { useState, useEffect } from 'react'
import { CartContext } from './CartContext.js'

/**
 * Компонент Provider для передачи вложенным компонентам состояния корзины
 */

// Компонент-провайдер
export const CartProvider = ({ children }) => {

    // Объявляем и инициализируем переменную - состояние корзины
    const [cart, setCart] = useState(() => {
        // Считываем из localStorage при инициализации корзины значение с ключом cart
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    })

    // Эффект сохранения состояния корзины в localStorage при каждом её изменении
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    // Функция сохранения нового товара в корзине
    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    }

    // Функция удаления товара из корзины
    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
