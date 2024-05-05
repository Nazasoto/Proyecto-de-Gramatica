// Palabras que deben aparecer obligatoriamente
const palabrasObligatorias = ["YAGUARETE", "NOCHE", "LUNA", "MUJERES", "BELLEZA"];
let respuestasCorrectas = 0;
let juegoBloqueado = false;
let palabrasIngresadas = []; 

// Función para generar sopa de letras y marcar sustantivos correctos
function generarSopaLetras(palabrasObligatorias) {
    const sopaLetras = document.getElementById("sopa-letras");
    const filas = 10;
    const columnas = 10;

    // Generar matriz para la sopa de letras
    const matriz = new Array(filas);
    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas).fill('');
    }

    // Colocar palabras obligatorias en la sopa de letras
    palabrasObligatorias.forEach((palabra, index) => {
        const direccion = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        let filaInicial, columnaInicial;

        // Calcular posición inicial para la palabra
        if (direccion === 'horizontal') {
            filaInicial = Math.floor(Math.random() * filas);
            columnaInicial = Math.floor(Math.random() * (columnas - palabra.length + 1));
        } else {
            filaInicial = Math.floor(Math.random() * (filas - palabra.length + 1));
            columnaInicial = Math.floor(Math.random() * columnas);
        }

        // Verificar si hay espacio para colocar la palabra
        let espacioSuficiente = true;
        for (let i = 0; i < palabra.length; i++) {
            const fila = direccion === 'horizontal' ? filaInicial : filaInicial + i;
            const columna = direccion === 'vertical' ? columnaInicial : columnaInicial + i;
            if (matriz[fila][columna] !== '' && matriz[fila][columna] !== palabra.charAt(i)) {
                espacioSuficiente = false;
                break;
            }
        }

        // Colocar la palabra si hay espacio suficiente
        if (espacioSuficiente) {
            for (let i = 0; i < palabra.length; i++) {
                const fila = direccion === 'horizontal' ? filaInicial : filaInicial + i;
                const columna = direccion === 'vertical' ? columnaInicial : columnaInicial + i;
                matriz[fila][columna] = palabra.charAt(i);
            }
        } else {
            // Si no hay espacio, intentar con otra palabra
            palabrasObligatorias.splice(index, 1);
        }
    });

    // Rellenar la sopa de letras con letras aleatorias
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (matriz[i][j] === '') {
                matriz[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Letra aleatoria
            }
            const letra = document.createElement("div");
            letra.className = "letra";
            letra.textContent = matriz[i][j];
            letra.dataset.palabra = palabrasObligatorias.find(palabra => palabra.includes(matriz[i][j])) || '';
            sopaLetras.appendChild(letra);
        }
    }
}

// Función para verificar y marcar sustantivos
function verificarSustantivo() {
    if (juegoBloqueado) return;

    const input = document.getElementById("sustantivo");
    const palabra = input.value.toUpperCase();

    if (palabrasIngresadas.includes(palabra)) {
        const mensajeRepetido = document.getElementById("mensaje-repetido");
        mensajeRepetido.textContent = "Ya pusiste esta palabra. Por favor, busca una nueva -.-)/";
        mensajeRepetido.style.color = "red";
        input.value = "";
        return;
    }

    if (palabrasObligatorias.includes(palabra)) {
        resaltarPalabraCompleta(palabra);
        palabrasIngresadas.push(palabra);
        respuestasCorrectas++;
        actualizarContador();

        if (respuestasCorrectas === palabrasObligatorias.length) {
            mostrarMensajeVictoria();
            juegoBloqueado = true;
        }
    }

    input.value = "";
    const mensajeRepetido = document.getElementById("mensaje-repetido");
    mensajeRepetido.textContent = "";
}

// Función para resaltar la palabra completa en verde
function resaltarPalabraCompleta(palabra) {
    const respuestasCorrectasList = document.getElementById("respuestas-correctas");
    const item = document.createElement("li");
    item.textContent = palabra;
    respuestasCorrectasList.appendChild(item);
}

// Función para actualizar el contador de respuestas
function actualizarContador() {
    const contador = document.getElementById("contador-respuestas");
    const faltantes = palabrasObligatorias.length - respuestasCorrectas;
    contador.textContent = `Faltan ${faltantes} palabras.`;
}

// Función para mostrar el mensaje de victoria
function mostrarMensajeVictoria() {
    const mensajeVictoria = document.getElementById("mensaje-victoria");
    mensajeVictoria.textContent = "¡Todas las respuestas son correctas, has superado la quinta consigna!";
    mensajeVictoria.style.color = "green";
}

// Generar sopa de letras al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    // Generar sopa de letras
    generarSopaLetras(palabrasObligatorias);

    // Agregar evento al botón de verificar (asumiendo que hay un botón con id="verificar")
    document.getElementById("verificar").addEventListener("click", verificarSustantivo);

    // Inicializar el contador de respuestas
    actualizarContador();
});