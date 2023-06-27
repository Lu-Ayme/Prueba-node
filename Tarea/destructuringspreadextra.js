/*En la carpeta raíz del proyecto, crear un nuevo archivo (extra.js).
2. Crear un array de números y asignarle un total de diez (10) valores numéricos.
3. Crear variables que contengan los valores numéricos dispuestos en el array en la
posición (0, 2 y 4) y con el resto de los valores numéricos crear un nuevo array. Utiliza
los recursos aprendidos en esta clase: Destructuring y Spread operator.
4. Crear un objeto literal para almacenar los datos de nuestra mascota, considerando
los atributos:
a. nombre
b. tipo de mascota (Perro - Gato)
c. color
d. raza
Haciendo uso de la desestructuración, crea una variable por cada una de las
claves del objeto literal y al final mostrar al usuario:
Hola les presento a mi mascota su nombre es: Bony, es un hermoso Perro, de
color: Dorado y su raza es: Golden retriever. */

const numeros=[2,65,432,123,437,321,689,567,321,453]
const [posicion0,,posicion2,,posicion4]=numeros

const arraynuevo=numeros.filter(function(numeros){
    return numeros!=posicion0&&numeros!=posicion2&&numeros!=posicion4
})

const arrayvacio=[
    ...arraynuevo
]

console.log(`este es el array vacio: [${arrayvacio}]`)



console.log("========================================")

const datosDeMascota={
    nombre:"Canichosa",
    tipo:"perra",
    color:"blanco crema",
    raza:"mestizo"
}

const {nombre,tipo,color,raza}=datosDeMascota

console.log(`Hola, les presento a mi mascota. Su nombre es: ${nombre}, es una hermosa ${tipo} de color ${color} y su raza es ${raza}`)