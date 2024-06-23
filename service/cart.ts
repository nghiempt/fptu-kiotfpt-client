import { API } from "@/constant/api";

export const addToCart = async (dataC: any) => {
  try {
    const response = await fetch(API.ADD_TO_CART, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataC),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const getCartByID = async (cartID: string) => {
  try {
    const response = await fetch(API.GET_CART_BY_ACCOUNT_ID + `/${cartID}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const deleteProductInCart = async (id: string) => {
  try {
    const response = await fetch(API.DELETE_PRODUCT_IN_CART + `/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const updateAmountProduct = async (itemId: any, newAmount: any) => {
  try {
    const response = await fetch(
      API.UPDATE_AMOUNT_PRODUCT + `?itemId=${itemId}&newAmount=${newAmount}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

export const CartService = {
  addToCart,
  getCartByID,
  deleteProductInCart,
  updateAmountProduct,
};
