function imprimirAzul4(){
    for (let a=1; a<=4; a++){
        console.log("Azul")
} 
    }
console.log(imprimirAzul4())


function pasandoPorI(frase){
    for (let i=1; i<=5; i=i+1){
   console.log(frase+i)
    } 
}
console.log(pasandoPorI("acá i tiene el valor de "))




function noParesDeContarImparesHasta(numero) {
    for (let i=0; i<=(numero%2); i=i+2){
    console.log()
}
    }
    console.log(noParesDeContarImparesHasta(8))



    function gananciaTotal(numeros){
        let sumatoria=0
        for(let i=0;i<=numeros.length;i++){
            if(numeros>=0){
                sumatoria=sumatoria+numeros
            }else if(numeros<0){
                sumatoria=sumatoria-numeros
            }
            return sumatoria
        }
    }
gananciaTotal([34,-12,89,-34])


function gananciasdelmes(numero){
    let nuevodato=0
    for (let i=1;i<=numero; i++){
    console.log(nuevodato=numero+i)
}
return nuevodato
}
console.log(gananciasdelmes(6))


function caracteres(caracteres){
    let nuevocontador;
let caractersacado=caracteres.shift()
nuevocontador.unshift(caractersacado)
return nuevocontador
}

console.log(caracteres([89,345,21]))