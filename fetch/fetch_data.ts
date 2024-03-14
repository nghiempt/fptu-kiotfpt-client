import { API } from "@/constant/api";

const GET_ALL_PRODUCTS = async () => {
    try {
        const response = await fetch(API.GET_ALL_PRODUCTS);
        const data = await response.json();
        if (data?.length > 0) {
            return data;
        }
        return []
    } catch (err) {
        console.log(err);
        return false;
    }
};

const GET_ALL_SHOPS = async () => {
    try {
        const response = await fetch(API.GET_ALL_SHOPS);
        const data = await response.json();
        if (data?.length > 0) {
            return data;
        }
        return []
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const FetchData = {
    GET_ALL_PRODUCTS,
    GET_ALL_SHOPS
}