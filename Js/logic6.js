const correctAnswers = {
  masculinoSingular: ['un', 'el'],
  femeninoSingular: ['una', 'la'],
  masculinoPlural: ['unos', 'los'],
  femeninoPlural: ['unas', 'las']
};

let attempts = 3;

document.getElementById("btn-verificar").addEventListener("click", () => {
  const inputMasculinoSingular = document.getElementById("input-masculino-singular");
  const inputFemeninoSingular = document.getElementById("input-femenino-singular");
  const inputMasculinoPlural = document.getElementById("input-masculino-plural");
  const inputFemeninoPlural = document.getElementById("input-femenino-plural");
  const feedbackArticulos = document.getElementById("feedback-articulos");
  const contadorcito = document.getElementById("contadorcito");
  const resultado = document.getElementById("resultado");
  let allCorrect = true;

  const masculinoSingularAnswers = inputMasculinoSingular.value.toLowerCase().split(",").map(answer => answer.trim());
  const femeninoSingularAnswers = inputFemeninoSingular.value.toLowerCase().split(",").map(answer => answer.trim());
  const masculinoPluralAnswers = inputMasculinoPlural.value.toLowerCase().split(",").map(answer => answer.trim());
  const femeninoPluralAnswers = inputFemeninoPlural.value.toLowerCase().split(",").map(answer => answer.trim());

  if (masculinoSingularAnswers.every(answer => correctAnswers.masculinoSingular.includes(answer))) {
    inputMasculinoSingular.classList.remove("incorrect");
  } else {
    allCorrect = false;
    inputMasculinoSingular.classList.add("incorrect");
  }

  if (femeninoSingularAnswers.every(answer => correctAnswers.femeninoSingular.includes(answer))) {
    inputFemeninoSingular.classList.remove("incorrect");
  } else {
    allCorrect = false;
    inputFemeninoSingular.classList.add("incorrect");
  }

  if (masculinoPluralAnswers.every(answer => correctAnswers.masculinoPlural.includes(answer))) {
    inputMasculinoPlural.classList.remove("incorrect");
  } else {
    allCorrect = false;
    inputMasculinoPlural.classList.add("incorrect");
  }

  if (femeninoPluralAnswers.every(answer => correctAnswers.femeninoPlural.includes(answer))) {
    inputFemeninoPlural.classList.remove("incorrect");
  } else {
    allCorrect = false;
    inputFemeninoPlural.classList.add("incorrect");
  }

  if (allCorrect) {
    feedbackArticulos.textContent = "¡Todas las respuestas son correctas!";
    feedbackArticulos.style.color = "green";
    inputMasculinoSingular.disabled = true;
    inputFemeninoSingular.disabled = true;
    inputMasculinoPlural.disabled = true;
    inputFemeninoPlural.disabled = true;
    document.getElementById("btn-verificar").disabled = true;
    resultado.textContent = "¡Felicidades, has pasado la consigna 6!";
    resultado.style.color = "green";
  } else {
    attempts--;
    if (attempts > 0) {
      contadorcito.textContent = `Fallaste, te quedan ${attempts} oportunidades`;
    } else {
      inputMasculinoSingular.disabled = true;
      inputFemeninoSingular.disabled = true;
      inputMasculinoPlural.disabled = true;
      inputFemeninoPlural.disabled = true;
      document.getElementById("btn-verificar").disabled = true;
      resultado.textContent = "¡Perdiste!";
      resultado.style.color = "red";
    }
  }
});

