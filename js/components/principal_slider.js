// export function principalSlider(products) {
//     const principalSlider = document.createElement('section');
//     principalSlider.classList.add('productos_home', 'container');
//     console.log(products);

//     products.then(products => {
//         products.forEach((product, index) => {
//             const article = document.createElement('article');
//             article.classList.add('producto_home');
            
//             const imgContainer = document.createElement('div');
//             imgContainer.classList.add('producto_home__img_container');
//             imgContainer.innerHTML = `<img src="${product.image}" alt="">`;

//             if(index === 0, 1, 2) {
//                 article.classList.add('producto_izquierda');
//                 imgContainer.classList.add('img_izquierda');
//             } else if(index === 3) {
//                 article.classList.add('producto_centro');
//                 imgContainer.classList.add('img_central');
//             } else if(index === 4, 5, 6) {
//                 article.classList.add('producto_derecha');
//                 imgContainer.classList.add('img_derecha');
//             }

//             article.appendChild(imgContainer);
//             principalSlider.appendChild(article);
//         });
//     });

//     return principalSlider;
// }

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



// export function principalSlider() {
//     const principalSlider = document.createElement('section');
//     principalSlider.classList.add('productos_home', 'container');
//     principalSlider.innerHTML = `
//         <article class="producto_home producto_izquierda">
//             <div class="producto_home__img_container img_izquierda">
//                 <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
//             </div>
//             <!-- <h3>VESTIDO DE PUNTO CON CUELLO ALTO</h3>
//             <p>€ 29,99</p> -->
//         </article>

//         <article class="producto_home producto_izquierda">
//             <div class="producto_home__img_container img_izquierda">
//                 <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="">
//             </div>
//             <!-- <h3>VESTIDO DE PUNTO CON CUELLO ALTO</h3>
//             <p>€ 29,99</p> -->
//         </article>

//         <article class="producto_home producto_izquierda">
//             <div class="producto_home__img_container img_izquierda">
//                 <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="">
//             </div>
//             <!-- <h3>VESTIDO DE PUNTO CON CUELLO ALTO</h3>
//             <p>€ 29,99</p> -->
//         </article>

//         <article class="producto_home producto_centro">
//             <div class="producto_home__img_container img_central">
//                 <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="">
//             </div>
//             <!-- <h3>VESTIDO DE PUNTO CON CUELLO ALTO</h3>
//             <p>€ 29,99</p> -->
//         </article>

//         <article class="producto_home producto_derecha producto_derecha--primero">
//             <div class="producto_home__img_container img_derecha">
//                 <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="">
//             </div>
//             <!-- <h3>VESTIDO DE PUNTO CON CUELLO ALTO</h3>
//             <p>€ 29,99</p> -->
//         </article>

//         <article class="producto_home producto_derecha producto_derecha--segundo">
//             <div class="producto_home__img_container img_derecha">
//                 <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="">
//             </div>
//             <!-- <h3>VESTIDO DE PUNTO CON CUELLO ALTO</h3>
//             <p>€ 29,99</p> -->
//         </article>

//         <article class="producto_home producto_derecha">
//             <div class="producto_home__img_container img_derecha">
//                 <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="">
//             </div>
//             <!-- <h3>VESTIDO DE PUNTO CON CUELLO ALTO</h3>
//             <p>€ 29,99</p> -->
//         </article>
//     `;

//     return principalSlider;
// }
