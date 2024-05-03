const comentariosContainer = document.getElementById("lista-comentarios");

document.getElementById("enviar-btn").addEventListener("click", () => {
  const respuestaInput = document.getElementById("respuesta-input");
  const respuestaUsuario = respuestaInput.value.trim();

  if (respuestaUsuario === "") {
    mostrarFeedback("Primero debes escribir algo", "red");
    return;
  }

  const respuestasRandom = [
    "¡Gracias por tu opinión!",
    "¡Gracias por animarte y compartir tus pensamientos con nosotros!",
    "¡Gracias, en este espacio valoramos tu opinión!",
    "Interesante punto de vista..."
  ];
  const indiceRandom = Math.floor(Math.random() * respuestasRandom.length);
  const feedback = respuestasRandom[indiceRandom];

  mostrarFeedback(feedback, "green");

  const nuevoComentario = document.createElement("div");
  nuevoComentario.textContent = respuestaUsuario;
  comentariosContainer.appendChild(nuevoComentario);

  respuestaInput.value = "";
  guardarComentarios();
});

function mostrarFeedback(mensaje, color) {
  const feedbackElemento = document.createElement("p");
  feedbackElemento.textContent = mensaje;
  feedbackElemento.style.color = color;
  comentariosContainer.appendChild(feedbackElemento);
}

function guardarComentarios() {
  localStorage.setItem("comentarios", comentariosContainer.innerHTML);
}

function cargarComentarios() {
  const comentariosGuardados = localStorage.getItem("comentarios");
  if (comentariosGuardados) {
    comentariosContainer.innerHTML = comentariosGuardados;
  }
}

window.addEventListener("load", cargarComentarios);
