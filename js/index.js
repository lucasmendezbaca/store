import { home } from './template/home.js';
import { category } from './template/category.js';
import { productDetail } from './template/product_detail.js';
import { getCategories } from './api/api.js';
import { getProduct } from './api/api.js';

const main = document.querySelector('#main');
const logoHeader = document.querySelector('.header__logo');

const secondaryMenu = document.querySelector('.header__secondary_menu');
getCategories().then(categories => {
    categories.forEach(categoryName => {
        const link = document.createElement('a');
        link.classList.add('header__secondary_menu__link');
        link.textContent = categoryName;
        link.href = '#';
        link.addEventListener('click', () => {
            category(categoryName).then(res => {
                main.innerHTML = res;
                addEventProductsCategory();
            });
        });
        secondaryMenu.appendChild(link);
    });
});

function addEventProductsCategory() {
    const products = document.querySelectorAll('.producto_categoria');
    products.forEach(product => {
        product.addEventListener('click', () => {
            let id = product.querySelector('.producto_categoria__id').textContent;
            getProduct(id).then(res => {
                main.innerHTML = productDetail(res);
            });
        });
    });
}

function showHome() {
    home().then(res => {
        main.innerHTML = res;
    });
}


logoHeader.addEventListener('click', () => {
    showHome();
});

showHome();
