let saludo="Hola mi querido mundo"
console.log(saludo[2])
console.log(saludo[saludo.length-1])

console.log(saludo.indexOf("i"))

console.log(saludo.slice(0, 6))

let palabra= "                  Dulzura"
console.log(palabra.trim())

console.log(saludo.split())
console.log(saludo.split(" "))
console.log(saludo.split(","))

let frasenueva=saludo.split(" ")
console.log(frasenueva.join(", "))

console.log(saludo.replace("Hola", "Buenos días"))