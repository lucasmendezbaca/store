import { home } from './template/home.js';
import { category } from './template/category.js';
import { productDetail } from './template/product_detail.js';
import { account } from './template/acount.js';
import { cart } from './template/cart.js';
import { getCategories } from './api/api.js';
import { getProduct } from './api/api.js';
import { getUsers } from './api/api.js';
import { sortProducts } from './api/api.js';
import { isRegister } from './api/helpers.js';
import { showLoader } from './api/helpers.js';
import { hideLoader } from './api/helpers.js';
import { productCategory } from './components/product_category.js';
import { ProductCart } from './classes/ProductCart.js';


const main = document.querySelector('#main');
const logoHeader = document.querySelector('.header__logo');
const menuAccount = document.querySelector('.user_menu--login');
const cartMenu = document.querySelector('.user_menu--cart');
const cartCounter = document.querySelector('#carrito_contador');


const secondaryMenu = document.querySelector('.header__secondary_menu');
const lines = document.querySelectorAll('.line');
const hamburguesa = document.querySelector('#menu__hamburguesa');
getCategories().then(categories => {
    categories.forEach(categoryName => {
        const link = document.createElement('a');
        link.classList.add('header__secondary_menu__link');
        link.classList.add('elemento_header');
        link.textContent = categoryName;
        link.href = '#';
        link.addEventListener('click', () => {
            secondaryMenu.classList.remove('mostrar');
            hamburguesa.classList.remove('trans');
            lines.forEach(line => {
                line.classList.remove('line--color');
            });
            category(categoryName).then(res => {
                main.innerHTML = res;
                addEventProductsCategory(categoryName);
            });
        });

        menuHamburguesa();
        secondaryMenu.appendChild(link);
    });
});

cartMenu.addEventListener('click', () => {
    showCart();
});

function deleteOneProduct() {
    const elementsLineaProducto = document.querySelectorAll('.carrito__info');
    elementsLineaProducto.forEach(element => {
        const elementDeleteOneProduct = element.querySelector('.carrito__quitar_producto');
        elementDeleteOneProduct.addEventListener('click', () => {
            const id = element.querySelector('.carrito__id').textContent;
            const talle = element.querySelector('.carrito__talle').textContent;
            const cantidad = element.querySelector('.carrito__cantidad').textContent;
            ProductCart.deleteOneProduct(id, talle);

            if (cantidad == 0) {
                element.remove();
            }

            updateCartCounter();
            showCart();
        });
    });
}

function addOneProduct() {
    const elementsLineaProducto = document.querySelectorAll('.carrito__info');
    elementsLineaProducto.forEach(element => {
        const elementAddOneProduct = element.querySelector('.carrito__agregar_producto');
        elementAddOneProduct.addEventListener('click', () => {
            const id = element.querySelector('.carrito__id').textContent;
            const talle = element.querySelector('.carrito__talle').textContent;
            ProductCart.addOneProduct(id, talle);

            updateCartCounter();
            showCart();
        });
    });
}

function showCart() {
    main.innerHTML = cart();
    vaciarCarrito();
    deleteOneProduct();
    addOneProduct();
}

function vaciarCarrito() {
    const cartElement = document.querySelector('.carrito');
    const vaciarCarrito = document.querySelector('.carrito__vaciar_carrito');

    vaciarCarrito.addEventListener('click', () => {
        ProductCart.deleteAllProducts();
        cartElement.innerHTML = `
            <h1 class="carrito__titulo">Carrito</h1>
            <p class="carrito__vacio">El carrito está vacío</p>
        `;

        updateCartCounter();
    });
}

function addEventProductsCategory(categoryName) {
    const products = document.querySelectorAll('.producto_categoria');

    products.forEach(product => {
        product.addEventListener('click', () => {
            let id = product.querySelector('.producto_categoria__id').textContent;
            showLoader();
            getProduct(id).then(res => {
                main.innerHTML = productDetail(res);
                showActiveTalle();
                buyProductFuncionality();
                hideLoader();
            });
        });
    });

    showOrderMenu(categoryName);
}

