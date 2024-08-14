import {Ingredient, ProductVariation} from "@prisma/client";
import {PizzaSize, PizzaType} from "@/shared/constants/pizza";

export const calculatePizzaPrice = (
    productVariations: ProductVariation[],
    size: PizzaSize,
    type: PizzaType,
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const filteredVariation = productVariations.filter(item => item.size === size && item.pizzaType === type)
    let ingredientsPrice = 0
    if (filteredVariation.length > 0) {
        Array.from(selectedIngredients).forEach(id => {
            const ingredient = ingredients.filter(ingredient => id === ingredient.id)[0]
            ingredientsPrice += ingredient.price
        })
        return filteredVariation[0].price + ingredientsPrice
    }
}