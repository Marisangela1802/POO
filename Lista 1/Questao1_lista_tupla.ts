/*
let maior:number = 0
let menor:number = 0

let maior_menor:[number, number][]

function variaveis(x1:number, x2:number, x3:number):number{ //:[number,number]
    if(x1>x2 && x2>x3){
        maior = x1
        menor = x3
        maior_menor = [
            [maior,menor]
        ]
    }else if(x2>x1 && x1>x3){
        maior = x2
        menor = x3
        maior_menor = [
            [maior,menor]
        ]
    }else if(x3>x1 && x1>x2){
        maior = x3
        menor = x2
        maior_menor = [
            [maior,menor]
        ]
    }else if(x1>x3 && x3>x2){
        maior = x1
        menor = x2
        maior_menor = [
            [maior,menor]
        ]
    }else if(x3>x2 && x2>x1){
        maior = x3
        menor = x1
        maior_menor = [
            [maior,menor]
        ]
    }else{
        maior = x3
        menor = x1
        maior_menor = [
            [maior,menor]
        ]
    }
return
}

let Variaveis = variaveis(2,4,1)
console.log(maior_menor)

*/

function variaveis(x1:number, x2:number, x3:number):[number,number]{ //:[number,number]
    let maior:number = 0
    let menor:number = 0

    if(x1>x2 && x2>x3){
        maior = x1
        menor = x3
    }else if(x2>x1 && x1>x3){
        maior = x2
        menor = x3
    }else if(x3>x1 && x1>x2){
        maior = x3
        menor = x2
    }else if(x1>x3 && x3>x2){
        maior = x1
        menor = x2
    }else if(x3>x2 && x2>x1){
        maior = x3
        menor = x1
    }else{
        maior = x3
        menor = x1
    }
return [maior,menor]
}

console.log(variaveis(3,4,1))


