import {axiosInstance} from "@/shared/services/axios";
import {ApiRoutes} from "@/shared/services/constants";
import {Ingredient} from "@prisma/client";

export const getAll = async () => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}