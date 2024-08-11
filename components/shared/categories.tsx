"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";
import {Category} from "@prisma/client";

interface Props {
    categories: Category[]
    className?: string
}

export const Categories: React.FC<Props> = ({ categories, className }) => {
    const activeIndex = useCategoryStore(state => state.activeId)
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                categories.map((el, index) => (
                    <a className={cn('flex items-center h-11 font-medium rounded-2xl px-5',
                        activeIndex === el.id && 'bg-white shadow-md shadow-grey-200 text-primary')}
                       href={`#${el.name}`}
                       key={index}>
                        <button>{el.name}</button>
                    </a>
                ))
            }
        </div>
    );
}

export default Categories;