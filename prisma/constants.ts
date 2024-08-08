export const categories = [
    {
        name: "Pizza"
    },
    {
        name: "Combo"
    },
    {
        name: "Appetizers"
    },
    {
        name: "Cocktails"
    },
    {
        name: "Coffee"
    },
    {
        name: "Drinks"
    },
    {
        name: "Desserts"
    },
]

export const ingredients =
    [
        {
            name: 'Cheese dough',
            price: 12,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
        },
        {
            name: 'Mozzarella',
            price: 8,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
        },
        {
            name: 'Cheddar and parmesan',
            price: 10,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
        },
        {
            name: 'Hot chilli pepper',
            price: 5,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
        },
        {
            name: 'Chicken',
            price: 8,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
        },
        {
            name: 'Mushrooms',
            price: 4,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
        },
        {
            name: 'Bacon',
            price: 6,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
        },
        {
            name: 'BeefMeet',
            price: 9,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
        },
        {
            name: 'Pepperoni sausage',
            price: 8,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
        },
        {
            name: 'Chorizo',
            price: 9,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
        },
        {
            name: 'Pickles',
            price: 3,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
        },
        {
            name: 'Tomatoes',
            price: 2,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
        },
        {
            name: 'Red onion',
            price: 1,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
        },
        {
            name: 'Pineapples',
            price: 7,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
        },
        {
            name: 'Italian seeds',
            price: 2,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
        },
        {
            name: 'Sweet pepper',
            price: 3,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
        },
        {
            name: 'Feta cheese ',
            price: 5,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
        },
        {
            name: 'Meatballs',
            price: 9,
            image:
                'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
        },
    ].map((obj, index) => ({id: index + 1, ...obj}))

export const products = [
    {
        name: "Lunchbox with fries",
        image: "https://media.dodostatic.net/image/r:584x584/11EE87307D67AE499A01EB0F960DD2DC.avif",
        categoryId: 3,
    },
    {
        name: "Chicken stripes",
        image: "https://media.dodostatic.net/image/r:584x584/11EEE24067204E4BA49C353DFB15867C.avif",
        categoryId: 3,
    },
    {
        name: "Cynnabones",
        image: "https://media.dodostatic.net/image/r:584x584/11EE873486BA6B87A5B66FA1A67995AD.avif",
        categoryId: 7,
    },
    {
        name: "Cheesecake",
        image: "https://media.dodostatic.net/image/r:584x584/11EE87294A1DD93587A4D0FF923A4EC2.avif",
        categoryId: 7,
    },
    {
        name: "Fuze tea",
        image: "https://media.dodostatic.net/image/r:584x584/11EEC3FA5ABEC558BDDAC8767C1C1609.avif",
        categoryId: 6,
    },

    {
        name: "Dodster Hot",
        image: "https://media.dodostatic.net/image/r:584x584/11EEE24033265F5A8996F3408F5605B2.avif",
        categoryId: 3,
    },
    {
        name: "Cheese starter",
        image: "https://media.dodostatic.net/image/r:584x584/11EE872D6621A023B3BF95FDB69C0A39.avif",
        categoryId: 3,
    },
    {
        name: "Coca Cola Zero",
        image: "https://media.dodostatic.net/image/r:584x584/11EEC400A943C06AB93D13C263050CB8.avif",
        categoryId: 7,
    },
]