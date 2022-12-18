import { heroHome } from "../components/hero_home.js";
import { principalSlider } from "../components/principal_slider.js";
import { baner } from "../components/baner.js";
import { siguenos } from "../components/siguenos.js";
import { novedades } from "../components/novedades.js";
import { getProductsLimit } from "../api/api.js";


export function home() {
    return new Promise((resolve, reject) => {
        getProductsLimit(7).then(res => {
            const contenedorPrincipal = document.createElement('div');
            contenedorPrincipal.classList.add('main_home');
            contenedorPrincipal.innerHTML = '';
            contenedorPrincipal.appendChild(heroHome());
            contenedorPrincipal.appendChild(principalSlider(res));
            contenedorPrincipal.appendChild(baner());
            contenedorPrincipal.appendChild(siguenos());
            contenedorPrincipal.appendChild(novedades());
            // console.log(contenedorPrincipal);

            resolve(contenedorPrincipal.outerHTML);
        });
    });
}
