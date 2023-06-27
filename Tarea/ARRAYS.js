//Define un array que contenga un conjunto de seis (6) productos de electrodomésticos.
//3. Ejecutar sobre el array creado las siguientes acciones:
//● Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
//● Extraer el primer elemento del array y agregarlo al final del mismo.
//● Agregar al final del array dos (2) nuevos productos.
//● Mostrar por la consola la cantidad de elementos que contiene el array.
//● Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado no existe”.
//● Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
//● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
//● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
//● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma.

let electrodomésticos=["Plancha", "Secadora", "Horno", "Batidora", "Microondas", "Cacerola"]
console.log(electrodomésticos[0])
console.log(electrodomésticos[5])
console.log(electrodomésticos[4])

let elementoextraido=electrodomésticos.shift()
electrodomésticos.push(elementoextraido)
console.log(electrodomésticos)
electrodomésticos.push("Cuchara", "Exprimidora")
console.log(electrodomésticos)
console.log(electrodomésticos.length)

if (electrodomésticos.indexOf("Regla")>=0){
    console.log ("Producto encontrado")
}else{
    console.log("El producto buscado no existe")
}



if (electrodomésticos.includes("Plancha")==true){
    console.log ("Producto encontrado")
}else{
    console.log("El producto buscado no existe")
}


let unirtodo=electrodomésticos.join(", ")
console.log(unirtodo)

console.log(unirtodo.length)

let intercambio=unirtodo.replace("Plancha", "Plato")
console.log(intercambio)

let unirtodo2=intercambio.split(" ")
console.log(unirtodo2)

//El Tech Leader de la empresa DH-Movies requiere conocer la estructura de datos del nuevo proyecto, para ello debes tener presente lo siguiente:
//2. Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno de día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick', ‘Elvis’,‘Thor: amor y trueno’.
//3. Más tarde desde la producción indicaron que la película más vendida era: ‘Thor: amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees una función, la cual recibirá por parámetro la película indicada y deberá retornar la misma pero en mayúscula. Para ello sería bueno que investigues sobre el método .toUperCase(). Con ese valor recibido, deberás colocarla primera en la estructura creada.
//● Una vez terminada la actividad, nos indican que debemos crear una cadena de texto para las siguientes películas próximas a estrenar:
//○ Counter-Strike
//○ NOP
//○ Vértigo
//○ Nick
//○ Avatar.
//Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en cuenta que cada elemento debe estar separado por una coma.
//● Una vez creada la estructura, una de las programadoras del equipo indica que la primera película incorporada a la estructura no es una película sino un video juego. Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la estructura.
//4. Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las películas, para ello te recomendamos que investigues lo que hace el método .concat().


let peliculas=["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis","Thor: amor y trueno"]
let peliculanombrada=peliculas.pop()

function carteleraactual(peliculanombrada){
 let amayuscula=peliculanombrada.toUpperCase()
 return amayuscula
}

let carteleraactual2=peliculas.unshift(carteleraactual(peliculanombrada))
console.log(peliculas)


let proximaspeliculas="Counter-Strike NOP Vértigo Nick Avatar"
let modificar=proximaspeliculas.split(" ")
modificar.shift()
console.log(modificar)



function carteleraoficial(peliculas, modificar){
return (peliculas.concat(" ",modificar))

}
console.log(carteleraoficial(peliculas, modificar))
