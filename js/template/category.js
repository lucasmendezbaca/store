import { heroCategory } from "../components/hero_category.js";
import { productsCategory } from "../components/products_category.js";
import { getProductsCategory } from "../api/api.js";

export function category(name) {
    return new Promise((resolve, reject) => {
        getProductsCategory(name).then(res => {
            const contenedorPrincipal = document.createElement('div');
            contenedorPrincipal.classList.add('main_categoria');
            contenedorPrincipal.innerHTML = '';
            contenedorPrincipal.appendChild(heroCategory(name));
            contenedorPrincipal.appendChild(productsCategory(res));

            resolve(contenedorPrincipal.outerHTML);
        });
    });
}