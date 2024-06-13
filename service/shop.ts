import { API } from "@/constant/api";

const getShopByID = async (id: string) => {
    try {
        const response = await fetch(API.GET_SHOP_BY_ID + `/${id}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;   
    }
};

const getProductByShopID = async (shopID: string, page: string, amount: string) => {
    try {
        const response = await fetch(API.GET_PRODUCT_BY_SHOP_ID + `?shop_id=${shopID}&page=${page}&amount=${amount}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;   
    }
};

export const ShopService = {
    getShopByID,
    getProductByShopID
}