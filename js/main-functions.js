window.addEventListener('DOMContentLoaded',function(){

const integrantes = [];

const classByIntegrantes = document.getElementsByClassName('integrantes');

for (let index = 0; index < classByIntegrantes.length; index++) {
    const integrante = {
        primerNombre: capitalizarPrimeraLetra(obtenerDato(index, 1)),
        segundoNombre: capitalizarPrimeraLetra(obtenerDato(index, 3)),
        primerApellido: obtenerDato(index, 5).toUpperCase(),
        segundoApellido: obtenerDato(index, 7).toUpperCase()
    };

    integrantes.push(integrante);
}

function obtenerDato(index, childIndex) {
    return classByIntegrantes[index].children[childIndex].innerHTML;
}

function capitalizarPrimeraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

const mensaje = '-----\n';
const resultIntegrantes = [];

for (let i = 0; i < integrantes.length; i++) {
    let txtIntegrante = "Integrante " + (i + 1);

    txtIntegrante += NombreExiste(integrantes[i].primerNombre);
    txtIntegrante += NombreExiste(integrantes[i].segundoNombre);
    txtIntegrante += NombreExiste(integrantes[i].primerApellido);
    txtIntegrante += NombreExiste(integrantes[i].segundoApellido);

    resultIntegrantes.push(txtIntegrante);
}

function NombreExiste(valor) {
    if (valor) {
        return " " + valor;
    } else {
        return "";
    }
}

const mensajeFinal = mensaje + resultIntegrantes.join('\n') + '\n-----';
console.log(mensajeFinal);    


})