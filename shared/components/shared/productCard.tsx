import React from "react";
import Link from "next/link";
import {Title} from "@/shared/components/shared/title";
import {Button} from "@/shared/components/ui/button";
import {Plus} from "lucide-react";
import {Ingredient} from "@prisma/client";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    ingredients: Ingredient[]
    className?: string
}

export const ProductCard: React.FC<Props> = ({id, name, ingredients, price, imageUrl, className}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                    <img className='w-[215px] h-[215px]' src={imageUrl} alt={name}/>
                </div>
            </Link>
            <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
            <p className='text-sm text-gray-400'>{ingredients.map((ingredient, index) => {
                if (index !== ingredients.length - 1) {
                    return ingredient.name + ', '
                } else {
                    return ingredient.name
                }
            })}</p>
            <div className='flex justify-between items-center mt-4'>
                <span className='text-[20px]'>
                    from <b>{price}</b> $
                </span>
                <Button className='text-base font-bold' variant='secondary'>
                    <Plus size={20} className='mr-1'/>
                    Add
                </Button>
            </div>
        </div>
    )
}