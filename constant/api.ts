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
  GET_ALL_BRAND: `${HOST}/brand/get-all`,
  GET_POPULAR_SHOP: `${HOST}/shop/popular`,
  //
  ADD_TO_CART: `${HOST}/add-to-cart`,
  GET_CART_BY_ACCOUNT_ID: `${HOST}/cart`,
  DELETE_PRODUCT_IN_CART: `${HOST}/item/delete`,
  UPDATE_AMOUNT_PRODUCT: `${HOST}/item/update-amount`,
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
  //
  GET_ALL_ADDRESS_BY_ACCOUNT_ID: `${HOST}/address/get-all`,
  //
  GET_VOUCHER_BY_SHOP_ID: `${HOST}/voucher/get-by-shop`,
  //
  GET_ALL_BRAND: `${HOST}/brand/get-all`,
  GET_ALL_PRODUCTS: `${HOST}/product/get-all`,
  //
  CHECKOUT: `${HOST}/order/checkout`,
  GET_NOTIFY_BY_ACCOUNT_ID: `${HOST}/notify/get-all`,
  DELTE_NOTIFY_BY_ID: `${HOST}/notify/delete`,
  GET_ALL_ORDER_BY_ACCOUNT_ID: `${HOST}/order/get-all`,
  GET_ALL_ADDRESS_BY_ACCOUNT_ID: `${HOST}/address/get-all`,
  GET_ALL_WISHLIST_BY_ACCOUNT_ID: `${HOST}/favourite/get-all`,
  DELETE_FAVOURITE_PRODUCT: `${HOST}/favourite/delete`,
  GET_ALL_TRANSACTION_BY_ACCOUNT_ID: `${HOST}/transaction/get-all`,
  GET_ALL_PROVINCE: `${HOST}/address/province/get-all`,
  GET_ALL_DISTRICT_BY_PROVINCE_ID: `${HOST}/address/district/get-all-by-province`,
  CREATE_ADDRESS: `${HOST}/address/create`,
  UPDATE_PASSWORD: `${HOST}/profile/update-password`,
  UPDATE_ADDRESS: `${HOST}/address/update`,
  GET_ADDRESS_BY_ID: `${HOST}/address/get`,
  SET_ADDRESS_BEFAULT: `${HOST}/address/set-default`,
  GET_ALL_COMMENT_BY_ACCOUNT_ID: `${HOST}/comment/get-all`,
  GET_ALL_PRODUCT_NEED_COMMENT_BY_ACCOUNT_ID: `${HOST}/product/products-no-comments`,
};
