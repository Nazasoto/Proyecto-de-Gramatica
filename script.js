//La logica de 1
document.addEventListener("DOMContentLoaded", function() {
    // Array de respuestas correctas
    let respuestasCorrectas = ["el"];

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
            contadorRespuestas.textContent = "Has pasado la primera actividad";
            // Ocultar el campo de entrada
            document.getElementById("respuesta1").style.display = "none";
            // Ocultar el botón de verificar respuesta
            document.getElementById("verificar1").style.display = "none";
        }
    }

    // Agregar evento al botón de verificar respuesta 1
    document.getElementById("verificar1").addEventListener("click", verificarRespuesta1);
});

//la logica 2


document.addEventListener("DOMContentLoaded", function() {
    // Array de respuestas correctas para sustantivos comunes y propios
    let respuestasComunesCorrectas2 = ["noche"];
    let respuestasPropiosCorrectas2 = ["ya"];

    // Contadores de respuestas correctas para sustantivos comunes y propios
    let respuestasComunesCorrectasContador2 = 0;
    let respuestasPropiosCorrectasContador2 = 0;

    // Función para verificar las respuestas
    function verificarRespuestas() {
        // Obtener las respuestas del usuario
        let respuestasComunesUsuario2 = document.getElementById("respuestaComunes").value.toLowerCase().split(", ");
        let respuestasPropiosUsuario2 = document.getElementById("respuestaPropios").value.toLowerCase().split(", ");

        // Reiniciar contadores
        respuestasComunesCorrectasContador2 = 0;
        respuestasPropiosCorrectasContador2 = 0;

        // Verificar las respuestas para sustantivos comunes
        respuestasComunesUsuario2.forEach(respuesta => {
            if (respuestasComunesCorrectas2.includes(respuesta)) {
                respuestasComunesCorrectasContador2++;
            }
        });

        // Verificar las respuestas para sustantivos propios
        respuestasPropiosUsuario2.forEach(respuesta => {
            if (respuestasPropiosCorrectas2.includes(respuesta)) {
                respuestasPropiosCorrectasContador2++;
            }
        });

        // Proporcionar retroalimentación al usuario
        mostrarFeedback();

        // Verificar si todas las respuestas son correctas
        if (respuestasComunesCorrectasContador2 === respuestasComunesCorrectas2.length && respuestasPropiosCorrectasContador2 === respuestasPropiosCorrectas2.length) {
            // Deshabilitar el input y el botón de verificar
            document.getElementById("respuestaComunes").disabled = true;
            document.getElementById("respuestaPropios").disabled = true;
            document.getElementById("verificar2").disabled = true;

            // Reemplazar el input por un mensaje de "Respuesta correcta"
            document.getElementById("respuestaComunes").style.display = "none";
            document.getElementById("respuestaPropios").style.display = "none";
            document.getElementById("respuestaCorrecta2").textContent = "Respuesta correcta";
            document.getElementById("respuestaCorrecta2").style.display = "block";

            // Ocultar los labels y el botón de verificar
            document.getElementById("labelComunes").style.display = "none";
            document.getElementById("labelPropios").style.display = "none";
            document.getElementById("verificar2").style.display = "none";

            // Mostrar mensaje de aprobación en verde
            let mensajeAprobado = document.getElementById("aprobado2");
            mensajeAprobado.textContent = "¡Has aprobado esta parte!";
            mensajeAprobado.style.color = "green";
        }
    }

    // Función para mostrar feedback al usuario
    function mostrarFeedback() {
        let feedback = "";
        if (respuestasComunesCorrectasContador2 === respuestasComunesCorrectas2.length && respuestasPropiosCorrectasContador2 === respuestasPropiosCorrectas2.length) {
            feedback = "¡Todas tus respuestas son correctas!";
        } else {
            feedback = "Algunas de tus respuestas son incorrectas. Revisa y vuelve a intentarlo.";
        }
        mostrarContadorRespuestas();
        document.getElementById("feedback2").textContent = feedback;
    }

    // Función para mostrar el contador de respuestas correctas
    function mostrarContadorRespuestas() {
        let contadorRespuesta = document.getElementById("contadorRespuesta");
        contadorRespuesta.textContent = "Comunes: " + respuestasComunesCorrectasContador2 + " de " + respuestasComunesCorrectas2.length + " | Propios: " + respuestasPropiosCorrectasContador2 + " de " + respuestasPropiosCorrectas2.length;
    }

    // Agregar evento al botón de verificar respuestas
    document.getElementById("verificar2").addEventListener("click", verificarRespuestas);
});
