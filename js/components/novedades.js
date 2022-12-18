export function novedades () {
    const novedades = document.createElement('section');
    novedades.classList.add('novedades');
    novedades.innerHTML = `
        <h3 class="novedades__titulo">Recibe nuestras novedades</h3>
        <p class="novedades__parrafo">Suscríbete a nuestra Newsletter y consigue un -10% en tu próxima compra. Disfruta de descuentos y novedades exclusivas.</p>
        <input class="input" type="text" name="email_novedades" id="email_novedades" placeholder="Intruduce aquí tu email">
    `;

    return novedades;
}