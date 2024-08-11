import React from 'react';
import {cn} from "@/lib/utils";
import Categories from "@/components/shared/categories";
import SortPopup from "@/components/shared/sortPopup";
import Container from "@/components/shared/container";
import {Category} from "@prisma/client";

interface Props {
    categories: Category[]
    className?: string
}
export const TopBar: React.FC<Props> = ({ categories, className }) => {
    return (
        <div className={cn('sticky top-0 py-5 bg-white shadow-lg shadow-black/5 z-10', className)}>
            <Container className='flex items-center justify-between'>
                <Categories categories={categories}/>
                <SortPopup/>
            </Container>
        </div>
);
}

export default TopBar;