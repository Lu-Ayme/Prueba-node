function reportdeDePasajeros(cantidaddeestacionespasadas){
    let pasajeros=200

cantidaddeestacionespasadas.split(",")


    if(cantidaddeestacionespasadas!=15){
         console.log (pasajeros=pasajeros-30+50)
    }else if(cantidaddeestacionespasadas==15){
         console.log(pasajeros=pasajeros-80+120)
    }
    return (`en la estación número ${cantidaddeestacionespasadas} hay sobre el tren ${pasajeros} pasajeros`)
}


console.log(reportdeDePasajeros(15))