import { GET } from "@/app/api/auth/[...nextauth]/route";

export const HOST = `https://api.kiotfpt.store/v1`;

export const API = {
  //
  SIGN_IN: `${HOST}/auth/sign-in`,
  SIGN_UP: `${HOST}/auth/sign-up`,
  //
  GET_AMOUNT_CART_BY_ACCOUNT_ID: `${HOST}/cart/amount`,
  GET_ALL_CATEGORIES: `${HOST}/category/get-all`,
  GET_POPULAR_CATEGORIES: `${HOST}/category/popular`,
  GET_PRODUCTS_TOPDEAL: `${HOST}/product/top-deal`,
  GET_POPULAR_SHOP: `${HOST}/shop/popular`,
  //
  ADD_TO_CART: `${HOST}/add-to-cart`,
  GET_CART_BY_ACCOUNT_ID: `${HOST}/cart`,
  //
  SEARCH_PRODUCT: `${HOST}/product/search`,
  //
  GET_PRODUCT_BY_ID: `${HOST}/product`,
  //
  GET_SHOP_BY_ID: `${HOST}/shop/profile`,
  GET_PRODUCT_BY_SHOP_ID: `${HOST}/product/get-by-shop`,
  // Profile page
  GET_PROFILE_BY_ID: `${HOST}/profile`,
  UPDATE_PROFILE: `${HOST}/profile/update-profile`,
  GET_NOTIFY_BY_ACCOUNT_ID: `${HOST}/notify/get-all`,
  DELTE_NOTIFY_BY_ID: `${HOST}/notify/delete`,
  GET_ALL_ORDER_BY_ACCOUNT_ID: `${HOST}/order/get-all`,
  GET_ALL_ADDRESS_BY_ACCOUNT_ID: `${HOST}/address/get-all`,
  GET_ALL_WISHLIST_BY_ACCOUNT_ID: `${HOST}/favourite/get-all`,
  GET_ALL_TRANSACTION_BY_ACCOUNT_ID: `${HOST}/transaction/get-all`,
  GET_ALL_PROVINCE: `${HOST}/address/province/get-all`,
  GET_ALL_DISTRICT_BY_PROVINCE_ID: `${HOST}/address/district/get-all-by-province`,
  CREATE_ADDRESS: `${HOST}/address/create`,
};
