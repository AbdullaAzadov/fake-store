const BASE_URL = "https://fakestoreapi.com/";

export async function fetchProducts() {
    const response = await fetch(BASE_URL + "products");
    const data = await response.json();
    return data;
}

export async function fetchCategories() {
    const response = await fetch(BASE_URL + "products/categories");
    const data = await response.json();
    return data;
}
