
document.addEventListener("DOMContentLoaded", function() {
    // Array de respuestas correctas para sustantivos comunes y propios
    let respuestasComunesCorrectas2 = ["noche", "luna", "tierra", "mujeres", "belleza", "selva", "senderos", "vegetación", "yaguareté", "salto", "horror", "fiera", "paso", "aire", "costado", "viejo", "lugar", "peligro", "arquero", "corazón", "formas", "cielo", "sueño", "nobleza", "regalo", "planta", "hojas", "infusión", "bebida", "cansado", "débil", "mate", "símbolo", "hermandad", "hombres"];
    let respuestasPropiosCorrectas2 = ["yaci", "araí"];

    // Contadores de respuestas correctas para sustantivos comunes y propios
    let respuestasComunesCorrectasContador2 = 0;
    let respuestasPropiosCorrectasContador2 = 0;

    // Función para normalizar las respuestas del usuario
    function normalizarRespuestas(respuestas) {
        return respuestas.map(respuesta => respuesta.toLowerCase().trim());
    }

    // Función para verificar las respuestas
    function verificarRespuestas() {
        // Obtener las respuestas del usuario
        let respuestasComunesUsuario2 = normalizarRespuestas(document.getElementById("respuestaComunes").value.split(","));
        let respuestasPropiosUsuario2 = normalizarRespuestas(document.getElementById("respuestaPropios").value.split(","));

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
            document.getElementById("respuestaCorrecta2").style.display = "block";

            // Ocultar los labels y el botón de verificar
            document.getElementById("labelComunes").style.display = "none";
            document.getElementById("labelPropios").style.display = "none";
            document.getElementById("verificar2").style.display = "none";

            // Mostrar mensaje de aprobación en verde
            let mensajeAprobado = document.getElementById("aprobado2");
            mensajeAprobado.textContent = "¡Todas las respuestas son correctas, has superado la primera consigna!";
            mensajeAprobado.style.color = "green";
        }
    }

    // Función para mostrar feedback al usuario
    function mostrarFeedback() {
        let feedback = "";
        if (respuestasComunesCorrectasContador2 === respuestasComunesCorrectas2.length && respuestasPropiosCorrectasContador2 === respuestasPropiosCorrectas2.length) {
            feedback = "¡Respuesta correcta!";
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