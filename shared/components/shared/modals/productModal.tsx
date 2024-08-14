'use client'

import React from "react";
import {Dialog, DialogContent} from "@/shared/components/ui/dialog";
import {Product} from "@prisma/client";
import {cn} from "@/shared/lib/utils";
import {useRouter} from "next/navigation";
import {ChooseProductForm} from "@/shared/components/shared/chooseProductForm";
import {ProductWithRelations} from "@/@types/product";
import {ChoosePizzaForm} from "@/shared/components/shared/choosePizzaForm";

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
                {isPizza ?
                    (<ChoosePizzaForm
                        imageUrl={product.image}
                        name={product.name}
                        productVariations={product.productVariationsId}
                        ingredients={product.ingridients}
                    />)
                    : (
                        <ChooseProductForm
                            imageUrl={product.image}
                            name={product.name}
                        />
                    )}
            </DialogContent>
        </Dialog>
    )
}