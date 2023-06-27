//OPERADORES
//DE ASIGNACIÓN
let nombre="Canichosa"
console.log(nombre)


//LÓGICOS
let amigos= {
    "Mary": "sad",
    "Bel": "dos",
    "Carlos": "unodos",
}

console.log("Mary"=="uno" && "Bel"=="dos")

let ropa="Camiseta"
let precio=45

if (ropa=="Camiseta"&&precio<47){
    console.log("Cómprala")
}else if(ropa=="Camiseta"||precio==47){
    console.log("Cómprala, o te presto")
}else{
    console.log("no la compres, está muy cara")
}

//ARITMÉTICOS
//SUMA(+), RESTA(-), MULTIPLICACIÓN(*), DIVISIÓN(/), MÓDULO(%), IMCREMENTO(I++), DECREMENTO(I--)


//COMPARACION
//SIMPLE
100=="100"//true
100==200//false
100!="100"//false
100!="456"//true

//ESTRICTA
100==="100"//false
100===100//true
100!=="100"//true
100!==100//false


let Mary= "sad"
if (Mary=="sad"){
    console.log("comprar helado")
}

10>=15//false
10<=15//true

//CONCATENACIÓN
let nombre0="Luis"
let apellido2="Martinez"
console.log("Hola, "+nombre0+" "+apellido2)

//TYPEOF
console.log(typeof(nombre0))