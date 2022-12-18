import { home } from './template/home.js';
import { category } from './template/category.js';
import { productDetail } from './template/product_detail.js';
import { account } from './template/acount.js';
import { getCategories } from './api/api.js';
import { getProduct } from './api/api.js';
import { getUsers } from './api/api.js';
import { isRegister } from './api/helpers.js';
import { showLoader } from './api/helpers.js';
import { hideLoader } from './api/helpers.js';

const main = document.querySelector('#main');
const logoHeader = document.querySelector('.header__logo');
const menuAccount = document.querySelector('.user_menu--login');

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
                showLoader();
                main.innerHTML = productDetail(res);
                hideLoader();
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

menuAccount.addEventListener('click', () => {
    main.innerHTML = account();
    const loginBtn = document.querySelector('#login');
    loginBtn.addEventListener('click', () => {
        const email = document.querySelector('#email_login').value;
        const password = document.querySelector('#password_login').value;
        getUsers().then(users => {
            const user = isRegister(users, email, password);
            if (user) {
                menuAccount.textContent = user.name.firstname;
                showHome();
                // console.log(user.name.firstname);
            } else {
                console.log('Usuario no encontrado');
            }
        });
    });
});

showHome();
