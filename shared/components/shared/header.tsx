import React from 'react';
import {cn} from "@/shared/lib/utils";
import Container from "@/shared/components/shared/container";
import Image from "next/image";
import {Button} from "@/shared/components/ui/button";
import {ArrowRight, ShoppingCart, User} from "lucide-react";
import Link from "next/link";
import {SearchInput} from "@/shared/components/shared/searchInput";
import {CartButton} from "@/shared/components/shared/cartButton";


interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('border, border-b', className)}>
            <Container className='flex items-center justify-between py-8'>

                { /*Left part*/}
                <Link href="/">
                    <div className='flex items-center gap-4'>
                        <Image src="/logo.png" width={35} height={35} alt={""}/>
                        <div>
                            <h1 className='text-2xl uppercase font-black'>Pizza Next</h1>
                            <p className='text-sm text-gray-400 leading-3'>Mmmm... Delicious</p>
                        </div>
                    </div>
                </Link>

                <div className='mx-10 flex-1'>
                    <SearchInput />
                </div>

                { /*Right part*/}
                <div className='flex items-center gap-3'>
                    <Button variant='outline' className='flex items-center gap-3'>
                        <User size={16}/>
                        Log in
                    </Button>

                        <CartButton />
                </div>
            </Container>
        </div>
    );
}

export default Header;