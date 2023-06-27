//Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

//La función entrenarHoras tiene las siguientes tres características:

//Recibe por parámetro la cantidad de horas.
//Resta a su energía (this.energia) la cantidad de horas x 5.
//Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadDeHoras){
       this.energia=this.energia-cantidadDeHoras*5
       this.experiencia=this.experiencia-cantidadDeHoras*2
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.entrenarHoras);
console.log("Deportista experiencia: "+deportista.entrenarHoras);