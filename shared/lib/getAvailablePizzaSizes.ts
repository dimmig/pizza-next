import { pizzaSizes, PizzaType} from "@/shared/constants/pizza";
import {ProductVariation} from "@prisma/client";
export const getAvailablePizzaSizes = (productVariations: ProductVariation[], type: PizzaType) => {
    const filteredPizzas = productVariations.filter(item => item.pizzaType === type)
    return pizzaSizes.map(el => ({
        name: el.name,
        value: el.value,
        disabled: !filteredPizzas.some(item => item.size === Number(el.value))
    }))
}