//Saldo Bancario
//El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir ejecutando cada una de las siguientes consignas para lograr el objetivo:
//1. Crear un array que contenga las operaciones bancarias realizadas por el cliente, tomando en cuenta que los depósitos serán representados por valores positivos y los retiros por valores negativos.
//2. Crear una función (Callback) que reciba como parámetro el array creado. La función tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo actual de retiros y el saldo actual del cliente.
//3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así como el array que contiene las operaciones bancarias. Esta función tendrá la responsabilidad de retornar el nombre y apellido del cliente y el saldo total de depósitos, el saldo actual de retiros y el saldo actual.
//Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log() para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:

//Estimada Gloria Medina:
//El monto total de los depósitos es de: $5500.
//El monto total de los retiros es de: $15000.
//Por lo tanto, su saldo actual en la cuenta es de: $40000.

let operacionesbancarias=[23, -12, 987,-4356,3456,2783,-6758]

function calcularmontos(operacionesbancarias){
    let depositosdelcliente=0
    let retirosdelcliente=0
    let saldoactual=0
    for(let i=0;i<=operacionesbancarias.length;i++){
        if(operacionesbancarias[i]>0){
        return depositosdelcliente+operacionesbancarias[i]
        }else if(operacionesbancarias[i]<=0){
        return retirosdelcliente+operacionesbancarias[i]
        }
        return saldoactual=depositosdelcliente-retirosdelcliente
    }
}

console.log(calcularmontos(operacionesbancarias))
// function final(nombre, apellido, operacionesbancarias, callback){

// }


//Tabla de multiplicar
//Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se pueda visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar algunos de los ciclos o bucles aprendidos: for - while o do while,
//Para ayudar al equipo de desarrollo, tu responsabilidad será:
//1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de generar de manera automática la tabla de multiplicar del 1 al 10.
// function tablademultiplicar(){
    // for(let i=0;i<=10;i++){
        // let contador=0
        // while(contador<=10){
            // console.log(`${contador}*${i}=${contador*i}`)
            // contador++
        // }
    // }
// }
// console.log(tablademultiplicar())


// En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que desarrolles.
//1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
//2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
//3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
//4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de las letras de la cadena de texto pero en MAYÚSCULA.
//Pista: Investigar el método .toUpperCase.
//5. Crear una función que reciba como parámetro un array de números positivos. Tendrá la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
//Pista: Investiga sobre el uso del operador módulo. Recordemos también que un número par es aquel que se puede dividir entre 2.

// function losdiezsiguientes(valor){
    // for (let i=0; i<=10;i++){
        // console.log(valor+i)
    // }
// }
// console.log(losdiezsiguientes(2))