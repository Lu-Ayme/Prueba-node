//Desarrolla un programa que le indique al usuario - en base a su perfil o responsabilidades - qué puede hacer o no en el sistema. Para eso debes crear una
//variable llamada: “perfil” y asignarle alguno de estos valores:
//a. administrador
//b. asistente
//c. invitado.
//Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
//console.log():
//A. Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
//mensaje: “Debe especificar el perfil del usuario”.
//B. Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la
//consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
//uso del sistema”.
//C. Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar
//este mensaje: “Usted sólo tiene permisos de registrar, modificar y
//consultar datos”.
//D. Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este
//mensaje: “Usted sólo tiene permisos de consultar datos”.
//E. Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
//este mensaje: “Debe especificar un perfil válido”.

let usuario= "Invitado"
switch (usuario){
    case ("INVITADO"):
    case ("Invitado"):
    case ("invitado"):
        console.log("Usted solo tiene permiso para consultar datos")
    break 
    case ("ASISTENTE"):
    case ("Asistente"):
    case ("asistente"):
        console.log("Usted solo tiene permiso para registrar, consuktar y modificar datos")
    break
    case ("ADMINISTRADOR"):
    case ("Administrador"):
    case ("administrador"):
        console.log("Usted tiene todos los privilegios de uso del sistema")
    break
    case (" "):
        console.log("Debe especificar un perfil válido")
    break
}

//Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el operador condicional ternario, queremos determinar cuánto va a pagar un hogar según su consumo. Veamos los pasos a seguir...
//a. Crear una variable “pagoMes” y asignarle un pago actual de energía eléctrica por mes.
//b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de
//Kilovatios hora de consumo mensual por el hogar.
//c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago actual
//se le incrementará un 20%.
//d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá ningún aumento.

let pagoMes=5000
let consumoKWH= 500
let incrementodelpago= pagoMes+((pagoMes*20)/100)
let pagoActual= consumoKWH>300?("Debido a que su hogar tuvo un consumo de " + consumoKWH + ",en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de " + incrementodelpago): "Usted no tiene que pagar ningún incremento"
console.log(pagoActual)


let traductor="";
switch (traductor){
case("Perro"):
    console.log("Dog")
    break
case ("Gato"):
    console.log ("Cat")
    break
case ("Puerta"):
    console.log ("Door")
    break
case ("Ventana"):
    console.log ("Window")
    break
case ("Mesa"):
    console.log("Table")
    break
default: 
console.log("La palabra ingresada era incorrecta")    
}

//en base a dos valores suministrados y al tipo de operación indicada: “sumar”, “restar”, “multiplicar”, “dividir”.
//Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
//3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle un mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar
//- restar- multiplicar- dividir”.
let numeroA=67
let numeroB=78
let operaciones=
 sumar=numeroA+numeroB
 restar= numeroA-numeroB
 multiplicar=numeroA*numeroB
 dividir=numeroA/numeroB

switch(operaciones){
    case sumar:
    console.log("El resultado de sumar "+numeroA+" y "+numeroB+" es "+sumar)
    case restar:
    console.log("El resultado de restar "+numeroA+" y "+numeroB+" es "+restar)
    case multiplicar:
    console.log("El resultado de multiplicar "+numeroA+" y "+numeroB+" es "+multiplicar)
    case dividir:
    console.log("El resultado de dividir "+numeroA+" y "+numeroB+" es "+dividir)
    default:
        console.log("Las operaciones aceptadas son sumar-restar-multiplicar-dividir")
        break

}

let numeroA1=67
let numeroB1=78
let operaciones1=
 sumar=numeroA+numeroB
 restar= numeroA-numeroB
 multiplicar=numeroA*numeroB
 dividir=numeroA/numeroB

switch(operaciones1){
    case sumar:
    case restar:    
    case multiplicar:
    case dividir:
    console.log("El resultado de sumar "+numeroA1+" y "+numeroB1+" es "+sumar)
    console.log("El resultado de restar "+numeroA1+" y "+numeroB1+" es "+restar)
    console.log("El resultado de multiplicar "+numeroA1+" y "+numeroB1+" es "+multiplicar)
    console.log("El resultado de dividir "+numeroA1+" y "+numeroB1+" es "+dividir)
    default:
        console.log("Las operaciones aceptadas son sumar-restar-multiplicar-dividir")
        break

}



//Desarrollar el programa mi primera calculadora. Queremos que, usando estructura switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
//hará en base a dos valores suministrados y al tipo de operación indicada: “sumar”, “restar”, “multiplicar”, “dividir”.
//Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
//3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle
//un mensaje al usuario que le informe que 

let aterrizarAvión;
let alturadelavión= 280
let velocidaddelavión= 150

if (alturadelavión>=268 && alturadelavión<=278 && velocidaddelavión>=150 && velocidaddelavión<=300){
    console.log("Estamos listos para aterrizar :D")
}else(" ");{
    console.log ("Aún falta para aterrizar")
}