import { ENDPOINTS } from "../constants/endpoints";
import instance from "./axios-client";

export async function getAllHotels() {
    return await instance
        .get(ENDPOINTS.HOTEL.GET_ALL)
        .then((response) => response.data)
        .catch((error) => {
            console.log("Error: ", error);
        });
}

export async function getAllOrders() {
    return await instance
        .get(ENDPOINTS.ORDER.GET_ALL)
        .then((response) => response.data)
        .catch((error) => {
            console.log("Error: ", error);
        });
}

export async function createOrder(order) {
    return await instance
        .post(ENDPOINTS.ORDER.CREATE, order)
        .then((response) => response.data)
        .catch((error) => {
            console.log("Error: ", error);
        });
}

export async function getPrice(order) {
    return await instance
        .post(ENDPOINTS.PRICE.GET_PRICE, order)
        .then((response) => response.data)
        .catch((error) => {
            console.log("Error: ", error);
        });
}