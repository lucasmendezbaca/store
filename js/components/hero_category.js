export function heroCategory(name) {
    const hero = document.createElement('div');
    hero.classList.add('hero_categoria');
    hero.classList.add('container');
    hero.innerHTML = `
        <h1 class="titulo_pagina">${name}</h1>
        <div class="categoria_filtros">
            <button class="filtro_layout button--fino">Ver 2</button>
            <button class="filtro_ordenar button--fino">Filtrar</button>
        </div>

        <div class="orden_container">
            <div id="cerrar_filtros">
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <button id="filtrar_asc">Ascendente</button>
            <button id="filtrar_desc">Descendente</button>
        </div>
    `;

    return hero;
}


