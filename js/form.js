const integrantes = [];

window.addEventListener('DOMContentLoaded', function () {
    const integrantesForm = document.getElementById('integrantesForm');

    integrantesForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página

        const primerNombre = document.getElementById('primerNombre').value;
        const segundoNombre = document.getElementById('segundoNombre').value;
        const primerApellido = document.getElementById('primerApellido').value;
        const segundoApellido = document.getElementById('segundoApellido').value;

        const nuevoIntegrante = {
            primerNombre: capitalizarPrimeraLetra(primerNombre),
            segundoNombre: capitalizarPrimeraLetra(segundoNombre),
            primerApellido: primerApellido.toUpperCase(),
            segundoApellido: segundoApellido.toUpperCase()
        };

        integrantes.push(nuevoIntegrante);

        // Muestra información de todos los integrantes
        mostrarInformacion(integrantes);

        // Compara nombres y resalta repetidos
        const nombresRepetidos = compararNombres(integrantes);
        if (nombresRepetidos.length > 0) {
            console.log("Se repiten nombres");
            const color = prompt("Se repiten nombres, ingrese un color para destacarlos");
            resaltarRepetidos(nombresRepetidos, color);
        }

        // Reinicia el formulario
        event.target.reset();
    });

    function capitalizarPrimeraLetra(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    function NombreExiste(valor) {
        if (valor) {
            return " " + valor;
        } else {
            return "";
        }
    }

    function compararNombres(integrantes) {
        const listaNombres = [];
        const nombresRepetidos = [];

        for (let i = 0; i < integrantes.length; i++) {
            listaNombres.push(
                integrantes[i].primerNombre,
                integrantes[i].segundoNombre,
                integrantes[i].primerApellido,
                integrantes[i].segundoApellido
            );
        }

        for (let i = 0; i < listaNombres.length; i++) {
            for (let j = 0; j < listaNombres.length; j++) {
                if (j !== i && listaNombres[j] === listaNombres[i] && !nombresRepetidos.includes(listaNombres[j])) {
                    nombresRepetidos.push(listaNombres[j]);
                }
            }
        }

        return nombresRepetidos;
    }

    function resaltarRepetidos(elementosRepetidos, color) {
        for (var i = 0; i < elementosRepetidos.length; i++) {
            const elementos = document.querySelectorAll(`.integrantes dd`);
            for (var j = 0; j < elementos.length; j++) {
                if (elementos[j].innerHTML === elementosRepetidos[i].toLowerCase()) {
                    console.log(elementos[j].innerHTML);
                    elementos[j].style.color = color;
                }
            }
        }
    }

    function mostrarInformacion(integrantes) {
        const mensaje = '-----\n';
        const resultIntegrantes = [];

        for (let i = 0; i < integrantes.length; i++) {
            let txtIntegrante = "Integrante " + (i + 1) + ": ";

            txtIntegrante += NombreExiste(integrantes[i].primerNombre);
            txtIntegrante += NombreExiste(integrantes[i].segundoNombre);
            txtIntegrante += NombreExiste(integrantes[i].primerApellido);
            txtIntegrante += NombreExiste(integrantes[i].segundoApellido);

            resultIntegrantes.push(txtIntegrante);
        }

        const mensajeFinal = mensaje + resultIntegrantes.join('\n') + '\n-----';
        console.log(mensajeFinal);
    }
});