let materias=["Lengua", "Matemáticas", "Geografía", "Física", "Educación física"]

let cualesmegustan=materias=>{
return ("Mi materias favoritas son las "+materias[1]+" la "+materias[3]+" y la "+materias[4])
}
console.log(cualesmegustan(materias))

console.log(materias)

materias.push("Química", "Música", "Ciencias de la Tierra")
let materiaqueodio= materias.pop()
console.log(materiaqueodio)


let meses=["Abril","Mayo","Junio","Julio"]
let diaymes=["15", "29", "20"]

function todojunto(meses, diaymes){
return ("El "+diaymes[2]+" de "+meses[3]+" fué el peor día del año")
}
console.log (todojunto(meses, diaymes))


let compañerosdecurso=["Cookie", "Suga", "Pat", "Rulos", "Ema"]
console.log("Les presento a: "+compañerosdecurso[1]+ " y "+ compañerosdecurso[2]+"; ellas son mis amigas."+(compañerosdecurso[3])+" es mi mejor amigo. "+compañerosdecurso[4]+" dejó de serlo")
let compañeroqueodio=compañerosdecurso.pop()
console.log(compañeroqueodio+" Me cae demasiado mal, lo odio.")

let comidasfavoritas=["Hamburguesa","Tacos","Ñoquis","Fideos solos"]
let diafavorito=["Licuado", "Batido",["Hamburguesa","Tacos","Ñoquis","Fideos solos"]]
console.log("Mi día favorito empieza con un "+diafavorito[0]+" y una muy buena y gran "+diafavorito[2][0])
comidasfavoritas.unshift("Guiso", "Napolitana", "Super hamburguesa")
let comidaquenomegusta=comidasfavoritas.shift()
console.log(comidaquenomegusta+": 16 años y me sigue sin gustar")
console.log(comidasfavoritas.length)


let comidas=["Hamburguesa", "Pizza", "Tacos"]
console.log(comidas.indexOf("Hamburguesa"))
console.log(comidas.lastIndexOf("Pizza"))
console.log(comidas.indexOf("Ñoquis"))
let queimprimo=(comidas.join(","))
console.log("Estas son mis comidas favoritas: "+queimprimo)


let numeros=["1", "54","80","98", "1"]
let dondedemoniosestá=numeros.lastIndexOf("1")
if(dondedemoniosestá>=0){
    console.log("Supérenme")
}

function unirtodo(numeros){
    return numeros.join()
}
console.log(unirtodo(numeros))


let animales=["Perro", "Caballo", "Cabra", "Ternero"]
let animalesnuevos=animales.push("Oveja", "Ratón")
console.log(animalesnuevos)
console.log(animales)

//PRÁCTICA EN LA CLASE

const nombres=["Lu", "Virginia", "Nutela"]
console.log(nombres[0])
console.log(nombres[5])


function miFuncion(nombres){
return nombres
}

console.log(miFuncion(nombres))

//DATO
console.log(nombres[nombres.length-1])

nombres.push("Victoria", "Canichosa")
console.log(nombres)

const nombreborrado=nombres.pop()
console.log(nombres)

console.log(nombreborrado)

nombres.shift()
console.log(nombres)

nombres.unshift("Lu")
console.log (nombres)

let todounido=nombres.join()
console.log(nombres)

let numerosz=["1", "2", "3", "4", "2", "6"]
console.log(numerosz.indexOf("2"))
console.log(numerosz.lastIndexOf("2"))

console.log(numerosz.includes("4"))
console.log(numerosz.includes("9"))


if (numerosz==numerosz.indexOf[3]){
    console.log("El elemento si existe")
}else{
    console.log("El elemento no existe")
}