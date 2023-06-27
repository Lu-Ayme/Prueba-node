function Peliculasfavoritas(nombre, duracion, premios, calificacion, genero, precio){
    this.nombre=nombre
    this.duracion=duracion
    this.premios=premios
    this.calificacion=calificacion
    this.genero=genero
    this.precio=precio
}

let pelicula1=new Peliculasfavoritas("Vuelta a casa", 29, true, 5, "Fantasía", 3.45)
let pelicula2=new Peliculasfavoritas("Avatar", 10, true, 4.5, "Fantasía", 45.98)
let pelicula3=new Peliculasfavoritas("Anabelle", 45, false, 5, "Suspenso", 98.99)

console.log(pelicula1)
console.log(pelicula2)
console.log (pelicula3)



module.exports=pelicula1
module.exports=pelicula2
module.exports=pelicula3