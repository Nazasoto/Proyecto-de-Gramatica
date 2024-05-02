document.addEventListener("DOMContentLoaded", function() {
    const verifyButton = document.getElementById("verifyButton");
    const resultContainer = document.getElementById("resultContainer");
    const attemptsMessage = document.getElementById("remainingAttempts6");
  
    const expectedAnswers = ["el", "un", "el", "una", "un", "la"];
    const MAX_ATTEMPTS = 3;
    let remainingAttemptsGame = MAX_ATTEMPTS;
  
    verifyButton.addEventListener("click", function() {
      let correctAnswers = 0;
      let incorrectAnswers = 0;
  
      for (let i = 0; i < expectedAnswers.length; i++) {
        const userAnswer = document.getElementById(`respuesta${i + 1}`).innerText.trim().toLowerCase();
  
        if (userAnswer === expectedAnswers[i]) {
          document.getElementById(`respuesta${i + 1}`).classList.add("correct");
          correctAnswers++;
        } else {
          document.getElementById(`respuesta${i + 1}`).classList.add("incorrect");
          incorrectAnswers++;
        }
      }
  
      if (incorrectAnswers === 0) {
        resultContainer.textContent = "¡Todas las respuestas son correctas, has superado la sexta consigna!";
        disableGame();
      } else {
        remainingAttemptsGame--;
        attemptsMessage.textContent = `Te quedan ${remainingAttemptsGame} oportunidades.`;
  
        if (remainingAttemptsGame === 0) {
          resultContainer.textContent = "Se acabaron tus oportunidades. Perdiste.";
          disableGame();
        } else {
          resultContainer.textContent = `Respuestas incorrectas: ${incorrectAnswers}. Inténtalo de nuevo.`;
        }
      }
    });
  
    function disableGame() {
      const spans = document.querySelectorAll(".placeholder");
      spans.forEach(span => {
        span.contentEditable = false;
      });
      verifyButton.disabled = true;
    }
  });
  