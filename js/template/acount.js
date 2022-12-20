import { loginForm } from "../components/login_form.js";
import { registerForm } from "../components/register_form.js";

export function account() {
    const contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.classList.add('main_login');
    contenedorPrincipal.classList.add('container');
    contenedorPrincipal.innerHTML = '';
    contenedorPrincipal.appendChild(loginForm());
    contenedorPrincipal.appendChild(registerForm());

    return contenedorPrincipal.outerHTML;
}