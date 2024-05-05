document.getElementById("verify-btn").addEventListener("click", () => {
    const answer1 = document.getElementById("answer1").value.trim().toLowerCase();
    const answer2 = document.getElementById("answer2").value.trim().toLowerCase();
    const answer3 = document.getElementById("answer3").value.trim().toLowerCase();
    const answer4 = document.getElementById("answer4").value.trim().toLowerCase();
  
    const correctAnswers = {
      character1: "viejo",
      character2: "araí",
      character3: "yací",
      character4: "yaguareté"
    };
  
    if (answer1 === correctAnswers.character1 &&
        answer2 === correctAnswers.character2 &&
        answer3 === correctAnswers.character3 &&
        answer4 === correctAnswers.character4) {
      document.getElementById("verification-result").textContent = "¡Todas las respuestas son correctas!";
      document.getElementById("verification-result").style.color = "green";
      // Bloquear inputs y botón
      document.getElementById("answer1").disabled = true;
      document.getElementById("answer2").disabled = true;
      document.getElementById("answer3").disabled = true;
      document.getElementById("answer4").disabled = true;
      document.getElementById("verify-btn").disabled = true;
    } else {
      document.getElementById("verification-result").textContent = "Alguna respuesta es incorrecta. Inténtalo de nuevo.";
      document.getElementById("verification-result").style.color = "red";
    }
});
