"use client"

import React from "react";
import {cn} from "@/lib/utils";

type Variant = {
    name: string;
    value: string;
    disabled?: boolean
}
interface Props {
    items: readonly Variant[];
    onClick: (value: Variant["value"]) => void;
    selectedValue: Variant["value"]
    className?: string
}
export const GroupVariants: React.FC<Props> = ({ items, onClick, selectedValue, className }) => {
    return (
        <div className={cn("flex justify-between bg-[#F3F3F7] rounded-3xl select-none p-1", className)}>
            {items.map(item => (
                <button
                    key={item.name}
                    onClick={() => onClick?.(item.value)}
                    className={cn(
                        "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-300 text-sm",
                        {
                            "bg-white shadow": item.value === selectedValue,
                            "text-gray-500 opacity-50 pointer-events-none": item.disabled
                        }
                    )}
                >
                    {item.name}
                </button>
            ))}
        </div>
    )
}