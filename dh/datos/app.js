const fs = require("console")
const importar=require(`./collectibles.js`)


const marca1=importar ("Hot Toys")
const marca2=importar("Bandai")
const marca3=importar("Star Wars")


const unifiedCollectibles=[
    ...marca1,
    ...marca2,
    ...marca3
]


let collectibles={
    figuras:unifiedCollectibles,

    listFigures:function(){
        for (let i=0;i<=this.figuras.length;i++){
            return this.figuras
        }
},

    figuresByBrand:function(marca){
    let hello=this.figuras.filter((figura)=>figura.marca==marca
)
return hello
}
}

console.log(collectibles.figuresByBrand("Bandai"))


console.log("===============================")