'use client'

import React, {useEffect, useRef, useState} from "react";
import {Search} from "lucide-react";
import {cn} from "@/lib/utils";
import {useClickAway, useDebounce} from "react-use";
import Link from "next/link";
import {Api} from "@/services/api-client";
import {Product} from "@prisma/client";

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({className}) => {
    const [focused, setFocused] = useState(false)
    const [query, setQuery] = useState('')
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
    const ref = useRef(null)

    useClickAway(ref, () => {
        setFocused(false)
    })

    useDebounce(async () => {
        try {
            const response = await Api.products.search(query)
            setSearchedProducts(response.products)
        } catch (e) {
            console.error(e)
        }
    }, 200, [query])

    const onItemClick = () => {
        setFocused(false)
        setSearchedProducts([])
        setQuery('')
    }

    return (
        <>
            {focused && (
                <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'/>
            )}
            <div className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)} ref={ref}>
                <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400'/>
                <input
                    className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
                    type='text'
                    placeholder='Search for pizza...'
                    onFocus={() => setFocused(true)}
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />
                <div
                    className={cn(
                        'absolute w-full bg-white rounded-xl top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                        focused && 'visible opacity-100 top-12'
                    )
                    }>
                    {searchedProducts.length > 0 && searchedProducts.map(product => (
                        <Link className='flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10 cursor-pointer' key={product.id} href={`/product/${product.id}`} onClick={onItemClick}>
                            <img className='rounded-sm h-8' src={product.image} width={32} height={32}  alt={product.name}/>
                            <span>
                                {product.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}