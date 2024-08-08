import React from 'react';
import {cn} from "@/lib/utils";
import Container from "@/components/shared/container";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ArrowRight, ShoppingCart, User} from "lucide-react";
import Link from "next/link";
import {SearchInput} from "@/components/shared/searchInput";


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

                    <div>
                        <Button className='group relative'>
                            <b>120$</b>
                            <span className='h-full w-[1px] bg-white/30 mx-3'/>
                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                                <ShoppingCart className='h-4 w-4 relative' strokeWidth={2}/>
                                <b>2</b>
                            </div>
                            <ArrowRight
                                className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0'/>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;