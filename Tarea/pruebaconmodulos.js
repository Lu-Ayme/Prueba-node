const fs=require("fs")
const existeono=fs.existsSync("AB.js")

console.log(existeono)

const texto=fs.readFileSync("textoparamodulo")
console.log(texto)

fs.writeFileSync("textoparamodulo", "Hola alienígenas")