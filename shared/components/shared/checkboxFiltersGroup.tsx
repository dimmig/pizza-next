'use client'

import React, {useState} from "react";
import {FilterCheckbox, FilterCheckboxProps} from "@/shared/components/shared/filterCheckbox";
import {Input} from "@/shared/components/ui/input";
import {Skeleton} from "@/shared/components/ui/skeleton";

type Item = FilterCheckboxProps

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string
    onClickCheckbox?: (id: string) => void;
    defaultInputValue?: string[];
    loading?: boolean
    className?: string;
    selectedIds: Set<string>
    name: string
}

export const CheckboxFiltersGroup: React.FC<Props> =
    ({
         title,
         items,
         defaultItems,
         limit = 5,
         searchInputPlaceholder = 'Search...',
         onClickCheckbox,
         defaultInputValue,
         loading,
         selectedIds,
         name,
         className
     }) => {
        const [showAll, setShowAll] = useState(false)
        const [searchValue, setSearchValue] = useState("")
        const onChangeSearchInput = (value: string) => {
            setSearchValue(value)
        }
        const list = showAll ? items.filter(el => el.text.toLowerCase().includes(searchValue.toLowerCase())) : (defaultItems || items).slice(0, limit)

        if (loading) {
            return (
                <div className={className}>
                    <p className='font-bold mb-3'>{title}</p>
                    {
                        ...Array(limit).fill(0).map((el, index) => (
                            <Skeleton key={index} className='h-6 mb-4 rounded-[8px]'/>
                        ))
                    }
                    <Skeleton className='w-28 h-6 mb-4 rounded-[8px]'/>
                </div>
            )
        }

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
                            checked={selectedIds.has(el.value)}
                            onCheckedChange={(id) => onClickCheckbox?.(el.value)}
                            name={name}
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