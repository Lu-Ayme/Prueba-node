for (let i=0; i<10; i=i+1){
console.log(i)
}

//for (let i=0; i<10; i=i*2){
 //   console.log(i)
  //  } (infinito ya que se multiplica por 0)

  for (let i=1; i<10; i=i*2){
    console.log("el número es: " + i)
    }
    
    //function multiplicar(numero){
      //  for (let i=1; i<=10; i++){
        //    console.log (i*numero==numero)
       // }}
    //multiplicar(9)


    let i=0
    while (i<10){
        console.log("es "+i)
        i++
    }


 //   function tablademultiplicar(numero){
  //      let i=1
   //     while(i<=10){
   //         console.log(i)
   //     }
 //   }
  //  tablademultiplicar(9)


  let y=19
 do{
    console.log(y)
 }while(y<=10)





 //EJERCICIO
 const listadeprecios=[439, 3829, 28928, 3829]
let totaldelacompra=0
 for(i=0; i<listadeprecios.length; i++){
totaldelacompra=totaldelacompra+listadeprecios[i]
 }
 console.log(totaldelacompra)


 //let i2=1    
 //while(true){
 //   console.log(i2)
  //  if(i2===10){
  //      break;
  //  }
  //  i++
 //}



 //EJERCICIO

 const movimientos=[
    100,
    -84,
    3982
    -7238,
 ]

 function calcularSaldos (movimientos){
    let saldoDepositos=0;
    let saldoRetiros=0;
    let saldoTotal=0;
    for (let i=0; i<movimientos.length; i++){
        if (movimientos[i]>0){
            saldoDepositos=saldoDepositos+movimientos[i];
        }else {
            saldoRetiros=saldoRetiros+movimientos[i]
        }
        balance=balance+movimientos[i]
    }
    const total=saldoDepositos-saldoRetiros
    return {
        depositos:saldoDepositos, 
        retiros: saldoRetiros, 
        total: total}
 }
 console.log(calcularSaldos(movimientos))

 function imrpimirmensaje(nombre, apelllido, movimientos, callback){
const total=callback(movimientos)
 }