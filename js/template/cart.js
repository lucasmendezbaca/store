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
            <table class="carrito__tabla">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Talla</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map((product) => `
                        <tr class="carrito__linea_producto">
                            <td class="carrito__celda_producto">
                                <img src="${product.image}" alt="${product.title}" class="carrito__tabla__img">
                                ${product.title}
                                <span class="carrito__id">${product.id}</span>
                            </td>
                            <td>${product.price}</td>
                            <td class="carrito__talle">${product.talle}</td>
                            <td class="carrito__cantidad">${product.quantity}</td>
                            <td>${product.price * product.quantity} €</td>
                            <td>
                                <span class="carrito__quitar_producto">-</span>
                                <span class="carrito__agregar_producto">+</span>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="carrito__footer">
                <p class="carrito__total">Total: <span>${products.reduce((acc, product) => acc + product.price * product.quantity, 0)} €</span></p>
                <button class="boton--comprar">Finalizar Compra</button>
            </div>
        `;
    }

    return cartElement.outerHTML;
}