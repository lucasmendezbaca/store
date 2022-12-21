import { heroHome } from "../components/hero_home.js";
import { principalSlider } from "../components/principal_slider.js";
import { baner } from "../components/baner.js";
import { siguenos } from "../components/siguenos.js";
import { novedades } from "../components/novedades.js";
import { getProductsLimit } from "../api/api.js";
import { showLoader } from "../api/helpers.js";
import { hideLoader } from "../api/helpers.js";
import { slider } from "../components/slider.js";

export function home() {
    return new Promise((resolve, reject) => {
        showLoader();
        getProductsLimit(7).then(res => {
            const contenedorPrincipal = document.createElement('div');
            contenedorPrincipal.classList.add('main_home');
            contenedorPrincipal.innerHTML = '';
            contenedorPrincipal.appendChild(heroHome());
            // contenedorPrincipal.appendChild(slider(res));
            // contenedorPrincipal.appendChild(principalSlider(res));
            contenedorPrincipal.appendChild(baner());
            contenedorPrincipal.appendChild(siguenos());
            contenedorPrincipal.appendChild(novedades());

            resolve(contenedorPrincipal.outerHTML);
            hideLoader();
        });
    });
}
