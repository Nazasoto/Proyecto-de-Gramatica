document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("checkButton");
    const wordInputs = document.querySelectorAll("input[data-answer]");
    const resultContainer = document.getElementById("result");
  
    const expectedAnswers = {
      "Noche": "concreto",
      "Horror": "abstracto",
      "Peligro": "abstracto",
      "Tierra": "concreto",
      "Luna": "concreto",
      "Nube": "concreto"
    };
  
    const MAX_ATTEMPTS = 3;
    let remainingAttempts = MAX_ATTEMPTS;
  
    checkButton.addEventListener("click", function() {
      let correctAnswers = 0;
      let incorrectAnswers = 0;
  
      wordInputs.forEach(input => {
        const word = input.parentNode.querySelector("span").textContent;
        const expectedAnswer = expectedAnswers[word];
        const userAnswer = input.value.toLowerCase().trim();
  
        if (userAnswer === expectedAnswer) {
          input.classList.add("correct");
          correctAnswers++;
        } else {
          input.classList.add("incorrect");
          incorrectAnswers++;
        }
      });
  
      if (incorrectAnswers === 0) {
        resultContainer.textContent = "¡Todas las respuestas son correctas, has superado la tercera consigna!";
        disableGame(); // Bloquear el juego si el usuario gana
      } else {
        remainingAttempts--;
        const attemptsMessage = document.getElementById("remainingAttempts");
        attemptsMessage.textContent = `Te quedan ${remainingAttempts} oportunidades. ¡Dale que podés!`;
  
        if (remainingAttempts === 0) {
          resultContainer.textContent = "Se acabaron tus oportunidades. Perdiste :/";
          disableGame(); // Bloquear el juego si el usuario pierde
        } else {
          resultContainer.textContent = `Respuestas incorrectas: ${incorrectAnswers}. Inténtalo de nuevo.`;
        }
      }
    });
  
    function disableGame() {
      wordInputs.forEach(input => {
        input.disabled = true; // Deshabilitar los inputs
      });
      checkButton.disabled = true; // Deshabilitar el botón de verificación
    }
  });