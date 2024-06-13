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
  GET_CART_BY_ACCOUNT_ID: `${HOST}/cart`,
  //
  SEARCH_PRODUCT: `${HOST}/product/search`,
  //
  GET_PRODUCT_BY_ID: `${HOST}/product`,
  //
  GET_SHOP_BY_ID: `${HOST}/shop/profile`,
  GET_PRODUCT_BY_SHOP_ID: `${HOST}/product/get-by-shop`,
  //
  GET_PROFILE_BY_ID: `${HOST}/profile`,
  UPDATE_PROFILE: `${HOST}/profile/update-profile`,
};
