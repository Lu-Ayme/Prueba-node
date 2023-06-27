//CNDICIONALES
//IF STATEMENTS
let rodadoMountainBike = 18;
let rodadoAurora = 24;

let marcaRodadoMasGrande = rodadoMountainBike > rodadoAurora?"La bicicleta con mayor rodado es la rodadoMountainBike":"La bicicleta con mayor rodado es la rodadoAurora"
console.log(marcaRodadoMasGrande)


let Maria="triste"
let tamañodeemocion= 19
if (Maria=="triste" && tamañodeemocion==20){
    console.log("Comprar helado")
}else if(Maria=="feliz"){
    console.log("No hace falta comprar helado")
}else (Maria =="sad"|| tamañodeemocion==2000);{
    console.log("tienes que comprar helado urgente")
}


let rulos="va al gym"
let días= ["Lunes", "Miércoles", "Jueves", "Viernes", "Sábado"]
let díasdedescanso= "Domingo"

let quehaceruloshoy= díasdedescanso=="Domingo"? "Hoy no tenés que ir al gym": "Anda al gym"
console.log(quehaceruloshoy)


let sitioWeb= "peliculasdeterror"
let edadpermitida= 20

if (edadpermitida==12){
console.log("Es demasiado menor")
}else if(edadpermitida==18){
    console.log("Es menor de edad")
}else (edadpermitida==20);{
    console.log ("Puede entrar")
}


//SWITCH
switch (rulos){
    case "Domingo":
    console.log("¿Hoy que haces");
    break;
    case "va al gym":
    console.log("Dale duro mi hermano");
    break
}

switch(rulos){
    case ("Lunes"&&"va al gym"):
        console.log("¿Vas al gym?");
        break;
    case ("va al gym"||"Domingo"):
        console.log("¿Qué estará haciendo rulos?")
    break;
}