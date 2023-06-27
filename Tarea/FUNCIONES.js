//Crea una función que permita calcular el monto a pagar por el alquiler de un vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla para bebe”.
//3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
//● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
//○ Compacto: $14000
//○ Mediano: $17000
//○ Camioneta: $28000
//● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día de $1200
//4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
//5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o argumentos. Usando el console.log(), muestra los resultados al usuario:
//“Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, el monto total a pagar es de $42000 ”


let cantidaddias=0
function costotalapagar(tipovehiculo, cantidaddias, sillabebe){
    let precioporvehiculo=0
    if(tipovehiculo==="Compacto"){
        precioporvehiculo=14000
    }else if(tipovehiculo==="Mediano"){
        precioporvehiculo=17000
    }else if(tipovehiculo==="Camioneta"){
        precioporvehiculo=28000
    }
    let preciosillabebe=0
    if (sillabebe==true){
        preciosillabebe=12000*cantidaddias
    }else{
        preciosillabebe=0
    }

   let costo= (precioporvehiculo*cantidaddias)+sillabebe
   return "Mi estimado cliente, el costo total a pagar por todo es de: "+costo
}

console.log(costotalapagar("Compacto", 43, true))


function CostoTotalapagar(tipodevehiculo, cantidaddedias, sillaparabebe){
    let preciopordia;
    if (tipodevehiculo==="Compacto"){
        preciopordia=14000;
        }else if(tipodevehiculo==="Mediano"){
        preciopordia=17000;
    }else if(tipodevehiculo==="Camioneta"){
        preciopordia=28000;
    }
    let preciosillaparabebe=0
    if (sillaparabebe===true){
        preciosillaparabebe=1200*cantidaddedias
    }
return (preciopordia*cantidaddedias)+preciosillaparabebe
}
const costofinal=CostoTotalapagar("Camioneta", 2, true)
console.log("Mi estimado cliente, el precio total a pagar por el alquiler es de: $"+costofinal)


//Primera función - Callback:
//● Tendrá la responsabilidad de calcular el total a pagar por el cliente, en base a un total de nueve parámetros que recibirá la función:
//Un string para el tipo de hamburguesa, teniendo en cuenta las siguientes:
//○ Carne a la parrilla: $1800
//○ Pollo: $1500
//○ Vegetariana: $1200
//● Y recibirá los ocho valores booleanos de los adicionales, teniendo en cuenta los siguientes:
//○ Jamón = $30
//○ Queso = $25
//○ Salsa de tomate = $5
//○ Mayonesa = $5
//○ Mostaza = $5
//○ Tomate = $15
//○ Lechuga = $10
//○ Cebolla = $10

//Segunda función:
//● Esta función tendrá la responsabilidad de devolver un mensaje al usuario donde le indique su nombre, su apellido y el total a pagar en base al tipo de hamburguesa seleccionado más los adicionales indicados. Tenga en cuenta que esta función deberá recibir como parámetros: “nombre del usuario”, “apellido del
//usuario”, “tipo de hamburguesa” y los ocho valores booleanos en función a los adicionales que el cliente haya seleccionado.





//Crear una función que recibe un string en minúscula, lo convierte a mayúsculas y lo retorna. Investiga qué hace el método de strings .toUpperCase()
//2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es eseparámetro. Investiga qué hace la palabra reservada typeof().
//3. Crear una función que calcule la edad de los perros, considerando que 1 año paranosotros son 7 de ellos.
//4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta quedicha función recibe tres parámetros: El salario mensual, la cantidad de díastrabajados y la cantidad de horas que regularmente trabajada por día.

function aMayuscula(texto){
    return texto.toUpperCase()
}
console.log(aMayuscula("hola mundo"))



function tipodedato(dato){
return (typeof dato)
}
console.log(tipodedato(89))


function edadperros(numerodelhumano){
    return numerodelhumano*7
}
console.log(edadperros(3))


function valordehoradetrabajo(salariomensual, cantidaddediastrabajados,cantidaddehoraspordia){
    let horaprecio= (salariomensual/cantidaddediastrabajados)/cantidaddehoraspordia
    return horaprecio
}

console.log(valordehoradetrabajo(247890, 31, 15))