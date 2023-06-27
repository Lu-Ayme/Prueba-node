const fs=require("fs")
const importararchivos1=fs.readFileSync(`./figuras1.json`,`utf-8`)
const importararchivos2=fs.readFileSync(`./figuras2.json`,`utf-8`)
const importararchivos3=fs.readFileSync(`./figuras3.json`,`utf-8`)

function importar(marca){
    if(marca=="Hot Toys"){
    return JSON.parse(importararchivos1)
    }else if(marca=="Bandai"){
    return JSON.parse(importararchivos2)
    }else if(marca=="Star Wars"){
    return JSON.parse(importararchivos3)
}
}

module.exports=importar