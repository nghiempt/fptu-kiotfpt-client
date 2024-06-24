import { API } from "@/constant/api";

const getAmountCartByAccountID = async (accountID: string) => {
    try {
        const response = await fetch(API.GET_AMOUNT_CART_BY_ACCOUNT_ID + `?accountID=${accountID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const signIn = async (username: string, password: string) => {
    try {
        const response = await fetch(API.SIGN_IN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
}

export const getAllCategories = async () => {
    try {
        const response = await fetch(API.GET_ALL_CATEGORIES);
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

export const getPopularCategories = async () => {
    try {
        const response = await fetch(API.GET_POPULAR_CATEGORIES);
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

export const getProductTopDeal = async () => {
    try {
        const response = await fetch(API.GET_PRODUCTS_TOPDEAL);
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

export const getPopularShop = async () => {
    try {
        const response = await fetch(API.GET_POPULAR_SHOP);
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

export const getAllBrands = async () => {
    try {
        const response = await fetch(API.GET_ALL_BRAND);
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

export const HomeService = {
    getAmountCartByAccountID,
    signIn,
    getAllCategories,
    getPopularCategories,
    getProductTopDeal,
    getPopularShop,
    getAllBrands
}