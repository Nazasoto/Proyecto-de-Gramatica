document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("checkButton");
    const wordInputs = document.querySelectorAll("input[data-answer]");
    const resultContainer = document.getElementById("result");

    checkButton.addEventListener("click", function() {
        let correctAnswers = 0;
        let incorrectAnswers = 0;

        // Verificar si se han proporcionado respuestas
        let answeredAll = true;
        wordInputs.forEach(input => {
            if (!input.value.trim()) {
                answeredAll = false;
            }
        });

        if (!answeredAll) {
            resultContainer.textContent = "Por favor, responde todas las preguntas.";
            return; // Salir de la función si no se han proporcionado todas las respuestas
        }

        wordInputs.forEach(input => {
            const expectedAnswer = input.dataset.answer;
            const userAnswer = input.value.toLowerCase().trim();

            if (userAnswer === expectedAnswer) {
                input.classList.add("correct");
                correctAnswers++;
            } else {
                input.classList.add("incorrect");
                incorrectAnswers++;
            }
        });

        if (incorrectAnswers >= 3) {
            resultContainer.textContent = "Perdiste";
            // Bloquear el juego si el usuario pierde
            disableGame();
        } else {
            resultContainer.textContent = "¡Felicidades, respondiste todo bien!";
            // Bloquear el juego si el usuario gana
            disableGame();
        }
    });

    // Función para bloquear el juego
    function disableGame() {
        wordInputs.forEach(input => {
            input.disabled = true; // Deshabilitar los inputs
        });
        checkButton.disabled = true; // Deshabilitar el botón de verificación
    }
});

