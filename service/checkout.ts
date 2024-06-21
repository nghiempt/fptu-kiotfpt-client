import { API } from "@/constant/api";


const getAllAddressByAccountID = async (accountID: string) => {
    try {
        const response = await fetch(API.GET_ALL_ADDRESS_BY_ACCOUNT_ID + `?accountID=${accountID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

export const CheckoutService = {
  getAllAddressByAccountID,
}