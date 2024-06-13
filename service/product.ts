import { API } from "@/constant/api";

const searchProduct = async (key: string, page: string, amount: string) => {
    try {
        const response = await fetch(API.SEARCH_PRODUCT + `?key=${key}&page=${page}&amount=${amount}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const getProductByID = async (id: string) => {
    try {
        const response = await fetch(API.GET_PRODUCT_BY_ID + `/${id}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

export const ProductService = {
    searchProduct,
    getProductByID
}