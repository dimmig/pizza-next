import {useEffect} from "react";
import qs from "qs";
import {useRouter} from "next/navigation";
import {Filters} from "@/shared/hooks/useFilters";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter()
    useEffect(() => {
        const params = {
            priceFrom: filters.priceFrom === 0 ? undefined : filters.priceFrom,
            priceTo: filters.priceTo === 1000 ? undefined : filters.priceTo,
            selectedSizes: Array.from(filters.selectedSizes),
            selectedPizzaTypes: Array.from(filters.selectedPizzaTypes),
            selectedIngredients: Array.from(filters.selectedIngredients)
        }
        const query = qs.stringify(params, {
            arrayFormat: "comma"
        })
        router.push(`?${query}`, {
            scroll: false
        })
    }, [filters, router])
}