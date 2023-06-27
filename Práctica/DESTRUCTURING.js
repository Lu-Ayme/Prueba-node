//DESESTRUCTURAR ARRAYS

const colores=["azul","rojo","amarillo"]
const [colorazul, colorrojo, coloramarillo]=colores
console.log(colorazul)
console.log(colorrojo)
console.log(coloramarillo)

const[azul, ,amarillo]=colores
console.log(azul)
console.log(amarillo)

//DESESTRUCTURAR OBJETOS
const persona={
    nombre:"Canichosa",
    edad:13
}

const comollamar=persona.nombre
console.log(comollamar)

const {nombre, edad}=persona
console.log(nombre, edad)