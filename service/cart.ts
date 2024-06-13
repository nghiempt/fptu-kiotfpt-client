import { API } from "@/constant/api";

const getCartByID = async (cartID: string) => {
    try {
        const response = await fetch(API.GET_CART_BY_ACCOUNT_ID + `/${cartID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

export const CartService = {
    getCartByID,
}