const array=[45,76,34,32]

for(let i=0;i<=array.length;i++){
    console.log(array[i])
}

//FOR EACH

array.forEach(function(elemento){
    console.log(elemento)
})


array.forEach(function(elemento,idx){
    console.log(`${idx}-${elemento}`)
})


const arra5=[54,23,12]

let valor1=0
array.forEach(function(elemento){
    valor1=valor1+elemento
})
console.log(valor1)

//MAP

const dobledearray=array.map((elemento)=>{
console.log(`Multiplicando el valor de ${elemento}*2=${elemento*2}`)
})


//FILTER

const numeroRandom=[0,439,-783,236]

let nuevo=numeroRandom.filter((numero)=>{
return numero<0
})
console.log(nuevo)


//REDUCE

const numerosasumar=[432,5467,4311,0,329,890]

let contador=0
let sumartodo=numerosasumar.reduce((accumulator, valores)=> {return accumulator + valores},contador)
console.log(sumartodo)