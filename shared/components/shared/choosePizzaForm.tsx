import React, {useEffect, useState} from "react";
import {cn} from "@/shared/lib/utils";
import {Title} from "@/shared/components/shared/title";
import {Button} from "@/shared/components/ui/button";
import {Ingredient, ProductVariation} from "@prisma/client";
import {ProductImage} from "@/shared/components/shared/ProductImage";
import {GroupVariants} from "@/shared/components/shared/groupVariants";
import {mapPizzaType, PizzaSize, pizzaSizes, PizzaType, pizzaTypes} from "@/shared/constants/pizza";
import {IngredientItem} from "@/shared/components/shared/ingredient";
import {useSet} from "react-use";
import {calculatePizzaPrice} from "@/shared/lib/calculatePizzaPrice";
import {getAvailablePizzaSizes} from "@/shared/lib/getAvailablePizzaSizes";
import {useAvailablePizzaSize} from "@/shared/hooks/useAvailablePizzaSize";

interface Props {
    name: string;
    imageUrl: string;
    ingredients: Ingredient[]
    productVariations: ProductVariation[]
    className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({name, imageUrl, ingredients, productVariations, className}) => {
    const {
        size,
        type,
        setSize,
        setType,
        selectedIngredients,
        availablePizzaSizes,
        onAddIngredient,
    } = useAvailablePizzaSize(productVariations)

    const textDetails = `${size} cm, ${mapPizzaType[type]} dough`
    const totalPrice = calculatePizzaPrice(productVariations, size, type, ingredients, selectedIngredients)

    return (
        <div className={cn("flex flex-1", className)}>
            <ProductImage imageUrl={imageUrl} size={size}/>
            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1'/>
                <p className='text-gray-400'>{textDetails}</p>
                <div className='flex flex-1 flex-col'>
                    <GroupVariants items={availablePizzaSizes} selectedValue={size.toString()}
                                   onClick={value => setSize(Number(value) as PizzaSize)}/>
                    <GroupVariants items={pizzaTypes} selectedValue={type.toString()}
                                   onClick={value => setType(Number(value) as PizzaType)}/>
                </div>
                <div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar'>
                    <div className='grid grid-cols-3 gap-3 mt-5'>
                        {ingredients.map(item => (
                            <IngredientItem key={item.name} imageUrl={item.image} name={item.name} price={item.price}
                                            active={selectedIngredients.has(item.id)}
                                            onClick={() => onAddIngredient(item.id)}/>
                        ))}
                    </div>
                </div>
                <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                    Add to cart ({totalPrice} $)
                </Button>
            </div>
        </div>
    )
}