import { API } from "@/constant/api";

export const signIn = async (payload: any) => {
    try {
        const response = await fetch(API.SIGN_IN, {
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

export const signUp = async (payload: any) => {
    try {
        const response = await fetch(API.SIGN_UP, {
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

export const AuthService = {
    signIn,
    signUp
}