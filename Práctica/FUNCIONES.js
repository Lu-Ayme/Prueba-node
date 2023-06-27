//Función expresada
let suma= function(numero1, numero2){
   return numero1 + numero2
}
console.log(suma(9, 8))

let nombreyapellido= function (nombre1, nombre2, apellido){
    return nombre1 + " "+ nombre2+ " " + apellido
}
console.log(nombreyapellido("Lucía", "Aymé", "Andrade"))

//Función declarada
function segyundointentodenombreyapellido(nombre3, nombre4, apellido2){
    return nombre3 + " " + nombre4 + " " + apellido2
}
console.log(segyundointentodenombreyapellido("Lucía", "Aymé", "Andrade"))

//Scope Local
function decirhola (saludar){
    let quedecir= "Hola, hace mucho que no te veo"
    return (quedecir)
}
function saludo (responder){
let querespondo= "¿Cómo estás?"
return (querespondo)
}
console.log (decirhola())
console.log (saludo())

function comidafavorita (comida1){
    let comida1= "Amo las hamburguesas"
    return (comida1)
}
console.log(comidafavorita())


//Scope global
let queidiomaestoyaprendiendo= "Chino y Portugués"
function queidiomaaprendo(){
    return (queidiomaaprendo)
}
console.log (queidiomaestoyaprendiendo)

function quehariacarloselultimodia (quehará){
    let deberes= (
        primerahora= "jugar con pat",
        segundahora= "ir al gym",
        tercerahora= "disfrutar la tarde"
    )
    return (deberes)
}
console.log(quehariacarloselultimodia())


//
let operaciones= function (numeroA, numeroB){
    return numeroA+numeroB
}
console.log (operaciones(9, 8))


function quehagahoy (Opción1, opción2){
    return Opción1+ " y "+opción2
}
console.log (quehagahoy("dormir", "comer"))


function tareadecolegio(){
    let quehagoprimero= "Lengua y Literatura";
    return (quehagoprimero)
}
console.log (tareadecolegio())

let quehaceshoy= "Hoy hago ejercicio"
function dimelo (opcion1, opcion2){
    opcion1+" y "+ opcion2
    return (quehaceshoy)
}
console.log (quehaceshoy)




let noquierotrabajar= "Odio ecología"
function quenoquiereshacer(){
    return (noquierotrabajar)
}
console.log(quenoquiereshacer())

function hayalgoquenoquierohacer(){
    let queodias= "lengua"
    return (queodias)
}
console.log(hayalgoquenoquierohacer())




//Arrow function
let quehagohoy=(opcion1, opcion2)=> opcion1+" y "+opcion2
console.log(quehagohoy("Dormir", "Comer"))


let suma8= (a, b)=> a + b
console.log (suma8(7, 6))


let diasDeLaSemana=(dia)=>{
    switch(dia){
        case (dia=="Lunes"&&dia=="Miércoles"&&dia=="Jueves"):
        return ("Descansá")
    default:
        return("Andá a trabajar")
    }}
console.log(diasDeLaSemana("Jueves"))


let nombresdeperros=(nombre)=>{
    if (nombre=="Pedro"||nombre=="Roberto"||nombre=="Santiago"||nombre=="Tobías"){
    return ("Probemos con otro nombre")
}else if(nombre=="Pepperoni"||nombre=="Lomito"||nombre=="Jack"){
    return ("Esos nombres no están nada mal")
}else if(nombre=="Panqueque"||nombre=="Hamburguesa");{
    return ("Este nombre me encanta :3")
}
}

console.log(nombresdeperros("Panqueque"))

let mostrarNombre=nombreA=>"hola!" + " "+nombreA
console.log(mostrarNombre("Lucía"))


let saludar=nombre8=>"Hola, "+nombre8+"!"
console.log(saludar("canichosa"))

let saludar1=nombre=>'Hola, ' + nombre + '!';
console.log("Canichosa")

//Callbacks
let sumar= numeroA+numeroB
let restar= numeroA-numeroB
let multiplicar=numeroA*numeroB
let dividir= numeroA/numeroB
let calcu =(numeroA, numeroB, callback)=>{
    return callback(numeroA, numeroB)
}
console.log(calcu(4,6,dividir))


function nombrecompleto(nombre1, nombre2, apellido1){
    return nombre1+" "+nombre2+" "+apellido1
}

function llamar(nombre1, nombre2, apellido1, callback){
    return "Preséntese "+callback(nombre1, nombre2, apellido1)
}
console.log(llamar("Lucía", "Aymé", "Andrade", nombrecompleto))





function nombredesconocido(nombre1, nombre2, nombre3, apellido1, apellido2){
    return nombre1+" "+ nombre2+" "+nombre3+" "+apellido1+" "+apellido2
}

function presentación(nombre1,nombre2,nombre3,apellido1,apellido2, callback){
    return "Buenas tardes. Soy el mismísimo "+ callback(nombre1, nombre2, nombre3, apellido1, apellido2)
}

console.log(presentación("Vladimir", "Ruscaro", "Harry", "Voldemort", "De Los Andes", nombredesconocido))