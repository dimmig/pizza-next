"use client"

import React, {useEffect, useRef} from "react";
import {Title} from "@/shared/components/shared/title";
import {cn} from "@/shared/lib/utils";
import {ProductCard} from "@/shared/components/shared/productCard";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/shared/store/category";

interface Props {
    title: string;
    items: any[];
    listClassName?: string;
    categoryId: number
    className?: string
}

export const ProductsList: React.FC<Props> = ({title, items, listClassName, categoryId, className}) => {
    const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
    const intersectionRef = useRef(null)
    const intersection = useIntersection(intersectionRef, {})

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5'/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.productVariationsId[0].price}
                        imageUrl={product.image}
                        ingredients={product.ingridients}
                    />
                ))}
            </div>
        </div>
    )
}