export function loginForm() {
    const form = document.createElement('div');
    form.classList.add('main_login__login');
    form.innerHTML = `
        <h2>INICIAR SESIÓN</h2>

        <form class="form">
            <div class="form__input_div">
                <label for="email_login">Email</label>
                <input type="email" name="email_login" id="email_login" patther="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/" required>
            </div>
            <div class="form__input_div">
                <label for="password_login">Contraseña</label>
                <input type="password" name="password_login" id="password_login" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Debe contener al menos un número y una mayúscula y minúscula, y al menos 8 o más caracteres" required>
            </div>
            <input type="submit" value="INICIAR SESIÓN">
        </form>
    `;

    return form;
}


