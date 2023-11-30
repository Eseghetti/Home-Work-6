// Leemos contenido del <title>
console.log(document.title)

window.addEventListener('DOMContentLoaded',function(){

    function obtenerDato(index, childIndex) {
        return classByIntegrantes[index].children[childIndex].innerHTML;
    }
    
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

    function resaltarRepetidos(elementosRepetidos, color) {
        for (var i = 0; i < elementosRepetidos.length;i++){
            const elementos = document.querySelectorAll(`.integrantes dd`);
            for (var j = 0; j < elementos.length;j++){
                if (elementos[j].innerHTML === elementosRepetidos[i].toLowerCase()) {
                    console.log(elementos[j].innerHTML)
                    elementos[j].style.color = color
                }
            }
        }
      }

    function compararNombres(integrantes){
        const listaNombres = [];
        const nombresRepetidos = [];
        
        //agregamos todos los nombres y apellidos en un array
        for (let i = 0; i < integrantes.length; i++) {
            listaNombres.push(integrantes[i].primerNombre, integrantes[i].segundoNombre, integrantes[i].primerApellido, integrantes [i].segundoApellido)
        }

        //guardamos en el array nombre y apellidos repetidos aquellos que se repiten dentro del array de nombres
        for (let i = 0; i < listaNombres.length; i++){
            for (let j = 0; j < listaNombres.length; j++){
                if(j !== i && listaNombres[j] === listaNombres[i] && !nombresRepetidos.includes(listaNombres[j])){ 
                        nombresRepetidos.push(listaNombres[j])     
                }
            }
        }
        
        return nombresRepetidos
    }

    
    const integrantes = [];
    
    const classByIntegrantes = document.getElementsByClassName('integrantes');

    console.log(classByIntegrantes[1].children[3].innerHTML)
    
    for (let index = 0; index < classByIntegrantes.length; index++) {
        const integrante = {
            primerNombre: capitalizarPrimeraLetra(obtenerDato(index, 1)),
            segundoNombre: capitalizarPrimeraLetra(obtenerDato(index, 3)),
            primerApellido: obtenerDato(index, 5).toUpperCase(),
            segundoApellido: obtenerDato(index, 7).toUpperCase()
        };
    
        integrantes.push(integrante);
    }
    
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
    
    const nombresRepetidos =  compararNombres(integrantes);
    if (nombresRepetidos.length > 0){
        console.log("Se repiten nombres")
        const color = prompt("Se repiten nombres, ingrese un color para destacarlos (red, #c4203f, etc)")
        resaltarRepetidos(nombresRepetidos, color)
    }

    })