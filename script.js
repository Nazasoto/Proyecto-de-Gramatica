//La logica de 1
document.addEventListener("DOMContentLoaded", function() {
    // Array de respuestas correctas
    let respuestasCorrectas = ["el","noche", "yaci", "araí", "nube", "tierra", "mujeres", "belleza", "selva", "senderos", "vegetación", "yaguareté", "horror", "fiera", "paso", "aire", "lugar", "peligro", "arquero", "corazón", "formas", "cielos", "sueño", "nobleza", "regalo", "plantas", "hojas", "infusión", "bebida", "cansado", "débil", "mate", "símbolo", "hermandad", "hombres", "una", "la", "un", "las"];

    // Contador de respuestas correctas
    let respuestasCorrectasContador = 0;

    // Array para almacenar las respuestas dadas por el usuario
    let respuestasDadas = [];

    // Función para verificar la respuesta 1
    function verificarRespuesta1() {
        let respuestaUsuario = document.getElementById("respuesta1").value.toLowerCase();
        let feedback = document.getElementById("feedback1");

        // Verificar si la respuesta ya ha sido dada anteriormente
        if (respuestasDadas.includes(respuestaUsuario)) {
            feedback.textContent = "No puedes repetir respuestas.";
            feedback.classList.add("incorrecta");
            return; // Salir de la función si la respuesta ya ha sido dada anteriormente
        }

        // Verificar si la respuesta del usuario es igual a alguna de las respuestas correctas
        if (respuestasCorrectas.includes(respuestaUsuario)) {
            // Si es correcta, incrementar el contador de respuestas correctas
            respuestasCorrectasContador++;
            // Agregar la respuesta dada al array de respuestas dadas (solo si es correcta)
            respuestasDadas.push(respuestaUsuario);
            // Mostrar mensaje de retroalimentación positiva
            feedback.textContent = "¡Respuesta correcta!";
            feedback.classList.add("correcta");
        } else {
            // Mostrar mensaje de retroalimentación negativa
            feedback.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
            feedback.classList.add("incorrecta");
        }

        // Actualizar mensaje con el contador de respuestas correctas
        let contadorRespuestas = document.getElementById("contadorRespuestas");
        contadorRespuestas.textContent = "Has acertado " + respuestasCorrectasContador + " de " + respuestasCorrectas.length + " respuestas.";
        
        // Cambiar el color del texto del contador a verde si el usuario ha acertado todas las respuestas
        if (respuestasCorrectasContador === respuestasCorrectas.length) {
            contadorRespuestas.classList.add("verde");
            contadorRespuestas.textContent = "¡Haz pasado la primera actividad!";
            // Ocultar el campo de entrada
            document.getElementById("respuesta1").style.display = "none";
            // Ocultar el botón de verificar respuesta
            document.getElementById("verificar1").style.display = "none";
        }
    }

    // Agregar evento al botón de verificar respuesta 1
    document.getElementById("verificar1").addEventListener("click", verificarRespuesta1);
});





