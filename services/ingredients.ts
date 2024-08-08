import {axiosInstance} from "@/services/axios";
import {ApiRoutes} from "@/services/constants";
import {Ingredient} from "@prisma/client";

export const getAll = async () => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}