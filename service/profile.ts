import { API } from "@/constant/api";

const getProfileByID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_PROFILE_BY_ID + `/${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

export const updateProfile = async (payload: any) => {
    console.log(payload);
    try {

        const response = await fetch(API.UPDATE_PROFILE, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

const getAllNotifyByAccountID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_NOTIFY_BY_ACCOUNT_ID + `?accountID=${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const deleteNotifyByID = async (ID: string) => {
    try {
        const response = await fetch(API.DELTE_NOTIFY_BY_ID + `/${ID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const getAllOrderByAccountID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_ALL_ORDER_BY_ACCOUNT_ID + `?accountID=${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const getAllAddressByAccountID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_ALL_ADDRESS_BY_ACCOUNT_ID + `?accountID=${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const getAllWishListByAccountID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_ALL_WISHLIST_BY_ACCOUNT_ID + `?accountID=${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const deleteFavouriteProduct = async (ID: string) => {
    try {

        const response = await fetch(API.DELETE_FAVOURITE_PRODUCT + `/${ID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

const getAllTracsactionByAccountID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_ALL_TRANSACTION_BY_ACCOUNT_ID + `?accountID=${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const getAllProvince = async () => {
    try {
        const response = await fetch(API.GET_ALL_PROVINCE);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const getAllDistrictByProvinceID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_ALL_DISTRICT_BY_PROVINCE_ID + `/${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const createAddress = async (payload: any) => {
    try {
        const response = await fetch(API.CREATE_ADDRESS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

const updatePassword = async (payload: any) => {
    try {
        const response = await fetch(API.UPDATE_PASSWORD, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

export const updateAddress = async (payload: any) => {
    console.log(payload);
    try {

        const response = await fetch(API.UPDATE_ADDRESS, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return false;
    }
};

const getAddressByID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_ADDRESS_BY_ID + `/${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const setAddressDefault = async (ID: string) => {
    try {
        const response = await fetch(API.SET_ADDRESS_BEFAULT + `/${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};


const getAllCommentByAccountID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_ALL_COMMENT_BY_ACCOUNT_ID + `?accountID=${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

const getAllProductNeedCommentByAccountID = async (ID: string) => {
    try {
        const response = await fetch(API.GET_ALL_PRODUCT_NEED_COMMENT_BY_ACCOUNT_ID + `?accountId=${ID}`);
        const data = await response.json();
        return data
    } catch (err) {
        return false;
    }
};

export const ProfileService = {
    getProfileByID,
    updateProfile,
    getAllNotifyByAccountID,
    deleteNotifyByID,
    getAllOrderByAccountID,
    getAllAddressByAccountID,
    getAllWishListByAccountID,
    getAllTracsactionByAccountID,
    getAllProvince,
    getAllDistrictByProvinceID,
    createAddress,
    updatePassword,
    updateAddress,
    getAddressByID,
    deleteFavouriteProduct,
    getAllCommentByAccountID,
    getAllProductNeedCommentByAccountID,
    setAddressDefault,
}