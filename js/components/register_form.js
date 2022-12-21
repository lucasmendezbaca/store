export function registerForm() {
    const form = document.createElement('div');
    form.classList.add('main_login__register');
    form.innerHTML = `
        <h2>REGISTRARSE</h2>

        <form id="form" class="form">
            <div class="form__input_div">
                <label for="name_register">Nombre</label>
                <input type="text" name="name_register" id="name_register" pattern="[A-Za-z]{1,15}" required>
            </div>

            <div class="form__input_div">
                <label for="email_register">Email</label>
                <input type="email" name="email_register" id="email_register" patther="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/" required>
            </div>

            <div class="form__input_div">
                <label for="tel_register">Teléfono</label>
                <input type="tel" name="tel_register" id="tel_register" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
            </div>

            <div class="form__input_div">
                <label for="password_register">Contraseña</label>
                <input type="password" name="password_register" id="password_register" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Debe contener al menos un número y una mayúscula y minúscula, y al menos 8 o más caracteres" required>
            </div>

            <div class="form__input_div">
                <label for="password_register_comfirm">Confirma la contraseña</label>
                <input type="password" name="password_register_confirm" id="password_register_confirm" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Debe contener al menos un número y una mayúscula y minúscula, y al menos 8 o más caracteres" required>
            </div>
            <input class="button" type="submit" value="REGISTRARSE" id="button">
        </form>
    `;

    return form;
}
