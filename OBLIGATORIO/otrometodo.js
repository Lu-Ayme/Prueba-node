const autosImportados=require("./autos")


const concesionaria = {
autos: autosImportados,


buscarAuto: function (patente){
    const autoEncontrado= this.autos.find((auto)=>auto.patente===patente)
    if(autoEncontrado!==undefined){
    return autoEncontrado
    }else {
    return null
    }
},


venderAuto:function (patente){
let autoEncontrado=this.buscarAuto(patente)
    if(autoEncontrado===true){
    return "Auto encontrado"
}
    autoEncontrado.vendido=true
},


autosParaLaVenta:function(){      
    return this.autos.filter(auto=>auto.vendido==false)
},


autosNuevos:function(){
    const autosParaLaVenta= this.autosParaLaVenta()
    return autosParaLaVenta.filter(auto=>auto.km<100)
},


listaDeVenta:function(){
    const vendido=this.autos.filter(auto=>auto.vendido==true)
    const autosvendidos=vendido.map(auto=>auto.precio)
    return autosvendidos
},


totalDeVentas:function(){
    return this.listaDeVenta().reduce((acum, elementoActual)=>acum+elementoActual)
},

puedeComprar:function(autos, persona){
    const costoCuota=autos.precio/autos.cuotas
    if((persona.capacidadDePagoTotal>this.auto.precio)&&(costoCuota<persona.capacidadDePagoEnCuotas)){
        return true
    }else{
     return false   
    }
    },


    autosQuePuedeComprar:function(persona){
        this.autosParaLaVenta().filter((autos)=>{
        return this.puedeComprar(auto, persona)
        })
    }
}

const persona={
nombre: "Juan",
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}


console.log(concesionaria.autosQuePuedeComprar())