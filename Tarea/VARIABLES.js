//Para llevar un control automatizado en la venta de boletos para ingresar a un partido de fútbol, el Tech Leader de tu equipo te asigna la responsabilidad de crear y
//asignar valor a un conjunto de variables. Recordá tener presente el tipo de dato que contienen.
//A continuación te dejamos algunos ejemplos de variables que puedes crear: Nombre - Apellido - Edad - Número de Teléfono - Socio (Valor booleano) - Fecha del partido -
//Hora del partido - Número de silla - Precio del boleto (con valores decimales).

var nombre="Canichosa"
var apellido="Salvaje"
var edad=5
var numerodetelefono=748327874
var socio=true
var fechadelpartido=new Date()
var horadelpartido=fechadelpartido.getHours()
var numerodesilla=32
var preciodelboleto= 3728

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(numerodetelefono)
console.log(socio)
console.log(fechadelpartido)
console.log(horadelpartido)
console.log(numerodesilla)
console.log(preciodelboleto)

console.log(typeof(nombre))
console.log(typeof(apellido))
console.log(typeof(edad))
console.log(typeof(numerodetelefono))
console.log(typeof(socio))
console.log(typeof(fechadelpartido))
console.log(typeof(horadelpartido))
console.log(typeof(numerodesilla))
console.log(typeof(preciodelboleto))



//a. nombre
//b. apellido
//c. sueldoActual
//d. porcentajeAumento
//3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).
//4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo sueldo.
//5. Usando el console.log() y concatenando string, muestra en la consola de Visual Studio Code los contenidos de cada una de las variables:
let nombre1="milkocho"
let apellido1="salvaje"
let sueldoActual=2347
let porcentajeAumento=15
let calculoAumento=(sueldoActual*porcentajeAumento)/100
let nuevoSueldo=calculoAumento+sueldoActual

console.log("Hola, estimad@ "+nombre1+" "+apellido1+
". En base a su sueldo actual: $"+
sueldoActual+
" ,ha recibido un aumento del: %"+porcentajeAumento+" siendo el aumento del $"+ calculoAumento+
". Su nuevo sueldo es de: $"+
nuevoSueldo)


//Suma
//II. Resta
//III. Multiplicación
//IV. División
//V. Módulo
//VI. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true.
//De lo contrario mostrará false
//VII. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true.
//De lo contrario mostrará false

let numeroA=45
let numeroB=98
let suma=numeroA+numeroB
let resta=numeroA-numeroB
let multiplicación=numeroA*numeroB
let división=numeroA/numeroB
let módulo=numeroA%numeroB
let mayorque=numeroA>numeroB
let menorque=numeroA<numeroB
console.log(suma)
console.log(resta)
console.log(multiplicación)
console.log(división)
console.log(módulo)
console.log(mayorque)
console.log(menorque)