
// Leemos contenido del <title>
console.log(document.title)

// Leemos datos definidos en HTML


var integrantes = [];

classByIntegrantes = document.getElementsByClassName('integrantes')
console.log('mostramos objeto en posicion 0')
for (let index = 0; index < classByIntegrantes.length; index++) {
    console.log(classByIntegrantes[index])

        var integrante = {};
        console.log('arranca armado del array')
        integrante.primerNombre = classByIntegrantes[index].children[1].innerHTML
   
        integrante.segundoNombre = classByIntegrantes[index].children[3].innerHTML
   
        integrante.primerApellido= classByIntegrantes[index].children[5].innerHTML
   
        integrante.segundoApellido = classByIntegrantes[index].children[7].innerHTML
   
        integrantes.push(integrante)
        console.log(integrantes)
}


