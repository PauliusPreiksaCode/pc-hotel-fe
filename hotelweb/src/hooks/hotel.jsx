import { useQuery } from "@tanstack/react-query";
import { getAllHotels } from "../api/api"

export const useGetHotels = () => {
    return useQuery({
        queryKey: ["get-hotels-list"],
        queryFn: getAllHotels,
        refetchOnWindowFocus: false,
        refetchInterval: false,
    });
};