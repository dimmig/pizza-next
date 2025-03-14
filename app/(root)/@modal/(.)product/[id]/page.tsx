import {ProductModal} from "@/shared/components/shared/modals/productModal";
import prisma from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Product} from "@prisma/client";

interface ProductModalPageProps {
    params: {
        id: string;
    };
}
export default async function ProductModalPage({params: {id}}: ProductModalPageProps) {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            ingridients: true,
            productVariationsId: true
        }
    })

    if (!product) {
        notFound()
    }

    return (
        <ProductModal product={product as Product}/>
    )
}