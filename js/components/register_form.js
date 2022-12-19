export function registerForm() {
    const form = document.createElement('div');
    form.classList.add('main_login__register');
    form.innerHTML = `
        <h2>REGISTRARSE</h2>

        <form id="form" class="form">
            <div class="form__input_div">
                <label for="name_register">Nombre</label>
                <input type="text" name="name_register" id="name_register">
            </div>

            <div class="form__input_div">
                <label for="email_register">Email</label>
                <input type="email" name="email_register" id="email_register">
            </div>

            <div class="form__input_div">
                <label for="tel_register">Teléfono</label>
                <input type="tel" name="tel_register" id="tel_register">
            </div>

            <div class="form__input_div">
                <label for="password_register">Contraseña</label>
                <input type="password" name="password_register" id="password_register">
            </div>

            <div class="form__input_div">
                <label for="password_register_comfirm">Confirma la contraseña</label>
                <input type="password" name="password_register_comfirm" id="password_register_comfirm">
            </div>
            <input type="submit" value="Enviar" id="button">
        </form>
    `;

    return form;
}
