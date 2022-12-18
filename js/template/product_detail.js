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
            <p class="detalle_producto__precio">Precio: <span>${product.price} €</span></p>
            <p class="detalle_producto__categoria">Categoria: <span>${product.category}</span></p>
            <p><input type="number" name="cantidad" id="cantidad" value="1"></p>
            <button class="boton boton--add_carrito">AÑADIR AL CARRITO</button>
        </div>
    `;
    return productElement.outerHTML;
}
