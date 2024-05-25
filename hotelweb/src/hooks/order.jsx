import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrder, getAllOrders } from "../api/api";

export const useCreateOrder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createOrder,
        onSettled: () => {
            queryClient.invalidateQueries("get-orders-list");
        },
    });
};

export const useGetOrders = () => {
    return useQuery({
        queryKey: ["get-orders-list"],
        queryFn: getAllOrders,
        refetchOnWindowFocus: false,
        refetchInterval: false,
    });
};