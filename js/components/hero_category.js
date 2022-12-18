export function heroCategory(name) {
    const hero = document.createElement('div');
    hero.classList.add('hero_categoria');
    hero.classList.add('container');
    hero.innerHTML = `
        <h1 class="titulo_pagina">${name}</h1>
        <div class="categoria_filtros">
            <button class="filtro_layout">Ver 2</button>
            <button class="filtro_ordenar">Filtrar</button>
        </div>
    `;

    return hero;
}
