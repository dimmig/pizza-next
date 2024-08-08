import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma-client";
import {Prisma} from "@prisma/client";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get("query") || '';

    const findManyArgs: Prisma.ProductFindManyArgs = {
        where: {
            name: {
                contains: query,
                mode: 'insensitive',
            },
        },
        take: 5,
    };

    const products = await prisma.product.findMany(findManyArgs);

    return NextResponse.json({ products });
}
