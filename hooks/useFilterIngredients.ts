import {useEffect, useState} from "react";
import {Api} from "@/services/api-client";
import {Ingredient} from "@prisma/client";
import {useSet} from "react-use";
interface ReturnProps {
    ingredients: Ingredient[],
    loading: boolean,
    selectedIngredients: Set<string>,
    toggleId: (id: string) => void
}

export const useFilterIngredients = (values: string[] = []): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState(true)
    console.log("VALUES: ", values)
    const [selectedIngredients, { toggle }] = useSet(new Set<string>(values))
    console.log("SELECTED INGREDIENTS: ", selectedIngredients)
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


    return { ingredients, loading, toggleId: toggle, selectedIngredients}
}