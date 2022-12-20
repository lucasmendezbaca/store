export function siguenos () {
    const siguenos = document.createElement('section');
    siguenos.classList.add('siguenos');
    siguenos.innerHTML = `
        <div class="siguenos__img_container">
            <img class="siguenos__img" src="assets/img/siguenos.webp" alt="imagen de modelos con ropa">
        </div>
        <div class="siguenos__info">
            <h3 class="siguenos__info__titulo">SÍGUENOS</h3>
            <p class="siguenos__info__parrafo">Te esperamos en nuestras redes sociales.<br>Aquí sucede todo. No te lo pierdas.</p>
            <div class="siguenos__info__redes">
                <a href=""><i><img src="assets/img/twitter.svg" alt="icono de twitter"></i></a>
                <a href=""><i><img src="assets/img/youtube.svg" alt="icono de youtube"></i></a>
                <a href=""><i><img src="assets/img/instagram.svg" alt="icono de instagram"></i></a>
                <a href=""><i><img src="assets/img/tiktok.svg" alt="icono de tiktok"></i></a>
            </div>
        </div>
    `;

    return siguenos;
}