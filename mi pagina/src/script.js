// Función para mostrar un mensaje de bienvenida y mostrar la hoja de vida
function mostrarHojaDeVida() {
    alert("¡Bienvenido a mi perfil profesional!");
    document.getElementById("inicio").style.display = "none";
    document.getElementById("hojaDeVida").style.display = "flex";
}

// Función para mostrar u ocultar una sección
function mostrarOcultar(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    if (seccion.style.display === "none" || seccion.style.display === "") {
        seccion.style.display = "block";  // Muestra la sección
    } else {
        seccion.style.display = "none";  // Oculta la sección
    }
}

// Función para validar el formulario de contacto
function validarFormulario() {
    let esValido = true;

    // Validación del nombre
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");
    if (nombre === "") {
        errorNombre.textContent = "Por favor, ingresa tu nombre.";
        errorNombre.style.display = "block";
        esValido = false;
    } else {
        errorNombre.style.display = "none";
    }

    // Validación del email
    const email = document.getElementById("email").value.trim();
    const errorEmail = document.getElementById("errorEmail");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
        errorEmail.style.display = "block";
        esValido = false;
    } else if (!emailRegex.test(email)) {
        errorEmail.textContent = "Por favor, ingresa un correo electrónico válido.";
        errorEmail.style.display = "block";
        esValido = false;
    } else {
        errorEmail.style.display = "none";
    }

    // Validación del mensaje
    const mensaje = document.getElementById("mensaje").value.trim();
    const errorMensaje = document.getElementById("errorMensaje");
    if (mensaje === "") {
        errorMensaje.textContent = "Por favor, ingresa un mensaje.";
        errorMensaje.style.display = "block";
        esValido = false;
    } else {
        errorMensaje.style.display = "none";
    }

    return esValido;
}
