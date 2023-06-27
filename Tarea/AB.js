//let adicionales={
  // Jamón = $30,
   //Queso = $25
//Salsa de tomate = $5
// Mayonesa = $5
// Mostaza = $5
//Tomate = $15
//Lechuga = $10
// Cebolla = $10
//}

function adicionales(){
    let precioporadicionales=0
switch(adicionales){
    case ("Jamón"==true):
        precioporadicionales=precioporadicionales+30
    case ("Queso"==true):
        precioporadicionales=precioporadicionales+25
    case ("Salsa de tomate"==true):
        precioporadicionales=precioporadicionales+5
    case ("Mayonesa"==true):
        precioporadicionales=precioporadicionales+5
    case ("Mostaza"==true):
        precioporadicionales=precioporadicionales+5
    case ("Tomate"==true):
        precioporadicionales=precioporadicionales+15
    case ("Lechuga"==true):
        precioporadicionales=precioporadicionales+10
    case ("Cebolla"==true):
        precioporadicionales=precioporadicionales+10
}
return precioporadicionales
}
console.log(adicionales("Jamón", "Tomate", "Lechuga", "Cebolla"))