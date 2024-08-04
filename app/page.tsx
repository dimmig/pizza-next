import Container from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import TopBar from "@/components/shared/topBar";
import React from "react";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text="All pizzas" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar/>
            <div style={{height: "3000px"}}/>
        </>
    );
}
