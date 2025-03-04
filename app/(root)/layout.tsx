import type {Metadata} from "next";
import Header from "@/shared/components/shared/header";
import React from "react";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function HomeLayout
({
     modal,
     children,
 }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode
}>) {
    return (
        <main className="min-h-screen">
            <Header/>
            {children}
            {modal}
        </main>
    );
}
