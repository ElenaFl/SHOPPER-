import React from 'react'
import { useState } from 'react'

export const Search = () => {

    const [query, setQuery] = useState('')

    return (
        <div className="w-65.25 h-9 border-b border-[#D8D8D8] relative mb-9 ">
            <input
                type="search"
                name="search"
                value={query}
                onChange={
                    (e) => setQuery(e.target.value)
                }
                placeholder="Search..."
                className="text-sm text-[#707070] pt-1 pb-3 cursor-pointer"    />
            <button
                onClick={() => console.log('Поиск:', query)}
                className="absolute top-0 right-0"
                aria-label="Выполнить поиск"
            >
                <img src="/assets/images/search.svg" alt="search" />
            </button>
        </div>
    )
}