function buyProductFuncionality() {
    const addCarrito = document.querySelector('.boton--add_carrito');
    const animacionCarrito = document.querySelector('.animacion_carrito');
    addCarrito.addEventListener('click', () => {
        const id = document.querySelector('#id').value;
        const nombre = document.querySelector('.detalle_producto__nombre').textContent;
        const imagen = document.querySelector('.detalle_producto__img img').src;
        const precio = document.querySelector('.detalle_producto__precio span').textContent;
        const cantidad = document.querySelector('#cantidad').value;
        const talla = localStorage.getItem('talla');

        let product = new ProductCart(id, nombre, imagen ,precio, parseInt(cantidad), talla);
        product.addProduct();

        updateCartCounter();

        animacionCarrito.classList.add('animacion_carrito--activo');
        setTimeout(() => {
            animacionCarrito.classList.remove('animacion_carrito--activo');
        }, 1000);
    });
}

function updateCartCounter() {
    cartCounter.textContent = ProductCart.getQuantityProducts();
}


function showActiveTalle() {
    const tallas = document.querySelectorAll('.detalle_producto__talla');
    tallas.forEach(talla => {
        talla.addEventListener('click', () => {
            tallas.forEach(talla => {
                talla.classList.remove('detalle_producto__talla--activo');
            });
            talla.classList.add('detalle_producto__talla--activo');
            localStorage.setItem('talla', talla.textContent);
        });
    });
}

function showOrderMenu(categoryName) {
    const filtroOrdenar = document.querySelector('.filtro_ordenar');
    const ordenContainer = document.querySelector('.orden_container');
    const cerrarFiltros = document.querySelector('#cerrar_filtros');

    filtroOrdenar.addEventListener('click', () => {
        ordenContainer.classList.add('orden_container--abierto');
    });

    cerrarFiltros.addEventListener('click', () => {
        ordenContainer.classList.remove('orden_container--abierto');
    });

    orderProductsFuncionality(categoryName);
}

function orderProductsFuncionality(categoryName) {
    console.log(categoryName);
    const ordenContainer = document.querySelector('.orden_container');
    const ascendente = document.querySelector('#filtrar_asc');
    const descendente = document.querySelector('#filtrar_desc');
    const productsContainer = document.querySelector('.grid_productos');

    ascendente.addEventListener('click', () => {
        // console.log(categoryName);
        sortProducts('asc', categoryName).then(res => {
            productsContainer.innerHTML = '';
            showLoader();
            res.forEach(product => {
                productsContainer.appendChild(productCategory(product));
                hideLoader();
            });
            addEventProductsCategory();
            ordenContainer.classList.remove('orden_container--abierto');
        });
    });

    descendente.addEventListener('click', () => {
        // console.log(categoryName);
        sortProducts('desc', categoryName).then(res => {
            productsContainer.innerHTML = '';
            showLoader();
            res.forEach(product => {
                productsContainer.appendChild(productCategory(product));
                hideLoader();
            });
            addEventProductsCategory();
            ordenContainer.classList.remove('orden_container--abierto');
        });
    }

    );
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
            } else {
                console.log('Usuario no encontrado');
            }
        });
    });

    sendEmailRegister();
});

function sendEmailRegister() {
    const btn = document.getElementById('button');

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_rjuwh4k';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn.value = 'Ya estas registrado!';
        btn.disabled = true;
        // alert('Sent!');
        }, (err) => {
        btn.value = 'Send Email';
        // alert(JSON.stringify(err));
        });
    });
}

function menuHamburguesa() {
    const menuLinks = document.querySelector('.header__secondary_menu');
    const body = document.querySelector('body');

    hamburguesa.onclick = function() {
        this.classList.toggle('trans');
        menuLinks.classList.toggle('mostrar');
        body.classList.toggle('no_scroll');
        lines.forEach(line => {
            line.classList.toggle('line--color');
        });
    };
}

showHome();
updateCartCounter();
