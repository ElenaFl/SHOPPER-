import  React from 'react'

export const Counter = ({count, setCount}) => {


    // Обработчик кнопки «−» (не позволяет уйти в минус)
    const decrement = () => {
        setCount(prev => (prev > 0 ? prev - 1 : 0));
    }

    // Обработчик кнопки «+»
    const increment = () => {
        setCount(prev => prev + 1);
    }

    // Обработчик ввода вручную (с проверкой на минимум = 0)
    const handleChange = (e) => {
        const value = e.target.value
        // Проверяем, что введено число (или пустая строка)
        if (value === '' || /^-?\d+$/.test(value)) {
            const numValue = value === '' ? 0 : Number(value)
            // Устанавливаем минимум = 0
            setCount(numValue < 0 ? 0 : numValue);
        }
    }

    return (

    <div className="flex items-center border border-gray-300 rounded w-25.5">
        <button
            className="w-[33%] px-4 py-2 text-gray-700 flex justify-center items-center cursor-pointer"
            onClick={decrement}
            type="button"
        >
            −
        </button>
        <input
            type="number"
            min="0"
            value={count}
            onChange={handleChange}
            className="w-[33%] p-0 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white cursor-pointer"
            style={{    MozAppearance: 'textfield',
                textAlign: 'center'
            }}
        />
        <button
            className="w-[33%] px-4 py-2 text-gray-700 flex justify-center items-cente cursor-pointer"
            onClick={increment}
            type="button"
        >
            +
        </button>
    </div>
    )
}

// import React, { useState } from 'react'
 
// /**
//  * Компонент счетчик
//  * @param {number} value - Значение счетчика
//  * @param {function} onValueChange - Коллбек изменения значения счетчика
//  */
// export const Counter = ({ value, onValueChange }) => {
//     // Состояние значения счетчика
//     const [count, setCount] = useState(value || 1);
 
//     // Функция увеличения значения счетчика
//     const handleIncrement = () => {
//         setCount(count + 1);
//         onValueChange && onValueChange(count + 1);
//     }
 
//     // Функция уменьшения значения счетчика
//     const handleDecrement = () => {
//         setCount(count - 1);    
//         onValueChange && onValueChange(count - 1);
//     }
 
//     return (
//         <div className="flex items-center border border-gray-300 rounded">
//             <button
//                 className={`px-4 py-2 text-gray-700 ${count === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
//                 onClick={handleDecrement}
//                 disabled={count === 1}
//             >
//                 -
//             </button>
//                 <input
//                     value={count}
//                     onChange={onValueChange}
//                     min={1}
//                     max={10}
//                     type="number"
//                     readOnly
//                     className="p-0 w-7 outline-none bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
//                     style={{ MozAppearance: "textfield" }}
//                 />
//             <button
//                 className={`px-4 py-2 text-gray-700 ${count === 10 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
//                 onClick={handleIncrement}
//                 disabled={count === 10}
//             >
//                 +
//             </button>
//         </div>
//     )
// }
