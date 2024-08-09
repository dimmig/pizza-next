"use client"

import React, {useEffect, useState} from "react";
import {Title} from "@/components/shared/title";
import {Input} from "@/components/ui/input";
import {RangeSlider} from "@/components/shared/rangeSlider";
import {CheckboxFiltersGroup} from "@/components/shared/checkboxFiltersGroup";
import {useFilterIngredients} from "@/hooks/useFilterIngredients";
import {useSearchParam, useSet} from "react-use";
import qs from "qs"
import {useRouter, useSearchParams} from "next/navigation";
import {Ingredient} from "@prisma/client";

interface Props {
    className?: string
}

interface PriceProps {
    priceFrom?: number
    priceTo?: number
}

interface QueryFilters extends PriceProps {
    selectedPizzaTypes: string[];
    selectedIngredients: string[];
    selectedSizes: string[]
}
export const Filters: React.FC<Props> = ({className}) => {
    const router = useRouter()
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>
    const { ingredients, loading, selectedIngredients, toggleId } = useFilterIngredients(searchParams.get("selectedIngredients")?.split(','))
    const [price, setPrice] = useState<PriceProps>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined
    })
    console.log(selectedIngredients)
    const [selectedSizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.has("selectedSizes") ? searchParams.get("selectedSizes")?.split(',') : []))
    const [selectedPizzaTypes, { toggle: togglePizzaType }] = useSet(new Set<string>(searchParams.has("selectedPizzaTypes") ? searchParams.get("selectedPizzaTypes")?.split(',') : []))


    const items = ingredients.map(el => ({text: el.name, value: el.id}))

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...price,
            [name]: value
        })
    }

    useEffect(() => {
        const filters = {
            ...price,
            selectedSizes: Array.from(selectedSizes),
            selectedPizzaTypes: Array.from(selectedPizzaTypes),
            selectedIngredients: Array.from(selectedIngredients)
        }
        const query = qs.stringify(filters, {
            arrayFormat: "comma"
        })
        router.push(`?${query}`, {
            scroll: false
        })
    }, [price, selectedSizes, selectedPizzaTypes, selectedIngredients, router])


    return (
        <div className={className}>
            <Title text="Filters" size='sm' className='mb-5 font-bold' />
            <CheckboxFiltersGroup
                title='Pizza Type'
                className='mb-5'
                onClickCheckbox={togglePizzaType}
                name='size'
                items={[
                    {text: "Thin", value: "1"},
                    {text: "Normal", value: "2"},
                ]}
                selectedIds={selectedPizzaTypes}
            />

            <CheckboxFiltersGroup
                title='Sizes'
                className='mb-5'
                onClickCheckbox={toggleSizes}
                name='size'
                items={[
                    {text: "small", value: "30"},
                    {text: "medium", value: "40"},
                    {text: "large", value: "50"},
                ]}
                selectedIds={selectedSizes}
            />

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Price from-to</p>
                <div className='flex gap-3 mb-5'>
                    <Input type="number" placeholder="0" min={0} max={1000} value={price.priceFrom?.toString()} onChange={e => updatePrice("priceFrom", Number(e.target.value))}/>
                    <Input type="number" placeholder="1000" min={30} max={1000} value={price.priceTo?.toString()}  onChange={e => updatePrice("priceTo", Number(e.target.value))}/>
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={1}
                    value={[price.priceFrom || 0, price.priceTo || 1000]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
                />
            </div>
            <CheckboxFiltersGroup
                title='Ingridients'
                className='mt-5'
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={toggleId}
                selectedIds={selectedIngredients}
                name='indgredients'
            />
        </div>
    )
}