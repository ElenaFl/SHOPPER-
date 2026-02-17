import React from 'react'
import { categories } from '../../../categories.js'

/**
  * Компонент выпадающий срисок.
 */
export const Select = ({ onSelectChange }) => {

    return (
        <div className="relative w-65.25 mb-4">
            <select
                className="w-62 h-13 px-3
                border border-[#D8D8D8] rounded-sm
                text-gray-800 bg-white text-sm
                appearance-none
                cursor-pointer"
                onChange={(e) => {
                    if (onSelectChange) {
                        onSelectChange(e.target.value);
                    }
                }}
                >
                {
                    categories?.length > 0 && categories?.map((item) => (
                        <option
                            className="text-gray-800 bg-white text-sm"
                            key={`${item.title}-${item.id}`}
                            value={item?.title || ''}>
                            {item?.title || 'Без названия'}
                        </option>
                    ))}
            </select>
            <div
                className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none ">
                <img
                    className="w-full h-full object-cover"
                    src="../../../../assets/images/inlineDown.svg" alt="arrowBottom"
                    aria-hidden="true"
                />
            </div>
        </div>
    );
};