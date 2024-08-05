'use client'

import React, {useState} from "react";
import {FilterCheckbox, FilterCheckboxProps} from "@/components/shared/filterCheckbox";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

type Item = FilterCheckboxProps

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string
    onChange?: (values: string[]) => void;
    defaultInputValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> =
    ({
         title,
         items,
         defaultItems,
         limit = 5,
         searchInputPlaceholder = 'Search...',
         onChange,
         defaultInputValue,
         className
     }) => {
        const [showAll, setShowAll] = useState(false)
        const [searchValue, setSearchValue] = useState("")
        const onChangeSearchInput = (value: string) => {
            setSearchValue(value)
        }

        const list = showAll ? items.filter(el => el.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems.slice(0, limit)

        return (
            <div className={className}>
                <p className='font-bold mb-3'>{title}</p>
                {showAll && (
                    <div className='mb-5'>
                        <Input
                            onChange={e => onChangeSearchInput(e.target.value)}
                            placeholder={searchInputPlaceholder}
                            className='bg-gray-50 border-none'/>
                    </div>
                )}
                <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
                    {list.map((el, index) => (
                        <FilterCheckbox
                            key={index}
                            text={el.text}
                            value={el.value}
                            endAdornment={el.endAdornment}
                            checked={false}
                            onCheckedChange={(ids) => console.log(ids)}
                        />
                    ))}
                </div>
                {items.length > limit &&
                    <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                        <button onClick={() => setShowAll(prev => !prev)}
                                className='text-primary mt-3'>{showAll ? '- Show less' : "+ Show more"}</button>
                    </div>
                }
            </div>
        )
    }