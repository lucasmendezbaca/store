export function loginForm() {
    const form = document.createElement('div');
    form.classList.add('main_login__login');
    form.innerHTML = `
        <h2>INICIAR SESIÓN</h2>

        <div class="form">
            <div class="form__input_div">
                <label for="email_login">Email</label>
                <input type="email" name="email_login" id="email_login">
            </div>
            <div class="form__input_div">
                <label for="password_login">Contraseña</label>
                <input type="password" name="password_login" id="password_login">
            </div>
            <button id="login">INICIAR SESIÓN</button>
        </div>
    `;

    return form;
}


