const GET_ALL_PRODUCTS = async () => {
    try {
        const response = await fetch('');
        const data = await response.json();
        if (data?.length > 0) {
            return data;
        }
        return []
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const FetchData = {
    GET_ALL_PRODUCTS
}