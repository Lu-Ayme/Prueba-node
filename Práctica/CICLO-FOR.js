//FOR OF LOOP
for(let a=2; a<=6; a++){
    console.log("El valor de a es: "+a)
}

for(let o=1; o<=4; o++){
    console.log("Hola")
}

for (let azul=1; azul<=4; azul++){
    console.log("Azul")
}

for (let i=0; i<=4; i++){
    console.log("acá i tiene el valor de: "+i)
}

"============================================"
let i=0
function pasandoporI(i){
    for (let i=0; i<=4; i++){
console.log ("acá i tiene el valor de: "+i)} 
return    
}
console.log(pasandoporI(i))



function tablaDeMultiplicar(numero) {
    for (let i=1; i<11; i++){
        console.log(numero* i )
    } 
    }
    console.log (tablaDeMultiplicar(5))
    console.log("Fin del ciclo")

    


for (let a=1; a<=4; a++){
    console.log("esta es mi vuelta número "+a)
}

let precios=[200, 4390, 6732, 2819]
for (let valor of precios){
    console.log("el precio es: "+valor)
   let descuento= valor*21/100
    console.log("el precio con descuento es: "+descuento)
}

let frase="Hoy no"
for (let letra of frase){
    console.log(letra)
}

//con fin
for (let u=2; u<4; u++){
    console.log("el número es: "+
    u)
}
console.log("Fin del ciclo")


for (let i=0; i<4; i++){
    console.log(i)
    for (let h=1; h<4; h++){
        console.log(h)
    }
}

//
let f=1
while(f<=4){
    console.log("el valor es: "+f)
    f++;
}

//
let hola= 2
do{
    console.log("Te lo compré "+hola+ " veces")
    hola++
}while(hola<=6)



function imprimirazul(){
    for (let a=1; a<5; a++){
        console.log("Azul")
    }
}
console.log(imprimirazul())

for (let i=1;i<=10;i++){
    console.log("El valor de i es igual a: "+i)
}

function tablaDeMultiplicar(numero) {
    let i=0
    while(i<=10){
        console.log(numero +" * " + i + " = " + (numero*i))
        i++
    }
    }
    
    console.log(tablaDeMultiplicar(8))



for (let i=0;i<=10;i=i+2){
    console.log(i)
}


for (let i=0;i<10;i++){
    console.log(i*2)
}


function esNumeroPrimo(n){
    //Si “n” es menor o igual a 1, definitivamente no es primo
    if (n <= 1){
            return false;
    }
    //Si hay algún número debajo de “n” por el que podamos 
    // dividir n y sea una división sin resto
    // entonces tampoco es primo.
        for (let i = 2; i < n; i++){
            if (n % i == 0){ 
            return "No es número primo";
        }else{
        //Si llegamos hasta “n” en el ciclo y nunca retornamos
        // entonces, “n” es primo!
        return "Si es número primo";
}
}
}
    console.log(esNumeroPrimo(17))

    function numeroimpar(numero){
        for (let i=2;i<=numero;i++){
            if(numero%i==0){
                return false
            }else if(i>numero){
                return false
            }else if(numero%i!=0){
                return true
}
}
}
    console.log(numeroimpar(9))


    function noParesDeContarImparesHasta(numero) {
        let impartotal=0
    for(let i=0;i<=numero; i++){
    if (numero%2!=0){
        return impartotal+numero(i)
    }
    }
    }
    console.log(noParesDeContarImparesHasta(4))