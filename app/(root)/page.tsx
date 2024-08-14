import Container from "@/shared/components/shared/container";
import {Title} from "@/shared/components/shared/title";
import TopBar from "@/shared/components/shared/topBar";
import React from "react";
import {Filters} from "@/shared/components/shared/filters";
import {ProductsList} from "@/shared/components/shared/productsList";
import prisma from "@/prisma/prisma-client";

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: {
            product: {
                include: {
                    productVariationsId: true,
                    ingridients: true
                }
            }
        }
    })

    return (
        <>
            <Container className='mt-10'>
                <Title text="All pizzas" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar categories={categories.filter(category => category.product.length > 0)}/>

            <Container className='mt-10 pb-14'>
                <div className='flex gap-[80px]'>
                    <div className='w-[250px]'>
                        <Filters/>
                    </div>

                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            {categories.map(category => (
                                category.product.length > 0 && (
                                    <ProductsList
                                        key={category.id}
                                        title={category.name}
                                        items={category.product}
                                        categoryId={category.id}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
