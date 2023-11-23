
// Leemos contenido del <title>
console.log(document.title)

// Leemos datos definidos en HTML

window.addEventListener('DOMContentLoaded',function(){ //Esperamos a que la ventana cargue completamente para ejecutar toda la acción.

    var integrantes = [];
    
    classByIntegrantes = document.getElementsByClassName('integrantes')
    
    for (let index = 0; index < classByIntegrantes.length; index++) {
        let integrante = {
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: ''
        };
    
        integrante.primerNombre = classByIntegrantes[index].children[1].innerHTML;
        integrante.segundoNombre = classByIntegrantes[index].children[3].innerHTML;
        integrante.primerApellido = classByIntegrantes[index].children[5].innerHTML.toUpperCase();
        integrante.segundoApellido = classByIntegrantes[index].children[7].innerHTML.toUpperCase();
        integrantes.push(integrante);
    }
    
    var mensaje = '-----\n';
    resultIntegrantes = [];
    
    for (let i = 0; i < integrantes.length; i++) {
        let txtIntegrante = "Integrante " + (i + 1);
    
        if (integrantes[i].primerNombre != "") {
            txtIntegrante += " " + integrantes[i].primerNombre;
        }
        if (integrantes[i].segundoNombre != "") {
            txtIntegrante += " " + integrantes[i].segundoNombre;
        }
        if (integrantes[i].primerApellido != "") {
            txtIntegrante += " " + integrantes[i].primerApellido;
        }
        if (integrantes[i].segundoApellido != "") {
            txtIntegrante += " " + integrantes[i].segundoApellido;
        }    
        resultIntegrantes.push(txtIntegrante);
    }
    
    mensaje += resultIntegrantes.join('\n') + '\n-----';
    console.log(mensaje);
    
    // ------------------------------------------------------------------------------------------------------------------ //
    console.log('ejercicio 4');
    
    function comparar(integrantes) {
        
        
        
    }
    

    }) // fin
    