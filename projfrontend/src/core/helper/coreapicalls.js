import { API } from "../../backend";

export const getProducts = (setError) => {
    return fetch(`${API}product/`, { method: "GET" })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log("Product Fetch Error");
        });
};
