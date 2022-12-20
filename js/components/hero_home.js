export function heroHome() {
    const hero = document.createElement('div');
    hero.classList.add('hero');
    hero.innerHTML = '<img src="assets/img/hero.webp" alt="hero con ropa de navidad">';
    
    return hero;
}