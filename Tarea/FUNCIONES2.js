function calculareltotalapagar(tipodeHamburguesa, adicionales){
    let precioporhamburguesa;
    if (tipodeHamburguesa==="Carne a la parrilla"){
        precioporhamburguesa=1800
    }else if (tipodeHamburguesa==="Pollo"){
        precioporhamburguesa=1500
    }else if (tipodeHamburguesa==="Vegetariana"){
        precioporhamburguesa=1200
    }
}

let tipohambur="Carne a la parrilla"; "Pollo"; "Vegetariana"
let adicionales="Jamón, Queso, Salsa de Tomate, Lechuga, Cebolla, Mostaza, Mayonesa"


function totalaPagar(tipohambur, Jamon, queso, tomate, salsa){
    let preciototal=0
    if(tipohambur==="Carne a la parrilla"){
preciototal=preciototal+1800
    }else if(tipohambur==="Pollo"){
        preciototal=preciototal+1500
    }else if(tipohambur==="Vegetariana"){
        preciototal=preciototal+1200
    }else{
        console.log("El tipo de hamburguesa no es válido")
        return
    }
    if(Jamon){
        preciototal=preciototal+30
    }
    if(queso){
        preciototal=preciototal+25
    }
    if(tomate){
        preciototal=preciototal+78
    }
    if(salsa){
        preciototal=preciototal+15
    }
    return preciototal
}
console.log("Carne a la parrilla", "tomate", "queso")

function mensaje(nombre, apellido, tipodeHamburguesa, Jamon, queso, tomate, salsa, callback){
    console.log("Estimado"+nombre+apellido+"el monto total a pagar es de"+callback(tipodeHamburguesa, Jamon, queso, tomate, salsa)
)}

console.log(mensaje("German", "Holanda", "Carne a la parrilla", true, false, false, true, calculareltotalapagar))