import React from 'react';
import {cn} from "@/lib/utils";

interface Props {
    className?: string
}

const cats = ['Pizza', 'Combo', 'Appetizers', 'Cocktails', 'Coffee', 'Drinks', 'Desserts'];
const activeIndex = 0;
export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                cats.map((el, index) => (
                    <a className={cn('flex items-center h-11 font-medium rounded-2xl px-5',
                        activeIndex === index && 'bg-white shadow-md shadow-grey-200 text-primary')} key={index}>
                        <button>{el}</button>
                    </a>
                ))
            }
        </div>
    );
}

export default Categories;