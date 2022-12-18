import { productCategory } from "./product_category.js";

export function productsCategory(products) {
    const main = document.querySelector('#main');
    const sectionProductos = document.createElement('section');
    sectionProductos.classList.add('grid_productos');
    sectionProductos.classList.add('container');
    products.forEach(product => {
        sectionProductos.appendChild(productCategory(product));
    });

    return sectionProductos;
}
