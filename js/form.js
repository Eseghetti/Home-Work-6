document.addEventListener('DOMContentLoaded', () => {
    const completar1 = document.getElementById('completar1');
    const completar2 = document.getElementById('completar2');

    completar1.addEventListener('click', () => {
        procesarDatos('form1');
        verificarCoincidencias();
    });
    completar2.addEventListener('click', () => {
        procesarDatos('form2');
        verificarCoincidencias();
    });
});

function procesarDatos(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[type="text"]');
    let nombreCompleto = [];

    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            nombreCompleto.push(input.value.trim().toUpperCase());
        }
    });

    console.log(`Integrante ${formId === 'form1' ? 1 : 2}: "${nombreCompleto.join(' ')}"`);
}

function verificarCoincidencias() {
    const nombresForm1 = obtenerNombres('form1');
    const nombresForm2 = obtenerNombres('form2');
    let coincidencias = [];

    nombresForm1.forEach(nombre1 => {
        if (nombresForm2.includes(nombre1)) {
            coincidencias.push(nombre1);
        }
    });

    if (coincidencias.length > 0) {
        console.log('Hay coincidencias');
        let color = prompt('Hay coincidencias. Por favor ingrese un color para destacar:');
        resaltarCoincidencias(coincidencias, color);
    } else {
        console.log('No hay coincidencias');
    }
}

function obtenerNombres(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[type="text"]:nth-child(-n+2)');
    let nombres = [];

    for (let i = 0; i < inputs.length; i++) {
        let valor = inputs[i].value.trim().toUpperCase();
        if (valor !== '') {
            nombres.push(valor);
        }
    }

    return nombres;
}

function resaltarCoincidencias(coincidencias, color) {
    const todosLosInputs = document.querySelectorAll('input[type="text"]:nth-child(-n+2)');
    todosLosInputs.forEach(input => {
        if (coincidencias.includes(input.value.trim().toUpperCase())) {
            input.style.color = color;
        }
    });
}
