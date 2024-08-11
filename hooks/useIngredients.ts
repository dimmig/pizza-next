import {useEffect, useState} from "react";
import {Api} from "@/services/api-client";
import {Ingredient} from "@prisma/client";

export const useIngredients = () => {
    const [loading, setLoading] = useState(true)
    const [ingredients, setIngredients] = useState<Ingredient[]>([])

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true)
                const response = await Api.ingredients.getAll()
                setIngredients(response.map(ingredient => ({id: ingredient.id, name: ingredient.name})))
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }

        fetchIngredients()
    }, [])

    return { ingredients, loading }
}