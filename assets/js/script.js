document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
            alert("Por favor, complete todos los campos del formulario.");
            return;
        }

        // Aquí puedes agregar código para enviar el formulario, por ejemplo, mediante una solicitud AJAX.
        // Ejemplo:
        /*
        fetch("enviar.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                email: email,
                mensaje: mensaje
            })
        })
        .then(response => {
            if (response.ok) {
                alert("¡Formulario enviado con éxito!");
                form.reset();
            } else {
                alert("Error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.");
        });
        */

        // Por simplicidad, solo mostramos una alerta indicando que el formulario se enviaría correctamente.
        alert("¡Formulario enviado con éxito!");
        form.reset();
    });
});