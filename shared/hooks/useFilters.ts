import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";
import {useSet} from "react-use";

export interface PriceProps {
    priceFrom?: number
    priceTo?: number
}

interface QueryFilters extends PriceProps {
    selectedPizzaTypes: string[];
    selectedIngredients: string[];
    selectedSizes: string[]
}

export interface Filters {
    setSizes: (key: string) => void;
    selectedSizes: Set<string>;
    selectedIngredients: Set<string>;
    priceFrom: number | undefined;
    priceTo: number | undefined
    setIngredients: (key: string) => void;
    setPizzaTypes: (key: string) => void;
    selectedPizzaTypes: Set<string>;
    setPrices: (name: keyof PriceProps, value: number) => void
}

export const useFilters = () => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>
    const [price, setPrices] = useState<PriceProps>({
        priceFrom: Number(searchParams.get("priceFrom")) || 0,
        priceTo: Number(searchParams.get("priceTo")) || 1000
    })
    const [selectedIngredients, {toggle: toggleIngredients}] = useSet(new Set<string>(searchParams.get("selectedIngredients")?.split(',')))
    const [selectedSizes, {toggle: toggleSizes}] = useSet(new Set<string>(searchParams.has("selectedSizes") ? searchParams.get("selectedSizes")?.split(',') : []))
    const [selectedPizzaTypes, {toggle: togglePizzaType}] = useSet(new Set<string>(searchParams.has("selectedPizzaTypes") ? searchParams.get("selectedPizzaTypes")?.split(',') : []))

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices(prev => ({
            ...prev,
            [name]: value
        }))
    }

        return {
            selectedSizes,
            selectedPizzaTypes,
            selectedIngredients,
            priceFrom: price.priceFrom,
            priceTo: price.priceTo,
            setPrices: updatePrice,
            setPizzaTypes: togglePizzaType,
            setSizes: toggleSizes,
            setIngredients: toggleIngredients
        }
    }
