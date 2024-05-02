document.addEventListener("DOMContentLoaded", function() {
    const respuestaInput = document.getElementById('respuesta4');
    const verificarButton = document.getElementById('verificar4');
    const feedback = document.getElementById('feedback4');
    const contadorOportunidades = document.getElementById('contadorOportunidades4');
    const mensajePerdiste = document.getElementById('mensajePerdiste4');

    const respuestaCorrecta = ['sueños', 'hojas', 'noche', 'sueño', 'nobleza', 'regalo', 'planta', 'infusión'];
    let oportunidadesRestantes = 6; // Inicialmente, 6 oportunidades
    let palabrasRestantes = respuestaCorrecta.length; // Inicialmente, todas las palabras son necesarias
    const palabrasIngresadas = new Set(); // Conjunto para rastrear palabras ingresadas por el usuario

    // Mostrar el contador de palabras restantes al inicio del juego
    contadorOportunidades.textContent = `Oportunidades restantes: ${oportunidadesRestantes}`;
    actualizarContadorPalabras();

    verificarButton.addEventListener('click', function() {
        const respuesta = respuestaInput.value.trim().toLowerCase();
        const respuestasUsuario = respuesta.split(',').map(item => item.trim()); // Eliminar espacios adicionales
        let palabrasCorrectasContador = 0;

        respuestasUsuario.forEach(respuestaUsuario => {
            if (palabrasIngresadas.has(respuestaUsuario)) { // Comprobar si la palabra ya ha sido ingresada
                feedback.textContent = `¡"${respuestaUsuario}" ya fue ingresada! No puedes repetir palabras.`;
                return; // Salir de la función si se encuentra una repetición
            }

            if (respuestaCorrecta.includes(respuestaUsuario)) {
                palabrasCorrectasContador++;
                palabrasRestantes--;
                palabrasIngresadas.add(respuestaUsuario); // Agregar la palabra al conjunto de palabras ingresadas
            }
        });

        if (palabrasCorrectasContador === 0) {
            oportunidadesRestantes--;
        }

        if (palabrasRestantes === 0) { // Todas las palabras han sido acertadas
            feedback.textContent = '¡Todas las respuestas son correctas!';
            feedback.classList.add('texto-verde');
            verificarButton.disabled = true;
        } else if (palabrasCorrectasContador > 0) {
            feedback.textContent = `Respuesta correcta. Palabras restantes: ${palabrasRestantes}.`;
        } else {
            feedback.textContent = `Palabra repetida. Palabras restantes: ${palabrasRestantes}.`;
        }

        contadorOportunidades.textContent = `Oportunidades restantes: ${oportunidadesRestantes}`;

        if (oportunidadesRestantes === 0) {
            mensajePerdiste.textContent = '¡Perdiste! Se acabaron las oportunidades.';
            mensajePerdiste.classList.add('texto-rojo');
            verificarButton.disabled = true;
        }
    });

    function actualizarContadorPalabras() {
        contadorOportunidades.textContent = `Palabras restantes: ${palabrasRestantes}`;
    }
});


