const DOMAIN = 'https://fakestoreapi.com/';
const CATEGORIES = 'products/categories';
const PRODUCTS = 'products';
const PRODUCTS_CATEGORY = 'products/category';
const USERS = 'users';

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

export function getUsers() {
    return fetch(`${DOMAIN}${USERS}`).then(res=>res.json());
}

export function sortProducts(order, category) {
    return fetch(`${DOMAIN}${PRODUCTS_CATEGORY}/${category}?sort=${order}`).then(res=>res.json());
}