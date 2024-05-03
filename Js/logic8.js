const commentsContainer = document.getElementById("comments-list");

document.getElementById("submit-btn").addEventListener("click", () => {
  const answerInput = document.getElementById("answer-input");
  const userAnswer = answerInput.value.trim();

  if (userAnswer === "") {
    showFeedback("primero debes escribir algo", "red");
    return;
  }

  const randomFeedback = [
    "¡Gracias por tú opinión!",
    "¡Gracias por animarte y compartir tus pensamientos con nosotros!",
    "¡Gracias, en este espacio valoramos tú opinión!",
    "Interesante punto de vista..."
  ];
  const randomIndex = Math.floor(Math.random() * randomFeedback.length);
  const feedback = randomFeedback[randomIndex];

  showFeedback(feedback, "green");

  const newComment = document.createElement("div");
  newComment.textContent = userAnswer;
  commentsContainer.appendChild(newComment);

  answerInput.value = "";
  saveComments();
});

function showFeedback(message, color) {
  const feedbackElement = document.createElement("p");
  feedbackElement.textContent = message;
  feedbackElement.style.color = color;
  commentsContainer.appendChild(feedbackElement);
}

function saveComments() {
  localStorage.setItem("comments", commentsContainer.innerHTML);
}

function loadComments() {
  const savedComments = localStorage.getItem("comments");
  if (savedComments) {
    commentsContainer.innerHTML = savedComments;
  }
}

window.addEventListener("load", loadComments);

