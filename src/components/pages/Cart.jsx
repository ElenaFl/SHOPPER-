import { React, useState, useContext, useEffect } from 'react'
import { CartContext } from '../../CartContext.js'
import { Link, useLocation } from 'react-router'
import { Counter } from '../ui/Counter/Counter.jsx'
import { Select } from '../ui/Select/Select.jsx'

/**
 * Компонент Корзина с товарами.
 *
 */
export const Cart = () => {

    // Получаем данные о товаре и его количестве сл страницы Product
    const {state} = useLocation()

    // Определяем переменную-состояние счетчика с начальным значением со страницы Product или 1
    const [count, setCount] = useState(state.quantity || 1)

    // Получаем данные из контекста
    const { cart, addToCart, removeFromCart } = useContext(CartContext)

    useEffect(() => {
        if (state?.product && !cart.find(item => item.id === state.product.id)) {
            const productCart = { ...state.product, quantity: count }
            addToCart(productCart);
        }
    }, [state?.product, count, addToCart]) // Зависимости: продукт и текущая корзина

    return (
        <>
            <div className='mt-31 pt-24 border-t border-[#D8D8D8] mb-50'>
                {/* заголовок */}
                <h2 className='text-3xl text-center mb-16'>Shopping Cart</h2>
                {/* общий блок */}
                    <div className='flex justify-between'>
                        {/* левый блок */}
                        <div className='w-145 mb-10'>
                            {/* карточка */}
                            {cart.map((product) => (
                                <div key={product.id} className='w-full flex justify-between pb-10 mb-10 border-b border-[#D8D8D8]'>
                                <div className='w-34 h-34'>
                                    <img
                                        className='w-full h-full object-cover'
                                        src={product?.img}
                                        alt={product?.title}
                                    />
                                </div>
                                <div className='flex items-start gap-x-10'>
                                <div className='w-41.5'>
                                <p className='text-xl mb-10'>{product.title}</p>
                                <p className='text-[#A18A68]'>
                                    {product?.currency}   {product?.price.toFixed(2)}
                                </p>
                                </div>
                                <div className='w-41 flex items-start justify-between'>
                                <Counter count={count} setCount={setCount} />
                                {/* удаление карточки товара по id */}
                                <button
                                    className='w-3 h-3 coursor-pointer'
                                    onClick={()=> removeFromCart(product.id)}>
                                <img
                                    className='w-full h-full'
                                    src='../../../assets/images/cross.jpg'
                                />
                                </button>
                                </div>
                            </div>
                        </div>
                            ))}
                            {/* левая нижняя грид-сетка */}
                            <div
                                className='grid grid-cols-2'
                                style={{ gridTemplateRows: '1fr auto' }}
                            >
                                <div></div>
                                <div className='w-61 pl-19 pb-16'>
                                    <Link
                                        to='/shop'
                                        className='w-full font-bold border rounded-sm py-4 px-6'>
                                            UPDATE CART
                                    </Link>
                                </div>
                                <div className='w-84 border-b border-[#D8D8D8]'></div>
                                <div className='w-61 pl-19'>
                                    <button className='w-full py-4 font-bold border-0 bg-black text-white rounded-sm'>APPLY COUPON</button>
                                </div>

                            </div>
                        </div>
                        {/* правый блок */}
                        <div className='w-145 pt-10 px-15 pb-12'>
                            <h3 className='text-2xl mb-11'>Cart totals</h3>
                            {/* грид-сетка */}
                            <div className='grid grid-cols-2 grid-rows-2 mb-10 border-b border-[#D8D8D8]'>
                                <div className='text-4'>SUBTOTAL</div>
                                <div className='pb-6 text-[#707070]'>
                                    <span>$ </span>
                                    <span>n</span>
                                </div>
                                <div className='text-4'>SHIPPING</div>
                                <p className='text-4 text-[#707070]'>Shipping costs will be calculated once you have provided address.</p>
                                <div></div>
                                <div className='pt-10 text-4'>
                                    <Select />
                                </div>
                                <div></div>
                                <div className='text-4'>
                                    <Select />
                                </div>
                                <div></div>
                                <div className='text-4'>
                                    <Select />
                                </div>
                                <div></div>
                                <div className='text-4'>
                                    <Select />
                                </div>
                                <div></div>
                                <div className='font-bold mb-10'>
                                    <button className='w-full border rounded-sm py-4 px-12'>UPDATE TOTALS</button>
                                </div>
                            </div>
                            {/* общая цена */}
                            <div className='flex justify-between items-center font-bold mb-11'>
                                <p>TOTAl</p>
                                <div>
                                    <span>$</span>
                                    <span>n</span>
                                </div>
                            </div>
                            {/* кнопка */}
                            <button className='w-full border-0 bg-black text-white font-bold py-4 rounded-sm'>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
            </div>
        </>
    )
}