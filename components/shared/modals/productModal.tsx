'use client'

import React from "react";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {Product} from "@prisma/client";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {ChooseProductForm} from "@/components/shared/chooseProductForm";
import {ProductWithRelations} from "@/@types/product";

interface Props {
    product: ProductWithRelations
    className?: string
}

export const ProductModal: React.FC<Props> = ({className, product}) => {
    const router = useRouter()
    const isPizza = Boolean(product.productVariationsId[0].pizzaType)

    //@ts-ignore
    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
                {isPizza ? "PIzza" : (
                    <ChooseProductForm
                        imageUrl={product.image}
                        name={product.name}
                        productVariations={product.variations}
                        ingredients={product.ingredients}
                    />
                )}
            </DialogContent>
        </Dialog>
    )
}