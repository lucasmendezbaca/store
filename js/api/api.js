const DOMAIN = 'https://fakestoreapi.com/';
const CATEGORIES = 'products/categories';
const PRODUCTS = 'products';
const PRODUCTS_CATEGORY = 'products/category';

export function getCategories() {
    return fetch(`${DOMAIN}${CATEGORIES}`).then(res=>res.json());
}

export function getProducts() {
    return fetch(`${DOMAIN}${PRODUCTS}`).then(res=>res.json());
}

export function getProduct(id) {
    return fetch(`${DOMAIN}${PRODUCTS}/${id}`).then(res=>res.json());
}

export function getProductsLimit(limit) {
    return fetch(`${DOMAIN}${PRODUCTS}?limit=${limit}`).then(res=>res.json());
}

export function getProductsCategory(category) {
    return fetch(`${DOMAIN}${PRODUCTS_CATEGORY}/${category}`).then(res=>res.json());
}
