let lista = [2,3,5,4,6,7,10]
let soma_total = 0
for(let i=0; i<lista.length; i++){

    soma_total+= lista[i]

}

let media = soma_total/lista.length
console.log(media)

for(let i2=0; i2<lista.length; i2++){
    if(lista[i2]>=media){
       console.log(lista[i2])
    }
}
