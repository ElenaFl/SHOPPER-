import React from 'react'
import { Link } from 'react-router'

/**
* Компонент карточка.
*
* @param {object} props.details - Детали карточки.
* @param {string} props.details.title - Наименование товара.
* @param {string} props.details.currency - Валюта.
* @param {number} props.details.price - Цена.
* @param {number} props.details.img - Путь к изображению.
* @param {number} props.size - Размеры карточки и зображения.
* @param {number} props.size.width - Ширина карточки.
* @param {number} props.size.height - Высота карточки.
* @param {number} props.size.widthImg - Ширина изображения.
* @param {number} props.size.heightImg - Высота изображения.
* @param {} props.onOpenDetails - Функция-колбэк для обработки клика по карточке.
*/
    export const Card = (props) => {

        const {id, title, currency, price, img } = props.details
        const {width, height, heightImg} = props.size

    // класс стилей для создания ховер-эффекта в зависимости от размеров изображения
    const imageClasses = `
        rounded-lg
        mb-6
        ${width === 380 || width === 300 ? 'overflow-hidden hover:opacity-60 relative' : ''}
    `.trim();

    return (
    <>
        <div
            // размеры карточки
            style={{ width: `${width}px`, height: `${height}px` }}
            className="cursor-pointer"
        >
            {/* блок изображения */}
            <div
                // размеры изображения
                style={{ height: `${heightImg}px` }}
                className={imageClasses}
            >
                {/* изображение */}
                {img && <img src={img} alt={title} className="w-full h-full object-cover" />}
                {/* блок иконок при ховер-эффекте */}
                <div className="opacity-0 hover:opacity-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-x-7.5 items-center">
                    {/* иконка корзина */}
                    <Link
                        to="/cart"
                        className="btn">
                            <img src="/assets/images/shopping-cart.svg" alt="shopping-cart" />
                    </Link>
                    {/* иконка глазик */}
                    <Link
                        to={`/product/${id}`}
                        className="btn">
                        <img src="/assets/images/eye.svg" alt="eye" />
                    </Link>
                    {/* иконка сердце */}
                    <Link to="" className="btn">
                        <img src="/assets/images/heart.svg" alt="heart" />
                    </Link>
                </div>
                </div>
            </div>
            {/* наименование товара */}
            <p className="text-xl mb-4">{title}</p>
            {/* цена */}
            <span
                className="text-xl font-medium"
                style={{color: '#A18A68'}}
            >
                {currency} {price.toFixed(2)}
            </span>
        </div>
    </>
    )
}
