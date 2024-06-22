import { API } from "@/constant/api";

const getVoucherByShopID = async (shopID: string) => {
    try {
        const response = await fetch(API.GET_VOUCHER_BY_SHOP_ID + `?shopID=${shopID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

export const VoucherService = {
  getVoucherByShopID,
}