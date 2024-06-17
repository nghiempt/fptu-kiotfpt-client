import { API } from "@/constant/api";

export const addToCart = async (payload: any) => {
    try {
      const response = await fetch(API.ADD_TO_CART, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

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
    addToCart,
    getCartByID,
}