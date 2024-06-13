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

export const ProfileService = {
    getProfileByID,
    updateProfile
}