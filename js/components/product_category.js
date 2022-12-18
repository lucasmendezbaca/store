export function productCategory (product) {
    const article = document.createElement('article');
    article.classList.add('producto_categoria');
    article.innerHTML = `
        <div class="producto_categoria__img_container">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="producto_categoria__info">
            <h3>${product.title}</h3>
            <p>${product.price} €</p>
            <p class="producto_categoria__id" style="display: none;">${product.id}</p>
        </div>
    `;

    return article;
}