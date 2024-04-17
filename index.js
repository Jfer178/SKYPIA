document.addEventListener('DOMContentLoaded', function () {
    const eyeIcon = document.querySelector('.fa-eye');
    const passwordInput = document.getElementById('password');

    eyeIcon.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'; // Mostrar la contraseña
            eyeIcon.classList.add('active'); // Agregar la clase 'active' al icono del ojo
        } else {
            passwordInput.type = 'password'; // Ocultar la contraseña
            eyeIcon.classList.remove('active'); // Quitar la clase 'active' del icono del ojo
        }
    });
});