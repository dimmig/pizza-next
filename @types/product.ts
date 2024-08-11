import {Ingredient, Product, ProductVariation} from "@prisma/client";

export type ProductWithRelations = Product & {productVariationsId: ProductVariation[], ingredients: Ingredient[]}