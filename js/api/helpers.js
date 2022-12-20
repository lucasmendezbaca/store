export function isRegister(users, email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    return user;
}

export function showLoader() {
    const loader = document.querySelector('.loader_container');
    const body = document.querySelector('body');

    loader.style.display = 'flex';
    body.classList.add('no_scroll');
}

export function hideLoader() {
    const loader = document.querySelector('.loader_container');
    const body = document.querySelector('body');

    loader.style.display = 'none';
    body.classList.remove('no_scroll');
}