document.addEventListener("DOMContentLoaded", function() {
    const palabras = document.querySelectorAll('.palabra');
    const categorias = document.querySelectorAll('.categoria');
    const botonReset = document.getElementById('reset');

    let palabraSeleccionada = null;
    let juegoBloqueado = false; // Variable para rastrear si el juego está bloqueado

    palabras.forEach(palabra => {
        palabra.addEventListener('dragstart', dragStart);
        palabra.addEventListener('dragend', dragEnd);
    });

    categorias.forEach(categoria => {
        categoria.addEventListener('dragover', dragOver);
        categoria.addEventListener('dragenter', dragEnter);
        categoria.addEventListener('dragleave', dragLeave);
        categoria.addEventListener('drop', dragDrop);
    });

    function dragStart() {
        if (!juegoBloqueado) { // Verificar si el juego no está bloqueado
            palabraSeleccionada = this;
            setTimeout(() => this.style.display = 'none', 0);
        }
    }

    function dragEnd() {
        palabraSeleccionada = null;
        setTimeout(() => this.style.display = 'block', 0);
        verificarResultado();
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('hovered');
    }

    function dragLeave() {
        this.classList.remove('hovered');
    }

    function dragDrop() {
        if (!juegoBloqueado) { // Verificar si el juego no está bloqueado
            this.classList.remove('hovered');
            this.appendChild(palabraSeleccionada);
            verificarResultado();
        }
    }

    function verificarResultado() {
        const palabrasConcreto = document.querySelectorAll('#concreto .palabra');
        const palabrasAbstracto = document.querySelectorAll('#abstracto .palabra');
    
        let concretoCorrecto = true;
        palabrasConcreto.forEach(palabra => {
            if (!palabra.id.startsWith('concreto')) {
                concretoCorrecto = false;
            }
        });
    
        let abstractoCorrecto = true;
        palabrasAbstracto.forEach(palabra => {
            if (!palabra.id.startsWith('abstracto')) {
                abstractoCorrecto = false;
            }
        });
    
        if (concretoCorrecto && abstractoCorrecto) {
            document.getElementById('mensajito').textContent = '¡Felicidades! Has completado la actividad correctamente.';
            juegoBloqueado = true; // Bloquear el juego una vez completado correctamente
        } else {
            document.getElementById('mensajito').textContent = ''; // Limpiar el mensaje si hay un cambio
            document.getElementById('mensajitoM').textContent = 'Hmm, parece que algo está mal. Revisa tus respuestas.';
        }
    }
    

    // Función para reiniciar el juego
    botonReset.addEventListener('click', function() {
        palabras.forEach(palabra => palabra.style.display = 'block');
        document.querySelectorAll('.categoria').forEach(categoria => categoria.innerHTML = '');
        juegoBloqueado = false; // Desbloquear el juego al reiniciarlo
        document.getElementById('mensajito').textContent = ''; // Limpiar el mensaje
        document.getElementById('mensajitoM').textContent = ''; // Limpiar el mensaje de error
    });
});
