import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getPrice } from "../api/api"

export const useGetPrice = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: getPrice,
        onSettled: () => {
            queryClient.invalidateQueries("get-price");
        },
    });
}
