function sumatoriaBajoImporte(importes){
    let gananciasmensuales=0
    for(let i=0;i<=importes.length;i++){
        if(importes[i]>0&&importes[i]<1000){
            gananciasmensuales=gananciasmensuales+importes[i]
                }
    }
    return gananciasmensuales
}
console.log(sumatoriaBajoImporte([3,45,23,-45, 98,1400,-78]))


function asientos(asientosdisponibles, asientorequerido){
        if(asientosdisponibles.includes(asientorequerido)){
            return ("Felicidades, el asiento número "+asientorequerido+" está disponible")
        }else{
            return ("Lo sentimos, el asiento número: "+asientorequerido+" no está disponible, pero aún quedan disponibles los asientos "+asientosdisponibles)
        }
    }

console.log(asientos([43,23,12,21,33], 89))



function reporteDePasajeros(estaciones){
let pasajeros=200
let calculo=(pasajeros-50)+30
let calculo2=(pasajeros-80)+120

for(let i=0;i<=estaciones.length;i++){
    if(i<5 || i>5){
        return("En la estación número "+i+" hay "+calculo+" pasajeros arriba del tren")
    }else if(i==5){
        return("En la estación número "+i+" hay "+calculo2+" pasajeros arriba del tren")
    }
}
}
console.log(reporteDePasajeros(5))



// function laClaveSecreta(caracteres){
    // let mensajeordenado=[]
    // for(let i=0;i<=caracteres.length;i++){
        // let sacar=caracteres.pop
        // return mensajeordenado.push(sacar)
    //}
// }
// 
// console.log(laClaveSecreta ([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]))

let mensajenoordenado=[ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]
let letrasacada=mensajenoordenado.pop()
console.log(letrasacada)
mensajenoordenado.unshift(letrasacada)
console.log(mensajenoordenado)

function laClaveSecreta(caracteres){
            let sacar=caracteres.pop()
            console.log(caracteres.unshift(sacar))
        }

console.log(laClaveSecreta ([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]))


function regresar(caracteres){
    for(let i=0;i<=caracteres.length;i++){
        let reorganizar=caracteres.pop()
        console.log(caracteres.unshift(reorganizar))
    }
}
console.log(regresar ([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]))
