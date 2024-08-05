import React from "react";
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filterCheckbox";
import {Input} from "@/components/ui/input";
import {RangeSlider} from "@/components/shared/rangeSlider";
import {CheckboxFiltersGroup} from "@/components/shared/checkboxFiltersGroup";

interface Props {
    className?: string
}
export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text="Filters" size='sm' className='mb-5 font-bold' />
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Collect' value="1" />
                <FilterCheckbox text='New items' value="2" />
            </div>

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Price from-to</p>
                <div className='flex gap-3 mb-5'>
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
                    <Input type="number" placeholder="1000" min={30} max={1000} />
                </div>
                <RangeSlider min={0} max={1000} step={5} />
            </div>
            <CheckboxFiltersGroup
                title='Ingridients'
                className='mt-5'
                limit={6}
                defaultItems={[
                    {
                        text: 'Cheese sauce',
                        value: '1',
                    },
                    {
                        text: 'Mozzarella',
                        value: '2',
                    },
                    {
                        text: 'Garlic',
                        value: '3',
                    },
                    {
                        text: 'Pickles',
                        value: '4',
                    },
                    {
                        text: 'Red onion',
                        value: '5',
                    },
                    {
                        text: 'Tomatoes',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Cheese sauce',
                        value: '1',
                    },
                    {
                        text: 'Mozzarella',
                        value: '2',
                    },
                    {
                        text: 'Garlic',
                        value: '3',
                    },
                    {
                        text: 'Pickles',
                        value: '4',
                    },
                    {
                        text: 'Red onion',
                        value: '5',
                    },
                    {
                        text: 'Tomatoes',
                        value: '6',
                    },
                    {
                        text: 'Cheese sauce',
                        value: '1',
                    },
                    {
                        text: 'Mozzarella',
                        value: '2',
                    },
                    {
                        text: 'Garlic',
                        value: '3',
                    },
                    {
                        text: 'Pickles',
                        value: '4',
                    },
                    {
                        text: 'Red onion',
                        value: '5',
                    },
                    {
                        text: 'Tomatoes',
                        value: '6',
                    },
                ]}
            />
        </div>
    )
}