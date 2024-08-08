import prisma from "./prisma-client";
import {hashSync} from "bcrypt";
import {categories, ingredients, products} from "./constants";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const generateProductItem = (productId: number, pizzaType?: 1 | 2, size?: 20 | 30 | 40) => {
    return {
        productId,
        size,
        pizzaType,
        price: randomNumber(190, 600),
    };
};

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "Dima Halahan TEST",
                email: "dima@gmail.com",
                password: hashSync("123", 10),
                verified: new Date(),
            },
            {
                fullName: 'Admin TEST',
                email: 'dima2@gmail.com',
                password: hashSync("123", 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ],
    });
    await prisma.category.createMany({
        data: categories
    })

    await prisma.ingredient.createMany({
        data: ingredients
    })

    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: "Peperoni",
            image: "https://media.dodostatic.net/image/r:584x584/11EE873ACF835DF68769647F2ECA2F2A.avif",
            categoryId: 1,
            ingridients: {
                connect: ingredients.slice(0, 10)
            }
        }
    })

    const pizza2 = await prisma.product.create({
        data: {
            name: "Cheesy Mushroom",
            image: "https://media.dodostatic.net/image/r:584x584/11EEC402222096ED995052422450F685.avif",
            categoryId: 1,
            ingridients: {
                connect: ingredients.slice(10, 15)
            }
        }
    })

    const pizza3 = await prisma.product.create({
        data: {
            name: "Four seasons",
            image: "https://media.dodostatic.net/image/r:584x584/11EEC406246D8163915996B91E043453.avif",
            categoryId: 1,
            ingridients: {
                connect: ingredients.slice(15, 17)
            }
        }
    })

    //@ts-ignore
    await prisma.productVariation.createMany({
        data: [
            generateProductItem(pizza1.id, 1, 20),
            generateProductItem(pizza1.id, 2, 30),
            generateProductItem(pizza1.id, 2, 40),

            generateProductItem(pizza2.id, 1, 20),
            generateProductItem(pizza2.id, 2, 30),
            generateProductItem(pizza2.id, 2, 40),

            generateProductItem(pizza3.id, 1, 20),
            generateProductItem(pizza3.id, 2, 30),
            generateProductItem(pizza3.id, 2, 40),

            generateProductItem(1),
            generateProductItem(2),
            generateProductItem(3),
            generateProductItem(4),
            generateProductItem(5),
            generateProductItem(6),
            generateProductItem(7),
            generateProductItem(8),
        ]
    })

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: "123456",
            },
            {
                userId: 2,
                totalAmount: 0,
                token: "2222222",
            }
        ]
    })

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingridients: {
                connect: [{id: 1}, {id: 2}, {id: 3}]
            }
        }
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductVariation" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.error(e)
    }
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})