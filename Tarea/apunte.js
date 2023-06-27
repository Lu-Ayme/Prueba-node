let miPrimerCalculadora;
let numeroA=8
let numeroB=4
let suma= numeroA+numeroB
let resta= numeroA-numeroB
let división= numeroA/numeroB
let multiplicación=numeroA*numeroB

switch (miPrimerCalculadora){
    case(suma):
    console.log (suma)
    break
    case (resta):
    console.log (resta)
    break
    case (multiplicación):
    console.log (multiplicación)
    break
    case (división):
    console.log (división)
    break
    default:
    console.log("Solo se permiten las operaciones de suma-resta-multiplicación-división")
    break
}


let numero1=5
let numero2= 10
let resultadooperación=[
    sumar= numero1+numero2,
    restar=numero1-numero2,
    multiplicar= numero1*numero2,
    dividir=numero1/numero2,
]


switch (resultadooperación){
    case(sumar):
    console.log("El resultado de sumar" + numero1 + " con " + numero2 + " es "+ sumar)
    break
    case (restar):
    console.log ("El resultado de restar " + numero1 + " con " + numero2 + " es " + restar)
    break
    case(multiplicar):
    console.log("El resultado de multiplicar " + numero1 + " con " + numero2 + " es " + multiplicar)
    break
    case(dividir):
    console.log("El resultado de dividir " + numero1 + " con " + numero2 + " es " + dividir)
    break
    default:
    console.log("Solo se permiten las operaciones de suma-resta-multiplicación-división")
    break
}



let multi=numeroA=>numeroA*2
console.log(multi(123))


let dameCinco= (n1, n2, n3, n4, n5)=>["n1", "n2", "n3", "n4", "n5"]
console.log(dameCinco(1, 2, 3, 4, 5))