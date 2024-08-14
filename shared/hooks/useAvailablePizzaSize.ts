import React, {useEffect, useState} from "react";
import {PizzaSize, PizzaType} from "@/shared/constants/pizza";
import {useSet} from "react-use";
import {getAvailablePizzaSizes} from "@/shared/lib/getAvailablePizzaSizes";
import {ProductVariation} from "@prisma/client";

interface Props {
    size: PizzaSize,
    type: PizzaType,
    setSize: React.Dispatch<React.SetStateAction<PizzaSize>>
    setType: React.Dispatch<React.SetStateAction<PizzaType>>
    selectedIngredients: Set<number>
    onAddIngredient: (id: number) => void
    availablePizzaSizes: {name: "Large" | "Medium" | "Small", disabled: boolean, value: string}[]
}
export const useAvailablePizzaSize = (items: ProductVariation[]): Props => {
    const [size, setSize] = useState<PizzaSize>(20)
    const [type, setType] = useState<PizzaType>(1)
    const [selectedIngredients, {toggle: onAddIngredient}] = useSet(new Set<number>([]))
    const availablePizzaSizes = getAvailablePizzaSizes(items, type)

    useEffect(() => {
        const currentSize = availablePizzaSizes?.find(item => Number(item.value) === Number(size) && !item.disabled)
        const firstAvailableSize =  availablePizzaSizes?.find(item => !item.disabled)
        if (!currentSize && firstAvailableSize) {
            setSize(Number(firstAvailableSize.value) as PizzaSize)
        }
    }, [type]);
    return {
        size,
        type,
        setSize,
        setType,
        selectedIngredients,
        onAddIngredient,
        availablePizzaSizes
    }
}