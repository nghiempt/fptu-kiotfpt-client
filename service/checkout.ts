import { API } from "@/constant/api";

const getAllAddressByAccountID = async (accountID: string) => {
  try {
    const response = await fetch(
      API.GET_ALL_ADDRESS_BY_ACCOUNT_ID + `?accountID=${accountID}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};
const getVoucherByShopID = async (shopID: string) => {
  try {
    const response = await fetch(
      API.GET_VOUCHER_BY_SHOP_ID + `?shopID=${shopID}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const checkout = async (dataC: string) => {
  try {
    const response = await fetch(API.CHECKOUT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataC),
    });
    const data = await response.json();
    console.log(dataC);

    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const CheckoutService = {
  getAllAddressByAccountID,
  getVoucherByShopID,
  checkout,
};
