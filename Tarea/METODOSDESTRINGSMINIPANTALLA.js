let texto="Este texto es buena onda"
let reemplazo1= "buena onda"
let reemplazo2="piola"

function reemplazoFastFast(texto, reemplazo1, reemplazo2){
    return texto.replace(reemplazo1("buena onda"),reemplazo2("piola"))
}
console.log(reemplazoFastFast())


