const lugares=["plaza", "casa", "hospital", "parque"]
const nuevoslugares=["restaurante", "confitería", ...lugares]
console.log(nuevoslugares)

const nombreyedad={
    nombre:"Maribel",
    edad:26
}

const{edad}=nombreyedad
console.log(edad)

const nuevodato={
    amigo:`rulos`,
    edadamigo:16,
    ...nombreyedad
}

console.log(nuevodato)