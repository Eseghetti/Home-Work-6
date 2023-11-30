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
            listaNombres.push(integrantes[i].pNombre, integrantes[i].sNombre, integrantes[i].pApellido, integrantes [i].sApellido)
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
    
    for (let index = 0; index < classByIntegrantes.length; index++) {
        const integrante = {
            pNombre: capitalizarPrimeraLetra(obtenerDato(index, 1)),
            sNombre: capitalizarPrimeraLetra(obtenerDato(index, 3)),
            pApellido: obtenerDato(index, 5).toUpperCase(),
            sApellido: obtenerDato(index, 7).toUpperCase()
        };
        integrantes.push(integrante);        
    }
    
    var mensaje = '-----\n';
    const resultIntegrantes = [];
    
    for (let i = 0; i < integrantes.length; i++) {
        let txtIntegrante = 'Integrante ' + (i + 1) +' "';
    
        txtIntegrante += NombreExiste(integrantes[i].pNombre);
        txtIntegrante += NombreExiste(integrantes[i].sNombre);
        txtIntegrante += NombreExiste(integrantes[i].pApellido);
        txtIntegrante += NombreExiste(integrantes[i].sApellido);
    
        txtIntegrante += '\"';    
        resultIntegrantes.push(txtIntegrante);
    }
    
    
    mensaje += resultIntegrantes.join('\n') + '\n-----';
    console.log(mensaje);    
    
    const nombresRepetidos =  compararNombres(integrantes);
    console.log(nombresRepetidos.length)
    if (nombresRepetidos.length !== 1){
        console.log("Se repiten nombres")
        const color = prompt("Se repiten nombres, ingrese un color para destacarlos (red, #c4203f, etc)")
        resaltarRepetidos(nombresRepetidos, color)
    }

    })