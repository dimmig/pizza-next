"use client"

import React from "react";
import {Title} from "@/shared/components/shared/title";
import {Input} from "@/shared/components/ui/input";
import {RangeSlider} from "@/shared/components/shared/rangeSlider";
import {CheckboxFiltersGroup} from "@/shared/components/shared/checkboxFiltersGroup";
import {useIngredients} from "@/shared/hooks/useIngredients";
import {useFilters} from "@/shared/hooks/useFilters";
import {useQueryFilters} from "@/shared/hooks/useQueryFilters";

interface Props {
    className?: string
}


export const Filters: React.FC<Props> = ({className}) => {
    const {ingredients, loading} = useIngredients()
    const filters = useFilters()

    useQueryFilters(filters)

    const items = ingredients.map(el => ({text: el.name, value: el.id.toString()}))

    const updatePrices = (prices: number[]) => {
        filters.setPrices("priceFrom", prices[0])
        filters.setPrices("priceTo", prices[1])
    }

    return (
        <div className={className}>
            <Title text="Filters" size='sm' className='mb-5 font-bold' />
            <CheckboxFiltersGroup
                title='Pizza Type'
                className='mb-5'
                onClickCheckbox={filters.setPizzaTypes}
                name='size'
                items={[
                    {text: "Thin", value: "1"},
                    {text: "Normal", value: "2"},
                ]}
                selectedIds={filters.selectedPizzaTypes}
            />

            <CheckboxFiltersGroup
                title='Sizes'
                className='mb-5'
                onClickCheckbox={filters.setSizes}
                name='size'
                items={[
                    {text: "small", value: "30"},
                    {text: "medium", value: "40"},
                    {text: "large", value: "50"},
                ]}
                selectedIds={filters.selectedSizes}
            />

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Price from-to</p>
                <div className='flex gap-3 mb-5'>
                    <Input type="number" placeholder="0" min={0} max={1000} value={filters.priceFrom?.toString() || 0} onChange={e => filters.setPrices("priceFrom", Number(e.target.value))}/>
                    <Input type="number" placeholder="1000" min={30} max={1000} value={filters.priceTo?.toString() || 1000}  onChange={e => filters.setPrices("priceTo", Number(e.target.value))}/>
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={1}
                    value={[filters.priceFrom || 0, filters.priceTo || 1000]}
                    onValueChange={updatePrices}
                />
            </div>
            <CheckboxFiltersGroup
                title='Ingridients'
                className='mt-5'
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setIngredients}
                selectedIds={filters.selectedIngredients}
                name='indgredients'
            />
        </div>
    )
}