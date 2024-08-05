import Container from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import TopBar from "@/components/shared/topBar";
import React from "react";
import {Filters} from "@/components/shared/filters";
import {ProductCard} from "@/components/shared/productCard";
import {ProductsList} from "@/components/shared/productsList";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text="All pizzas" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar/>

            <Container className='mt-10 pb-14'>
                <div className='flex gap-[80px]'>
                    <div className='w-[250px]'>
                        <Filters/>
                    </div>

                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsList
                                title='Pizzas'
                                categoryId={0}
                                items={[{
                                    id: 1,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                    price: 30.00,
                                    items: [{price: 30.00}]
                                    },
                                    {
                                    id: 2,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                    price: 30.00,
                                    items: [{price: 30.00}]
                                },
                                    {
                                        id: 3,
                                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                        price: 30.00,
                                        items: [{price: 30.00}]
                                    },
                                    {
                                        id: 4,
                                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                        price: 30.00,
                                        items: [{price: 30.00}]
                                    },
                                    {
                                        id: 5,
                                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                        price: 30.00,
                                        items: [{price: 30.00}]
                                    }]}
                            />

                            <ProductsList
                                title='Appetizers'
                                categoryId={2}
                                items={[{
                                    id: 1,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                    price: 30.00,
                                    items: [{price: 30.00}]
                                },
                                    {
                                        id: 2,
                                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                        price: 30.00,
                                        items: [{price: 30.00}]
                                    },
                                    {
                                        id: 3,
                                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                        price: 30.00,
                                        items: [{price: 30.00}]
                                    },
                                    {
                                        id: 4,
                                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                        price: 30.00,
                                        items: [{price: 30.00}]
                                    },
                                    {
                                        id: 5,
                                        imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8739E55F5BCE89E33C950E9F9698.avif',
                                        price: 30.00,
                                        items: [{price: 30.00}]
                                    }]}
                            />
                        </div>

                    </div>
                </div>
            </Container>
        </>
    );
}
