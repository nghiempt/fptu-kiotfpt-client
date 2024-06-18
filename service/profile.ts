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
    createAddress
}