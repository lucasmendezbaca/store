export function productDetail(product) {
    const productElement = document.createElement('article');
    productElement.classList.add('detalle_producto');
    productElement.innerHTML = `
        <div class="detalle_producto__img">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="detalle_producto__descripcion">
            <h1 class="detalle_producto__nombre">${product.title}</h1>
            <p class="detalle_producto__descr">${product.description}</p>
            <div class="detalle_producto__tallas">
                <p>Tallas:</p>
                <p class="detalle_producto__talla">XL</p>
                <p class="detalle_producto__talla">L</p>
                <p class="detalle_producto__talla">M</p>
                <p class="detalle_producto__talla">S</p>
                <p class="detalle_producto__talla">XS</p>
            </div>
            <p class="detalle_producto__precio">Precio: <span>${product.price}</span> €</p>
            <p class="detalle_producto__categoria">Categoria: <span>${product.category}</span></p>
            <p>Cantidad: <input type="number" name="cantidad" id="cantidad" value="1"></p>
            <input type="hidden" name="id" id="id" value="${product.id}">
            <button class="boton boton--add_carrito">AÑADIR AL CARRITO<img class="animacion_carrito" src="assets/img/cart.svg"></button>
        </div>
    `;
    return productElement.outerHTML;
}
