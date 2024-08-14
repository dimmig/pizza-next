import prisma from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import Container from "@/shared/components/shared/container";
import {ProductImage} from "@/shared/components/shared/ProductImage";
import {Title} from "@/shared/components/shared/title";
import {GroupVariants} from "@/shared/components/shared/groupVariants";

export default async function ProductPage({params: {id}}) {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        }
    })

    if (!product) {
        return notFound()
    }

    //@ts-ignore
    return (
        <Container className='flex flex-col my-10'>
            <div className="flex flex-1">
                <ProductImage imageUrl={product.image} size={30} className=""/>
                <div className="w-[490px] bg-[#FCFCFC] p-7">
                    <Title text={product.name} size="md" className='font-extrabold mb-1'/>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <GroupVariants
                        items={[
                        {
                            name: "Small",
                            value: "1"
                        },
                        {
                            name: "Medium",
                            value: "2"
                        },
                        {
                            name: "Large",
                            value: "3"
                        },
                    ]}/>
                </div>
            </div>
        </Container>
    )
}