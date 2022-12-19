export function principalSlider(products) {
    const principalSlider = document.createElement('section');
    principalSlider.classList.add('productos_home', 'container');

    products.forEach((product, index) => {
        const article = document.createElement('article');
        article.classList.add('producto_home');
        
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('producto_home__img_container');
        imgContainer.innerHTML = `<img src="${product.image}" alt="">`;

        if(index === 0 || index === 1 || index === 2) {
            article.classList.add('producto_izquierda');
            imgContainer.classList.add('img_izquierda');
        } else if(index === 3) {
            article.classList.add('producto_centro');
            imgContainer.classList.add('img_central');
        } else if(index === 4 || index === 5 || index === 6) {
            article.classList.add('producto_derecha');
            imgContainer.classList.add('img_derecha');
        }

        article.appendChild(imgContainer);
        principalSlider.appendChild(article);
    });

    return principalSlider;
}