export function cart() {
    let products = JSON.parse(localStorage.getItem('carrito')) || [];

    const cartElement = document.createElement('div');
    cartElement.classList.add('container');
    cartElement.classList.add('carrito');
    if (products.length === 0) {
        cartElement.innerHTML = `
            <h1 class="carrito__titulo">Carrito</h1>
            <p class="carrito__vacio">El carrito está vacío</p>
        `;
    } else {
        cartElement.innerHTML = `
            <div class="carrito__header">
                <h1 class="carrito__titulo">Carrito</h1>
                <button class="button--fino carrito__vaciar_carrito">Vaciar carrito</button>
            </div>
            <div class="carrito__productos">
            ${products.map(product => `
                <div class="carrito__producto">
                    <div class="carrito__imagen__container">
                        <img class="carrito__imagen" src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="carrito__info">
                        <h3 class="carrito__nombre">${product.title}</h3>
                        <span class="carrito__id">${product.id}</span>
                        <p class="carrito__precio">${product.price} €</p>
                        <p class="carrito__talle_p">Talla: <span class="carrito__talle">${product.talle}</span></p>
                        <p class="carrito__cantidad">Cantidad: ${product.quantity} <span><i class="carrito__quitar_producto carrito__opciones fa-solid fa-minus"></i><i class="carrito__agregar_producto  carrito__opciones fa-solid fa-plus"></i></span></span></p>
                        <p class="carrito__subtotal">Subtotal: ${Math.round((product.price * product.quantity) * 100) / 100} €</p>
                    </div>
                </div>
            `).join('')}
            </div>
            <div class="carrito__footer">
                <p class="carrito__total">Total: <span>${Math.round((products.reduce((acc, product) => acc + product.price * product.quantity, 0)) * 100) / 100} €</span></p>
                <p class="carrito__precio_envio">Precio de envío: <span>Gratis</span></p>
                <button class="boton--comprar">Finalizar Compra</button>
            </div>
        `;
    }

    return cartElement.outerHTML;
}