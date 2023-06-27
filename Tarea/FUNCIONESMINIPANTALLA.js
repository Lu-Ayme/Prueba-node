function perimetro(radio){
    let calcularperimetro= radio*3.1416*2
    return calcularperimetro
    }
    function area(radio){
        let calculararea= (radio*radio)*3.1416
        return calculararea
    }
    console.log (perimetro(5))
    console.log (area(5))






function sePoneLaOlla(diadelasemana){
    let dia= (diadelasemana=="Domingo")? "¡Pongamos la olla, hoy se comen pastas!": "Mejor lo dejemos para otro día"
    return dia
}
console.log (sePoneLaOlla("Lunes"))



function tengoClases(dia) {
	switch (dia) {
		case (dia=="Lunes"):
		console.log("Tenés clases")
		break
        case (dia=="Miercoles"):
            console.log("Tenés clase")
            break
            case (dia=="Viernes"):
            console.log("Tenés clase")
		default:
		console.log("no tenés clases")
		break
			}
}
console.log(tengoClases("Lunes"))


function sumado(nombreA, apellidoA){
  let longitud= nombreA+" "+apellidoA
   return longitud
}

function logitudnombrecompleto(nombreA, apellidoA, sumado){
    return sumado(nombreA+ apellidoA).length
}
console.log(logitudnombrecompleto("Lucía", "Andrade"))



function Semana(dia){
    switch (dia){
        case "Lunes":
            console.log ("Hoy no hacés nada")
            break
        case "Martes":
            console.log ("Hoy estás ocupado")
            break
    }
}
console.log (Semana("Martes"))


function tengoClases(dia){
    switch(dia){
        case dia=="Lunes":
        case dia=="Martes":
        case dia== "Viernes":
            console.log("Tenés clases")
            break;
            default:
                console.log("No tenés clases")
                
    }
}
tengoClases("Lunes")
console.log(tengoClases())
